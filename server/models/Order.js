import mongoose from "mongoose";

const Order = new mongoose.Schema({
    products: {},
    country: {type: String},
    city: {type: String, required: true},
    adress: {type: String, required: true},
    postCode: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    phoneNumber: {type: String, required: true}
})
export default mongoose.model('Order', Order)