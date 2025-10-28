const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const lists = document.getElementById("list");

addBtn.addEventListener("click", function () {
  const inputs = input.value.trim();
  if (inputs === "") {
    alert("Enter a task to add!");
    return;
  }

  // Create <li> element
  const ls = document.createElement("li");
  ls.className = "listes-add";

  // ✅ Create a span for the task text (so buttons stay safe)
  const taskText = document.createElement("span");
  taskText.textContent = inputs;

  // ✅ Create a "tick" button
  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = "✅";
  doneBtn.className = "done-button";

  // ❌ Create a "delete" button
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "❌";
  delBtn.className = "delete-button";

  // 🎯 When done button clicked → mark as completed
  doneBtn.addEventListener("click", function () {
    taskText.classList.toggle("completed");
  });

  // 🗑️ When delete button clicked → remove only this task
  delBtn.addEventListener("click", function () {
    ls.remove();
  });

  // Add everything properly
  ls.appendChild(taskText);
  ls.appendChild(doneBtn);
  ls.appendChild(delBtn);
  lists.appendChild(ls);

  // Clear input field
  input.value = "";
});
