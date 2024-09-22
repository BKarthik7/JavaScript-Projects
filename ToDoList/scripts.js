const toDoList = document.getElementById("toDoList");
const newToDoInput = document.getElementById("newToDoInput");
const addToDoButton = document.getElementById("addToDoButton");

addToDoButton.addEventListener("click", ()=>{

    const newToDoText = newToDoInput.value;

    if(newToDoText !== ""){
        const newToDoItem = document.createElement("li");
        newToDoItem.innerText = newToDoText;
        const deleteToDoButton = document.createElement("button");
        deleteToDoButton.innerText = "X";

        deleteToDoButton.classList.add("delete-todo-button");
        deleteToDoButton.addEventListener("click", function(){
            newToDoItem.remove();
        });

        newToDoItem.appendChild(deleteToDoButton);
        toDoList.appendChild(newToDoItem);
        newToDoInput.value = "";
    }
});