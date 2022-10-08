function bancoDeDados() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            return resolve({
                series: require("./data/series.json"),
                filmes: require("./data/filmes.json")
            })
                
        }, 1500);
    })
}

//começa o nosso servidor

const express = require("express")
const app = express()

//parser do body em json
app.use(express.json())

//PESQUISA TODOS OS FILMES
app.get("/filmes", async (request, response) => {
    try {
        let dbFilmes = await bancoDeDados()
        console.log(dbFilmes)
    
        if(!dbFilmes) {
            return response.status(404).send({
                "message": "Bad Request"
            })
        }
        
        response.status(200).send(dbFilmes.filmes)
    } catch(e) {
        console.error(e)
    }
})

//PESQUISA POR ID
app.get("/filmes/pesquisar/:id", async (request, response)=>{
    try {
        // acessando o id que chega na requisição porque preciso dele para pesquisar o filme
        let idRequest = request.params.id
        let dbFilmes = await bancoDeDados()
    
        let filmeEncontrado = dbFilmes.filmes.find(filme => filme.id == idRequest)

        if(filmeEncontrado == undefined) throw new Error("id não encontrado")

        response.status(200).send(filmeEncontrado)
        
    } catch (error) {
        response.status(404).json({message: error.message})
    }
})

//PESQUISA POR TÍTULO
app.get("/filmes/pesquisar", async (request, response)=>{
    try {
        let dbFilmes = await bancoDeDados()
        let tituloRequest = request.query.titulo.toLowerCase()
        console.log(tituloRequest)

        let encontrarPorTitulo = dbFilmes.filmes.find(filme => filme.Title.toLowerCase().includes(tituloRequest))

        console.log(encontrarPorTitulo)

        if(!encontrarPorTitulo) throw new Error("filme não encontrado")

        response.status(200).send(encontrarPorTitulo)
    } catch (error) {
        response.status(404).json({message: error.message})
    }
})

//PESQUISA GENÉRICA
app.get("/filmes/buscar", async (request, response) => {
    try {
        let dbFilmes = await bancoDeDados()
        let filmesJson = dbFilmes.filmes
        let parametros = request.query

        //console.log(parametros)

        const chaves = Object.keys(parametros);
        //console.log(chaves)

        const filtrado = filmesJson.filter((filme) => { return chaves.some(key => RegExp(parametros[key], 'i').test(filme[key].toString()));});
    
        //console.log(filtrado);

        if(filtrado.length == 0) throw new Error("filme não encontrado")
        
        response.status(200).send(filtrado)
        
    } catch (error) {
        response.status(404).json({message: error.message})
    }
})

//CADASTRA FILME
app.post("/filmes/cadastrar", async (request, response)=>{
    let bodyRequest = request.body
    let dbFilmes = await bancoDeDados()
    let filmes = dbFilmes.filmes

    console.log(filmes.length)

    let novoFilme = {
        id:(filmes.length)+1,
        title: bodyRequest.title,
        description: bodyRequest.description,
    }

    filmes.push(novoFilme)

    response.status(201).send({
        mensagem: "filme cadastrado com sucesso",
        novoFilme
    })

})

app.get("/series", async (request, response)=>{
    let dbSeries = await bancoDeDados()

    response.status(200).send(dbSeries.series)
})

app.listen(1313, ()=>{
    console.log("servidor rodando na porta " + 1313)
})