let messages = []
let id = 0


//Create
const createMessage = (req, res) => {
    const {text, time} = req.body
    messages.push({text, time, id})
    id++
    res.status(200).send(messages)
}

//Read
const readMessages = (req, res) => {
    res.status(200).send(messages)
}

//Update
const updateMessage = (req, res) => {
    const {text} = req.body
    const updateID = req.params.id
    let messageToUpdate = messages.filter(message => message.id == updateID)[0]
    console.log(messageToUpdate.id)
    messages[messageToUpdate.id] = {
        text: text,
        time: messageToUpdate.time,
        id: messageToUpdate.id
    }
    res.status(200).send(messages)
}

//Delete
const deleteMessage = (req, res) => {
    const {id} = req.param
    messages.splice(id, 1)
    res.status(200).send(messages)
}

module.exports = {
    createMessage,
    readMessages,
    updateMessage,
    deleteMessage
}