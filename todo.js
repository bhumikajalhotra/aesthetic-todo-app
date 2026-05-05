function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskDate = document.getElementById("taskDate");

  let task = taskInput.value;
  let date = taskDate.value;

  if (task === "") return;

  let li = document.createElement("li");


  let div = document.createElement("div");
  div.className = "task-info";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let span = document.createElement("span");
  span.textContent = task + (date ? " (" + date + ")" : "");

  checkbox.onchange = function () {
    span.classList.toggle("completed");
  };

  div.appendChild(checkbox);
  div.appendChild(span);

  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.className = "delete-btn";

  delBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(div);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
  taskDate.value = "";
}