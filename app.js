const app = require('./config/server')

const server = app.listen(80, function(req, res){
    console.log('Successfully started server! Listening on http://localhost/')
})

const io = require('socket.io')(server)

app.set('io', io)

io.on('connection', function(socket){
    console.log('Usuário conectado')

    socket.on('disconnect', function(){
        console.log('O usuário disconectou!')
    })

    socket.on('enviarMsg', function(data){
        socket.emit('msgChat', {apelido: data.apelido, msg: data.msg})
        socket.broadcast.emit('msgChat', {apelido: data.apelido, msg: data.msg})
        if(data.useron == 0){
            socket.emit('novoParticipante', {apelido: data.apelido})
            socket.broadcast.emit('novoParticipante', {apelido: data.apelido})
            
        }
    })
})