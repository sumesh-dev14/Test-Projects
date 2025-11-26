let input = document.getElementById('todo-input');
let addBtn = document.getElementById('add-task-btn')
let listItems = document.getElementById('list-items');

let task = [];

addBtn.addEventListener("click" , () =>{
    let taskText = input.value.trim();
    if(taskText === "" ) return "Enter a task to add ";

    const newTask = {
        id: Date.now(),
        text: taskText,
        isCompleted: false
    }
    task.push(newTask)
    
    input.value = "";
    console.log(task);

})