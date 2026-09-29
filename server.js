const express = require("express")
const cors = require("cors")

const routes = require("./src/routes")

//Configurações do servidor
const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const porta = 3000

 
app.get('/', rotaInicial)

//Porta de entrada do servidor e saída do console
app.listen(porta, () => {
    console.log(`Servidor respondendo em: http://localhost:${porta}`)
})