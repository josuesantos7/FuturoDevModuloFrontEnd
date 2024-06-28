

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
                btnDelete.className = 'btn';
                btnDelete.onclick = function() {
                    deleteInterest(index);
                };
                item.appendChild(btnDelete);

                let btnAlter = document.createElement('button');
                btnAlter.textContent = 'Alterar';
                btnAlter.className = 'btn';
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

setInterval(showInterests, 1000)

document.addEventListener('DOMContentLoaded', showInterests);