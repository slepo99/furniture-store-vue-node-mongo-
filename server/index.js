import express from "express"; 
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";
import cors from 'cors'
const PORT = 5000
const DB_URL = 'mongodb+srv://user:user@cluster0.eltf4dq.mongodb.net/?retryWrites=true&w=majority'

const app = express()
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)
app.use(cors({origin: 'http://localhost:8080'}));


async function startApp() {
    try {
      await  mongoose.connect(DB_URL)
      app.listen(PORT, () => {
        console.log('server works on ' + PORT + ' port');
    })
    } catch(e) {
        console.log(e);
    }
}

startApp()