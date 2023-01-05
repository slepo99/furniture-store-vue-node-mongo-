import mongoose from "mongoose";

const Order = new mongoose.Schema({
    productType: {type: String},
    productName: {type: String},
    productImage: {type: String},
    productCount: {type: String},
    productPrice: {type: String},
    country: {type: String},
    city: {type: String},
    adress: {type: String},
    postCode: {type: String},
    name: {type: String},
    surname: {type: String},
    phoneNumber: {type: String}
})
export default mongoose.model('Order', Order)