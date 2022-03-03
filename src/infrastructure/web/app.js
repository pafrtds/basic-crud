require("dotenv").config()

const express = require('express')
const cors = require('cors');
const defaultMiddleware = require('./middlewares/default_middleware')


const PORT = process.env.NODE_DOCKER_PORT || 8080;

const app = express()

app.use(express.json())
app.use(cors())

app.post('/item', defaultMiddleware(require('../../domain/use_case/item/create_item_use_case')))
app.delete('/item/:id', defaultMiddleware(require('../../domain/use_case/item/delete_item_use_case')))
app.put('/item/:id', defaultMiddleware(require('../../domain/use_case/item/update_item_use_case')))
app.get('/item', defaultMiddleware(require('../../domain/use_case/item/find_item_use_case')))


app.listen(PORT,()=>{
    console.log(`Run in port ${PORT}`)
})