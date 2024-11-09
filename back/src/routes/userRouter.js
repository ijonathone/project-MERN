const { Router} = require("express");
const userController = require("../controllers/userController");
const validateUser = require("../middlewares/validateUser");

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);

userRouter.get("/byName", userController.getUserByName);

userRouter.get("/:id", userController.getUserById);

userRouter.post("/", validateUser, userController.createUser);

userRouter.put("/addVehicle", userController.addVehicle);

module.exports = userRouter;