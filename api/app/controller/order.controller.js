class OrderController{
    createOrder = (req, res, next) => {
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
            payload.cart((item, ind) => {
                // TODO: Product Detail, price * qty  total_amt => SUM() => sub_total
                // let product_detail = 
            })
            res.json({
                result: order_data
            })

        } catch(except) {
            next({status: 400, msg: except})
        }
    }
}

module.exports = OrderController;