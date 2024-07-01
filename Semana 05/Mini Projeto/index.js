

function AddInterest() {
    let input = document.getElementById('inputTask');
    let interest = input.value;
    if (!interest) return;


    let storageInteresses = getLocalStorage();
    storageInteresses.push(interest);
    localStorage.setItem('meus-interesses', JSON.stringify(storageInteresses));
    showInterests();
    input.value = '';
}

function checkEnter(event) {
    if (event.key === "Enter") {
        AddInterest();
    }
}

function getLocalStorage() {
    let myLocalStorage = localStorage.getItem('meus-interesses')
    return myLocalStorage ? JSON.parse(myLocalStorage) : [];
}

function showInterests (){
            let interests = getLocalStorage();
            let lista = document.getElementById('interesseList');
            console.log(lista)
            lista.innerHTML = '';
            interests.forEach(function(interest, index) {
                let item = document.createElement('li');
                item.textContent = interest;


                // buttons
                let btnDelete = document.createElement('button');
                btnDelete.textContent = 'Excluir';
                btnDelete.className = 'btnE';
                btnDelete.onclick = function() {
                    deleteInterest(index);
                };
                item.appendChild(btnDelete);

                let btnAlter = document.createElement('button');
                btnAlter.textContent = 'Alterar';
                btnAlter.className = 'btnA';
                btnAlter.onclick = function() {
                    alterInterest(index, interest);
                };
                item.appendChild(btnAlter);

                lista.appendChild(item);
            });
}

function deleteInterest(index) {
    let interests = getLocalStorage()
    interests.splice(index, 1);
    localStorage.setItem('meus-interesses', JSON.stringify(interests));
    showInterests();
    console.log("Excluir")
}

function alterInterest(index, currentDescription) {
    let newDescription = prompt("Alterar interesse", currentDescription)
    if (newDescription) {
        let interest = getLocalStorage();
        interest[index] = newDescription
        localStorage.setItem('meus-interesses', JSON.stringify(interest));
        showInterests()
    }
}

function clearList() {
    console.log("Lista Limpa")
    getLocalStorage()
    localStorage.removeItem(["meus-interesses"])
    let listaUl = document.getElementById('interesseList');
            listaUl.innerHTML = '';
}

async function GetNews() {
    try {
        const url = "https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release"
        const response = await fetch(url)
        const data = await response.json()

        const firstNews = data.items[0]
        const title = firstNews.titulo
    
        let news = document.querySelector(".title-news-today");
            news.innerHTML = title

    } catch (error) {
        console.log('Erro ao obter os dados da API IBGE', error)
    }
}

GetNews()

setInterval(showInterests, 1000)

document.addEventListener('DOMContentLoaded', showInterests);