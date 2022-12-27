import { Router } from "express";
import authController from "./AuthController.js";
import { check } from "express-validator";
import authMiddleware from "./middleware/authMiddleware.js";
import roleMiddleware from "./middleware/roleMiddleware.js";
const router = new Router()

router.post('/registration' ,[
    check('username', 'User name can not be empty').notEmpty(),
    check('password', 'Password must be longer then 4 symbols and less then 10').isLength({min: 4, max: 10})
], 
authController.registration)
router.post('/login', authController.login)
router.get('/users',roleMiddleware(["ADMIN", "USER"]), authController.getUsers)
export default router
//roleMiddleware(["ADMIN", "USER"])