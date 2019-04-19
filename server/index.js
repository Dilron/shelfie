require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const shelfieCtrl = require('./shelfieCtrl')

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => {
        console.log('listening on 4000')
    })
})

app.get('/api/start', (req, res) => {res.send('server connected')})

app.get('/api/inventory', shelfieCtrl.getAllInv)

app.post('/api/inventory', shelfieCtrl.addToInv)

app.delete('/api/inventory/:id', shelfieCtrl.deleteItem)
