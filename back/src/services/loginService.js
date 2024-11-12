const {findOne} = require("../models/Order")
const User = require("../models/User")

module.exports={
    userLogin: async (email, password) => {
        const user = await User.findOne({email});
        if (user.email === email && user.password === password){
            user.isLogged = true;
            await user.save();
            const userNoPassword = user.toObject();
            delete userNoPassword.password
            
            return userNoPassword;
        } else {
            return "Usuario o contraseña invalidos"
        }
    },

    userLogout: async (userId) => {
        const user = await User.findById(userId);
        if(!user){
            return "ID no valido"
        }
        user.isLogged = false;
        await user.save();
        return "Sesion cerrada exitosamente"
        
    }
}