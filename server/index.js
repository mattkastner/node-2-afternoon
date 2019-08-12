const express = require('express')
const messageCtrl = require('./controllers/messages_controller/messages_controller')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'));

const port = 3001

const baseURL = '/api/messages'

app.post(baseURL, messageCtrl.createMessage)
app.get(baseURL, messageCtrl.readMessages)
app.put(`${baseURL}/:id`, messageCtrl.updateMessage)
app.delete(`${baseURL}/:id`, messageCtrl.deleteMessage) 

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
