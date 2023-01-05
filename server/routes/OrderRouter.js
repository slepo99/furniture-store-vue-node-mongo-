import { Router } from "express";
import OrderContoller from "../controllers/OrderContoller.js";

const router = new Router()

router.post('/product', OrderContoller.create)
router.get('/product', OrderContoller.getAll)
router.get('/product/:id', OrderContoller.getOne)
router.put('/product', OrderContoller.update)
router.delete('/product/:id', OrderContoller.delete)
export default router
