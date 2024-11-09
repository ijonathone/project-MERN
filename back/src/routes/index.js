//Aqui vamos a definir la rutas atraves de las cuales nos podemos comunicar 

//Tengo definida la solicitud a GET /users => controlador 

const {Router} = require("express");
const userRouter = require("./userRouter");
const postRouter = require("./postRouter");
const vehicleRouter = require("./vehicleRouter");

const router = Router();

router.use("/users", userRouter)
router.use("/posts", postRouter)
router.use("/vehicles", vehicleRouter)


module.exports = router;