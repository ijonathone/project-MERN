//Aqui vamos a definir la rutas atraves de las cuales nos podemos comunicar 

//Tengo definida la solicitud a GET /users => controlador 

const {Router} = require("express");
const userRouter = require("./userRouter");

const orderRouter = require ("./orderRouter")

const router = Router();

router.use("/users", userRouter)

router.use("/order", orderRouter)


module.exports = router;