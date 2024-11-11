const { Router} = require("express");
const userController = require("../controllers/userController");
const validateUser = require("../middlewares/validateUser");
const validateId = require ("../middlewares/validateid")

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);

userRouter.get("/byName", userController.getUserByName);

userRouter.get("/:id", validateId, userController.getUserById);

userRouter.post("/", validateUser, userController.createUser);

userRouter.put("/addOrder", userController.addOrder);

module.exports = userRouter;