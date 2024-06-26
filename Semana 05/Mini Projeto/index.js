

function AddInterest() {
    let input = document.getElementById('inputTask');
    let task = input.value;
    if (!task) return;


    let storageInteresses = getLocalStorage();
    storageInteresses.push(task);
    localStorage.setItem('meus-interesses', JSON.stringify(storageInteresses));
    showTasks();
    input.value = '';
}

function getLocalStorage() {
    let myLocalStorage = localStorage.getItem('meus-interesses')
    return myLocalStorage ? JSON.parse(myLocalStorage) : [];
}

function showTasks (){
            let tasks = getLocalStorage();
            let lista = document.getElementById('interesseList');
            console.log(lista)
            lista.innerHTML = '';
            tasks.forEach(function(task, index) {
                let item = document.createElement('li');
                item.textContent = task;


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
                    alterInterest(index, task);
                };
                item.appendChild(btnAlter);

                lista.appendChild(item);
            });
}

function deleteInterest(index) {
    let tasks = getLocalStorage()
    tasks.splice(index, 1);
    localStorage.setItem('meus-interesses', JSON.stringify(tasks));
    showTasks();
    console.log("Excluir")
}

function alterInterest(index, currentDescription) {
    let newDescription = prompt("Alterar interesse", currentDescription)
    if (newDescription) {
        let task = getLocalStorage();
        task[index] = newDescription
        localStorage.setItem('meus-interesses', JSON.stringify(task));
        showTasks()
    }
}

document.addEventListener('DOMContentLoaded', showTasks);