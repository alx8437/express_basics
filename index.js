import express from 'express'
import mongoose from 'mongoose';
import router from './router.js'

const PORT = 5000;
const DB_URL="mongodb+srv://admin:admin@cluster0.x6tmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express();


//for read post request need use express.use
app.use(express.json())

//registered router
app.use('/api', router)


async function startApp() {
    try {
       await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
       app.listen(PORT, () => console.log("server started on port " + PORT))
    } catch (error) {
        console.log(error)
    }
}


startApp()
