function ecommerce(produtos){
    
    const id = produtos.id
    const imagem = produtos.img
    const categoria = produtos.tag
    const nome = produtos.nameItem
    const descricao = produtos.description
    const valor = produtos.value
    const adicionar = produtos.addCart
    
    const tagLi = document.createElement("li")
    const tagFigure = document.createElement("figure")
    const tagImg = document.createElement("img")
    const divCard = document.createElement("div")
    const pCardCategoria = document.createElement("p")
    const h3Card = document.createElement("h3")
    const pCardDescricao = document.createElement("p")
    const pCardPreco = document.createElement("p")
    const buttonCardCarrinho = document.createElement("button")
    buttonCardCarrinho.id = id

    tagImg.src = `${imagem}`
    tagImg.alt = nome
    pCardCategoria.innerText = categoria
    h3Card.innerText = nome
    pCardDescricao.innerText = descricao
    pCardPreco.innerText = `R$ ${valor}`
    buttonCardCarrinho.innerText = adicionar
    
    tagFigure.classList.add("cardImg")
    tagLi.classList.add("cardProduto")
    
    tagFigure.appendChild(tagImg)
    tagLi.appendChild(tagFigure)
    
    divCard.classList.add("cardInformacoes")
    pCardCategoria.classList.add("cardCategoria")
    h3Card.classList.add("cardNomeProduto")
    pCardDescricao.classList.add("cardDescricao")
    pCardPreco.classList.add("cardPreco")
    buttonCardCarrinho.classList.add("cardCarrinho") 
    
    
    divCard.appendChild(pCardCategoria)
    divCard.appendChild(h3Card)
    divCard.appendChild(pCardDescricao)
    divCard.appendChild(pCardPreco)
    divCard.appendChild(buttonCardCarrinho)
    tagLi.appendChild(divCard)
    
    return tagLi
    
}

const listaProdutos = document.querySelector(".listaProdutos")

function listaItens(arrayProdutos){
    
    for(let i = 0; i < arrayProdutos.length; i++){
        const itens = arrayProdutos[i]
        
        const cardProdutos = ecommerce(itens)
        listaProdutos.appendChild(cardProdutos)
    }
}
listaItens(data)



// FUNÇÃO PARA PEGAR O CLICK

function buttonAdd(evento){
    
    const meuProdutoId = evento.target.id
    const meuProduto = data.find((item)=>{

        return item.id == meuProdutoId
    })
    arrayCarrinho.push(meuProduto)
    listaItem(arrayCarrinho)
}
listaProdutos.addEventListener("click",buttonAdd) 

const arrayCarrinho = []

// FUNÇÃO PARA RENDERIZAR NO CARRINHO

function carrinho(produtos){ 
    
const idC = produtos.index
const imagemC = produtos.img
const nomeC = produtos.nameItem
const valorC = produtos.value
const liCarrinho = document.createElement("li")
const figureCarrinho = document.createElement("figure")
const imgCarrinho = document.createElement("img")
const divCarrinho = document.createElement("div")
const pNomeProduto = document.createElement("p")
const pPrecoProduto = document.createElement("p")
const buttonRemoveCarrinho = document.createElement("button")
buttonRemoveCarrinho.id = idC

imgCarrinho.src = `${imagemC}`
imgCarrinho.alt = nomeC
pNomeProduto.innerText = nomeC
pPrecoProduto.innerText = `R$ ${valorC}`
buttonRemoveCarrinho.innerText = "Remover produto"

figureCarrinho.classList.add("imagemCarrinho")
liCarrinho.classList.add("produtoCarrinho")

figureCarrinho.appendChild(imgCarrinho)
liCarrinho.appendChild(figureCarrinho)

divCarrinho.classList.add("infoCarrinho")
pNomeProduto.classList.add("nomeCarrinho")
pPrecoProduto.classList.add("precoCarrinho")
buttonRemoveCarrinho.classList.add("removerProduto") 

divCarrinho.appendChild(pNomeProduto)
divCarrinho.appendChild(pPrecoProduto)
divCarrinho.appendChild(buttonRemoveCarrinho)
liCarrinho.appendChild(divCarrinho)


return liCarrinho
}

const listaCarrinho = document.querySelector(".containerItem")
function listaItem(arrayProdutos){
    
    listaCarrinho.innerHTML = ""
    
    for(let i = 0; i < arrayProdutos.length; i++){
        const itens = arrayProdutos[i]
        
        const itensCar = carrinho(itens)
        listaCarrinho.appendChild(itensCar)
    }
}
listaItem(arrayCarrinho)

function removerTarefa(event){
    const buttonRemove = event.target
    
    if(buttonRemove.tagName == "BUTTON"){
        
        const index = buttonRemove.id
        arrayCarrinho.splice(index,1)
        listaItem(arrayCarrinho)
        
        console.log(index)
        
        console.log(buttonRemove)
    }
}
listaCarrinho.addEventListener("click", removerTarefa)
