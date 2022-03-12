const EventEmitter = require('events')
const customEmitter = new EventEmitter()
customEmitter.on('response', () => {
    console.log('data received')
})
customEmitter.emit('response')
customEmitter.on('login', () => {
    console.log('login')
})
customEmitter.emit('login')
//pass argument
customEmitter.on('logout', (user,id) => {
    console.log(`user: ${user} with id:${id} log out`)
})
customEmitter.emit('logout','Hussein',55)


