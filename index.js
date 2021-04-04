import express from 'express'
import mongoose from 'mongoose';

const PORT = 5000;
const DB_URL="mongodb+srv://admin:admin@cluster0.x6tmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express();


//for read posr request need use express.use
app.use(express.json())

app.get('/', (req, res) => {
    console.log(req.query)
    res.status(200).json('Server is working now')
})

app.post('/', (req, res) => {
    res.status(200).json(req.body)
})

async function startApp() {
    try {
       await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
       app.listen(PORT, () => console.log("server started on port " + PORT))
    } catch (error) {
        console.log(error)
    }
}

startApp()
