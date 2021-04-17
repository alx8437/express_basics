import express from 'express'
import mongoose from 'mongoose';
import Post from './Post.js'

const PORT = 5000;
const DB_URL="mongodb+srv://admin:admin@cluster0.x6tmo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const app = express();


//for read post request need use express.use
app.use(express.json())


async function startApp() {
    try {
       await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
       app.listen(PORT, () => console.log("server started on port " + PORT))
    } catch (error) {
        console.log(error)
    }
}

app.get('/', (req, res) => {
    console.log(req.query)
    res.json('Server is working now')
})


app.post('/', async (req, res) => {
    try {
        const {author, title, content, picture} = req.body
        const post =  await Post.create({author, title, content, picture})
        res.json(post)
    } catch (e) {
        res.status(500).json(e)
    }

})

startApp()
