const buscarLaCorrea = () => {

    const busqueda = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("La encontre")
        }, 3000)
    })// restraso de 3 seg

    return busqueda
}

const pegarleAlNiño = async () => {
    const correa = await buscarLaCorrea()
    console.log(correa)
}

pegarleAlNiño()