const dados = require('./contatos.js')

//Função para exibir todos os usuários dos contatos
function getListaDadosUsuarios() {

    const dadosUsuarios = dados.contatos['whats-users']
return dadosUsuarios
}

//Função para listar todos os dados que podem ser alterados do profile
function getListaProfile(numero){

let exibirDados = false

    dados.contatos['whats-users'].forEach(function(item){
        if(Number(numero) == Number(item.number)){
            if(!exibirDados){
                exibirDados = []
            }
            exibirDados.push({
            "Nickname": item.nickname,
            "Foto": item['profile-image'],
            "Created": item['created-since'],
            "Number": item.number,
            "Background": item.background,
            })
        }
    })
    return exibirDados 
}
console.log(getListaProfile(11966578996))


