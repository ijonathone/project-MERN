// En este modulo van a estar las funciones que establecen la LOGICA DE NEGOCIO de cada una de las 

// Para esa ruta GET /users => 

//Vamos a ir a la base de datos a pedir la informacion de los ususarios
//Y responder al cliente con la informacion obtenida 
const userController = (req, res) => {
    res.status(200).send("Estamos recibiendo una solicitud a usuarios")
    
}
const postController = (req, res) => {
    res.status(200).send("Estamos recibiendo una solicitud a post")
};
    


module.exports = {userController, postController};