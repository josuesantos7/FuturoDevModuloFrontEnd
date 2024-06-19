/** Implemente seu código abaixo. Boa sorte! */

function createList () {
    const criarItem = document.getElementById("dados_interesse").value;
    console.log(criarItem)

    let ItemList = new Array();

    if (localStorage.hasOwnProperty("ItemList")){
        ItemList = JSON.parse(localStorage.getItem("ItemList"))
    }

    ItemList.push({item: criarItem})

    localStorage.setItem("ItemList", JSON.stringify(ItemList))

    document.getElementById("uniq").insertAdjacentHTML('beforeend', criarItem + '<br><hr>');

    const campo = document.getElementById("dados_interesse").value



}