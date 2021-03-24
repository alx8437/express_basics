import express from 'express'

const PORT = 5000;

const app = express();

app.use(express.json())

app.listen(PORT, () => console.log("server started on port " + PORT))

app.get('/', (req, res) => {
    console.log(req.query)
    res.status(200).json('Server is working now')
})
