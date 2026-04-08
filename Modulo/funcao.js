const dados = require('./contatos.js')

//Função para exibir todos os usuários dos contatos
function getListaDadosUsuarios() {

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
    
    let exibirDados = false
    
    dados.contatos['whats-users'].forEach(function(item){
        if(Number(numero) == Number(item.number)){

            let exibirDados = []

            exibirDados.push(item.contacts.map(function(itemContato){
                
                    const contatos = {
                        "Nome": itemContato.name,
                        "Foto": itemContato.image,
                        "Descrição": itemContato.description
                    }
                    return contatos
                    
                }))
                
            }
        })
        return exibirDados
    }
    

console.log(getListaDadosContato(11987876567))
