const { Router } = require("express");
const orderController = require("../controllers/orderController");
const validateOrder = require("../middlewares/validateOrder");

const orderRouter = Router();

orderRouter.get("/", orderController.getAllOrders);

orderRouter.post("/", orderController.createOrder);

orderRouter.put("/updateOrder", orderController.updateOrder);

orderRouter.put("/acomplishedOrder/:orderId", validateOrder, orderController.orderAcomplished);

orderRouter.delete("/deleteOrder/:orderId", orderController.deleteOrder)

module.exports = orderRouter;
