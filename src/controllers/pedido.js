const pedidos = require("../../dados/pedidos.json")

function subotais(){
    pedidos.forEach(p=>{ 
        p.subotal = p.quantidade * p.preco
    })
}

const criar = (req, res)=>{ const dados = req.body
    dados.id = Numbe(pedidos[pedidos.length - 1].id) + 1 //autoIncrement
    pedidos.push(dados)
 }
const listar = (req, res)=>{ 
    subotais()
res.json(pedidos)
}
const alterar = (req, res)=>{ }
const excluir = (req, res)=>{ }

module.exports = {
    criar, listar, alterar, excluir
}