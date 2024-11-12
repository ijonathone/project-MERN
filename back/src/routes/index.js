//Aqui vamos a definir la rutas atraves de las cuales nos podemos comunicar 

//Tengo definida la solicitud a GET /users => controlador 

const {Router} = require("express");
const userRouter = require("./userRouter");

const orderRouter = require ("./orderRouter");
const loginRouter = require("./loginRouter");

const router = Router();

router.use("/users", userRouter)

router.use("/orders", orderRouter)

router.use("/login", loginRouter)

router.use("/log", loginRouter)


module.exports = router;