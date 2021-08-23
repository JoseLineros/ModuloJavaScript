const perfil = () => {
    let url = `https://dog.ceo/api/breeds/image/random`

    fetch(url)
        .then(res => res.json())
        .then(data => ponerUsuario(data))
        .catch(err => console.log(err))
}


const ponerUsuario = (data) => {
    document.getElementById("dogProfile").innerHTML = `<img class="rounded-circle" src="${data.message}" width=60>`
}

const content = () => {
    let url = `https://randomuser.me/api/`

    fetch(url)
        .then(res => res.json())
        .then(data => ponerContenido(data))
        .catch(err => console.log(err))
}

//data[0]
//data.llave
//data[llave]

const ponerContenido = (data) => {
    console.log(data)
    document.getElementById("humanProfile").innerHTML += `<img class="rounded-circle m-3" src="${data.results[0].picture.large}">`
}

const elMuro = () => {
    for(let i = 0; i < 10; i++){
        content()
    }
}

perfil()
elMuro()
