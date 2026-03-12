import orderModel from "../models/orderModel.js";

const placeOrder = async (req, res) => {
  const body = req.body;

  const order = await orderModel.create(body);

  res.json({ message: "Order Placed", order });
};

const updateOrder = async (req, res) => {
  const { id } = req.params;

  await orderModel.findByIdAndUpdate(id, {
    status: "ordered"
  });

  res.json({ message: "Order Updated" });
};

export { placeOrder, updateOrder };