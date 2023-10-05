import mongoose from "mongoose";
const Post = new mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    price: {type: String, required: true},
    description: {type: String},
    picture: {type: String},
})
export default mongoose.model('Post', Post)
