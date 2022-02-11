module.exports.getChat = function(application, req, res){
    var formdata = req.body

    req.assert('apelido', 'Apelido é obrigatório').notEmpty()
    req.assert('apelido', 'Apelido deve ter entre 3 e 15 caracteres').len(3, 15)

    var erros = req.validationErrors()

    if(erros){
        res.render('index', {validacao: erros})
        return
    }

    application.get('io').emit('msgChat', {apelido: formdata.apelido, msg: " acabou de entrar no chat!"})

    res.render('chat', {user: formdata})
}