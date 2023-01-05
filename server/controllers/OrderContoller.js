import Order from "../models/Order.js";
class OrderController {
  async create(req, res) {
    try {
      const {
        productType,
        productName,
        productImage,
        productCount,
        productPrice,
        country,
        city,
        adress,
        postCode,
        name,
        surname,
        phoneNumber,
      } = req.body;
      const order = await Order.create({
        productType,
        productName,
        productImage,
        productCount,
        productPrice,
        country,
        city,
        adress,
        postCode,
        name,
        surname,
        phoneNumber,
      });
      res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const order = await Order.find();
      return res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        throw new Error("не указан ID");
      }
      const order = await Order.findById(id);
      return res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async update(req, res) {
    try {
      const order = req.body;
      if (!order._id) {
        throw new Error("не указан ID");
      }
      const updateOrder = await Order.findByIdAndUpdate(order._id, order, {
        new: true,
      });
      return res.json(updateOrder);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        throw new Error("не указан ID");
      }
      const order = await Order.findByIdAndDelete(id);
      return res.json(order);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new OrderController();
