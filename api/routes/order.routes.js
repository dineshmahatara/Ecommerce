const router = require("express").Router();
const auth = require("../app/middleware/auth.middleware");
const {isCustomer} = require("../app/middleware/rbac.middleware");
const OrderController = require("../app/controller/order.controller");

const order_ctrl = new OrderController;

router.post("/detail", order_ctrl.getCartDetail);
router.post("/", auth, isCustomer, order_ctrl.createOrder);

module.exports = router;