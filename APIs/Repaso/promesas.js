const a_enviar = () => {
    let control = false
    return control
}

const respuesta_promesa = new Promise(function promisx(resolve, reject){

    if(a_enviar()){
        return resolve("resuelta")
    } else {
        return reject("Rechazada")
    }

})

const imprimirPromesa = () => {

    respuesta_promesa
        .then(res => console.log(res))//resolve
        .catch(err => console.log(err))//reject
}

imprimirPromesa()