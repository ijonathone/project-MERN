const User = require("../models/User");
const {createOrder} = require("../services/orderService")

module.exports = {
  // Obtener todos los usuarios
  getUsers: async () => {
    const users = await User.find();
    if(!users){
      return "No hay usuarios existentes"
    }
    return users;
  },
// obtener un usuario por su ID 
  getUserById: async (id) =>{
    const user = await User.findById(id).populate("orders");
    if(!users){
      return "Usuario no encontrado"
    }
    return user
  },
// Obtener un usuario por su nombre 
  findUserByName: async (name) => {
    const user = await User.findOne({name});
    if(!users){
      return "Usuario no encontrado"
    }
    return user;

  },
//Crear un usuario
  createUser: async (user) => {
    const newUser = await User.create(user);
    return newUser;
  },
//Añadir orden a usuario ID 
  addOrder: async (data)=> {
    const {
      userId,
      dateOfRequest,
      dateOfDelivery,
      customer,
      description,
    } = data;
    const user = await User.findById(userId);
    const order = await createOrder({
      dateOfRequest,
      dateOfDelivery,
      customer,
      description,
    });
    if(!user || !order){
      return "Usuario u orden no encontrados"
    }
    
    user.orders.push(order);
    await user.save();
    return user;
   
  },
};
