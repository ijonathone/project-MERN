const Order = require("../models/Order");

module.exports = {
  //Obtener todas las ordenes
  getAllOrders: async () => {
    const orders = await Order.find();
    if (!orders) {
      return "No hay ordenes existentes";
    }
    return orders;
  },

  // crear una orden

  createOrder: async (order) => {
    const newOrder = await Order.create(order);
    return newOrder;
  },
  //Modificar una orden
  updateOrder: async (data) => {
    const { orderId, newDateOfDelivery, newDescription } = data;
    const order = await Order.findById(orderId);
    if (!order) {
      return "Orden inexistente";
    }
    order.dateOfDelivery = newDateOfDelivery;
    order.description = newDescription;
    await order.save();
    return order;
  },

  //Cambio de status de orden

  orderAcomplished: async (orderId) => {
    const order = await Order.findById(orderId);
    if (!order) {
      return "Orden inexistente";
    }
    order.status = false; //Orden Completada
    await order.save();
    return order;
  },

  // Eliminado logico de la orden

  deleteOrder: async (id) => {
    const order = await Order.findById(id);
    if (!order) {
      return "Orden inexistente";
    }
    order.isDeleted = true;
    await order.save();
    return `Orden ${id} elinada exitosamente`;
  },
};
