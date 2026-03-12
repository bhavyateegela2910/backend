import express from "express";
import { placeOrder, updateOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place", placeOrder);
orderRouter.put("/update/:id", updateOrder);

export default orderRouter;