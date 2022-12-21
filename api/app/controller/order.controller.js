const OrderModel = require("../model/order.model");
const ProductModel = require("../model/product.model");

class OrderController{
    createOrder =async (req, res, next) => {
        try{
            let payload = req.body;    // [{product_id: '', qty: 1, total_amt: ""}]

            let order_data = {
                buyer_id: req.auth_user._id,
                cart: [],
                sub_total: 0,
                discount: {
                    ...payload.discount
                },
                service_charge: payload.service_charge || 0,
                delivery_charge: payload.delivery_charge || 0,
                vat: 0,
                total_amount: 0,    // this needs and update
                order_date: Date.now(),
                status: "pending",
                is_paid: {
                    paid: payload.is_paid,
                    mode: payload?.transaction_code ? 'online' : 'cod',
                    transaction: payload?.transaction_code || null
                },
                created_by: req.auth_user._id,
            }

            let cart = [];
            let sub_total = 0;
            let cart_product_ids = payload.cart.map((item) => item.product_id); // [product_id, product_id]

            let cart_product = await ProductModel.find({
                _id: {
                    $in: cart_product_ids
                }
            })
            
            cart_product.map((prod) => {
                let curr_qty = 0
                payload.cart.map((item) => {
                    if(prod._id.equals(item.product_id)) {
                        curr_qty = Number(item.qty)
                    }
                });
                let item_total = curr_qty * prod.actual_price;
                let single_item = {
                    product_id: prod._id,
                    qty: curr_qty,
                    total_amt: item_total
                }
                cart.push(single_item);
                sub_total +=  item_total;
            })

            order_data.cart = cart;
            order_data.sub_total = sub_total;
            let discount_amt = 0;
            if(order_data.discount) {
                if(order_data.discount.discount_type === 'flat') {
                    discount_amt = Number(order_data.discount.amount);
                } else {
                    discount_amt = sub_total * Number(order_data.discount.amount) / 100;
                }
            }
            // 1.5 => 2 => 2 => 1
            // 1.5 => Math.round(1.5) => 2, Math.round(1.1) => 1
            // Math.floor(1.9) => 1
            // Math.ceil(1.1) => 2
            order_data.total_amount = Math.ceil(sub_total - discount_amt + Number(order_data.service_charge) + Number(order_data.delivery_charge) + Number(order_data.vat));
        
            let order = new OrderModel(order_data);
            await order.save()
            if(order) {
                // order notification send 
                // Online payment ===> trigger Payment gateway SDK ===> su ===> our url, eu ===> url 
                // success Response => json body ,order id, transaction code
                res.json({
                    result: order,
                    status: true,
                    msg: "Your order has been placed successfully."
                })
            } else {

                next({status: 400, msg: order})
            }
        } catch(except) {
            console.log("Here: ", except)
            next({status: 400, msg: except})
        }
    }
}

module.exports = OrderController;