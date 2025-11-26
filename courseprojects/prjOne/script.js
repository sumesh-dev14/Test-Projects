document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById("todo-input");
  let addBtn = document.getElementById("add-task-btn");
  let listItems = document.getElementById("todo-list");

  let task = JSON.parse(localStorage.getItem("task")) || [];
  // the above line is used if the task are stored in local storage
  // it will be added in the array or if we dont find any task in localstorage
  // it will be an empty array

  task.forEach((task) => readTask(task));

  addBtn.addEventListener("click", () => {
    let taskText = input.value.trim();
    if (taskText === "") return alert("Enter a task");

    const newTask = {
      id: Date.now(),
      text: taskText,
      isCompleted: false,
    };
    task.push(newTask);
    saveTask();
    readTask(newTask);
    input.value = "";
    console.log(task);
  });

  // reading from local storage
  function readTask(item) {
    const li = document.createElement("li");
    li.className =
      "bg-[#333333] p-2.5 mb-2.5 rounded-md flex justify-between items-center";
    li.setAttribute("data-id", item.id);

    if (item.isCompleted) li.classList.add("completed");

    li.innerHTML = `
      <span>${item.text}</span>
      <button class="bg-[#d32f2f] text-white p-1.5 rounded-md hover:bg-[#b71c1c] btnCls">delete</button>
    `;

    // Toggle completed state
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      item.isCompleted = !item.isCompleted;
      li.classList.toggle("completed");
      saveTask();
    });

    // Delete task
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();

      // FIXED: Filter using item.id
      task = task.filter((t) => t.id !== item.id);

      li.remove();
      saveTask();
    });

    listItems.appendChild(li);
  }

  // used to add things in local storag
  function saveTask() {
    localStorage.setItem("task", JSON.stringify(task));
  }
});
