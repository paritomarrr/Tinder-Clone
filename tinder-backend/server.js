import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards'
import Cors from 'cors'

// app config
const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:xsfvbQSzvR9pAiUK@cluster0.eta56.mongodb.net/tinderdb?retryWrites=true&w=majority'

// middlewares
app.use(express.json())
app.use(Cors())


//database config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// api endpoints
app.get('/', (req,res) => {

    res.send('HEYYY!')
})

app.post('/tinder/card', (req,res) => {
    const dbcard = req.body

    Cards.create(dbCard, (err,data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})


app.get('/tinder/card', (req,res) => {
    Cards.find((err,data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

// listener
app.listen(port, console.log(`Port is running at ${port}`))