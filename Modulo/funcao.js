const dados = require('./contatos.js')

//Função para exibir todos os usuários dos contatos
function getListaDadosUsuarios(){

    const dadosUsuarios = dados.contatos['whats-users']
return dadosUsuarios
}

//Função para listar todos os dados que podem ser alterados do profile
function getListaProfile(numero){

    let status = false
    let exibirDados = []

    dados.contatos['whats-users'].forEach(function(item){
        if(Number(numero) == Number(item.number)){
            
            status = true
    
            exibirDados.push({
            "Nome": item.account,
            "Nickname": item.nickname,
            "Foto": item['profile-image'],
            "Created": item['created-since'],
            "Number": item.number,
            "Background": item.background,
            })
        }
    })

    if(status)
        return exibirDados
    else
        return false
}

function getListaDadosContato(numero){
    
    let status = false
    let exibirDados = []
    
    dados.contatos['whats-users'].forEach(function(item){
        if(Number(numero) == Number(item.number)){

            status = true

            exibirDados.push(item.contacts.map(function(itemContato){
                
                const contatos = {
                    'Nome': itemContato.name,
                    'Foto': itemContato.image,
                    'Descricao': itemContato.description
                }
                return contatos
                    
            }))
                
        }
            
    })
    if(status)
        return exibirDados
    else
        return status
}

function getListaMensagens(numero){

    let status = false
    let exibirDados = []

    dados.contatos['whats-users'].forEach(function(item){
        if(Number(numero) == Number(item.number)){

            status = true

            item.contacts.map(function(itemContato){
                exibirDados.push(itemContato.messages.map(function(itemConversa){

                    const conversa = {
                        "Enviado_por": itemConversa.sender,
                        "Mensagem": itemConversa.content,
                        "Hora": itemConversa.time
                    }

                    console.log(conversa)
                    return conversa

                }))
                
            })
            
        }
        
    })
    if(status)
        return exibirDados
    else
        return status 
}

function getListaMensagensExpecifica(numero, nome){

    let status = false
    let exibirDados = []

    dados.contatos['whats-users'].forEach(function(item){
        if(Number(numero) == Number(item.number)){

            status = true

            exibirDados.push(
                item.contacts
                    .filter(itemContato => nome == itemContato.name)
                .map(itemContato => ({
                    "Numero": item.number,
                    "Contato": itemContato.name,
                    "Conversa": itemContato.messages
                    
                }))
            )
        }
    })
    if(status)
        return exibirDados
    else
        return status
}

function getPalavraChave(numero, nome, palavra){
    
    let status = false
    let exibirDados = []

    dados.contatos['whats-users'].forEach(function(item){
        if(Number(numero) == Number(item.number)){

            item.contacts
                .filter(contato => nome == contato.name)
                .forEach(contato => {

                    const mensagensFiltradas = contato.messages.filter(msg =>
                        msg.content.toLowerCase().includes(palavra.toLowerCase())
                    )

                    if(mensagensFiltradas.length > 0){
                        status = true
                        exibirDados.push({
                            "Numero": item.number,
                            "Contato": contato.name,
                            "Conversa": mensagensFiltradas
                        })
                    }
                })
        }
    })
    if(status)
        return exibirDados
    else
        return status
}
   
console.log(getPalavraChave(11987876567,"Jane Smith", "hi"))






    module.exports = {
        getListaDadosUsuarios,
        getListaProfile,
        getListaDadosContato,
        getListaMensagens,
        getListaMensagensExpecifica,
    }