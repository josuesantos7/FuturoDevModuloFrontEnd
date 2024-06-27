
document.addEventListener('DOMContentLoaded', () => {
    const produtos = [
        {name:"Maça", price: "R$2,50"},
        {name:"Pera", price: "R$3,55"},
        {name:"Manga", price: "R$1,50"},
        {name:"Maça", price: "R$2,50"}
    ]

    const list = document.getElementById("productList")

    produtos.forEach(produto => {
        const li = document.createElement('li')
        li.innerHTML = `<li>Produto: ${produto.name} Valor: ${produto.price}</li>`

        list.appendChild(li)
    })
})

