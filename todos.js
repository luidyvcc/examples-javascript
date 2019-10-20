var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var tarefas = JSON.parse(localStorage.getItem("list_to_dos")) || [
    "Fazer cafe",
    "Estudar",
    "Almocar",
];

function renderToDos() {
    listElement.innerHTML = '';

    for (tarefa of tarefas) 
    {
        var tarefaElement = document.createElement("li");
        var tarefaText = document.createTextNode(tarefa);

        var linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        var pos = tarefas.indexOf(tarefa);
        linkElement.setAttribute("onClick", "deleteToDo("+pos+")");

        var linkText = document.createTextNode("Remover");

        linkElement.appendChild(linkText);
        
        tarefaElement.appendChild(tarefaText);
        tarefaElement.appendChild(linkElement);

        listElement.appendChild(tarefaElement);
    }
}

renderToDos();

function addToDo() {
    var toDoText = inputElement.value;
    tarefas.push(toDoText);    
    inputElement.value = "";

    renderToDos();
    saveToStorage()
}

buttonElement.addEventListener("click", addToDo);

function deleteToDo(pos) {
    tarefas.splice(pos, 1);

    renderToDos();
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem("list_to_dos", JSON.stringify(tarefas));
}