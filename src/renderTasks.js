

// Function to render tasks  show tasks after edit, add && delete
const showTasks = (tasks) => {
  const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
  
    tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      const listItemContainer = document.createElement("div");
      const buttonContainer = document.createElement("div");
  
      listItemContainer.className = "show-task-list-container";
      buttonContainer.className = "button-container";
  
      const taskName = document.createElement("h2");
      taskName.className = "show_section";
      taskName.textContent = task.name;
  
      const taskDate = document.createElement("h3");
      taskDate.textContent = task.date;
      taskDate.className = "show_section";
  
      const taskDescription = document.createElement("p");
      taskDescription.textContent = task.description;
      taskDate.className = "show_section";
  
      const editButton = document.createElement("button");
      editButton.textContent = "Edit Data";
      editButton.addEventListener("click", () => {
        editTask(index,tasks);
      });
  
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        removeTask(index,tasks);
      });
  
      listItemContainer.appendChild(taskName);
      listItemContainer.appendChild(taskDate);
      listItemContainer.appendChild(taskDescription);
      buttonContainer.appendChild(editButton);
      buttonContainer.appendChild(removeButton);
      listItemContainer.appendChild(buttonContainer);
      listItem.appendChild(listItemContainer);
      taskList.appendChild(listItem);
    });


  };



  
  // Function to remove a task
const removeTask = (index,tasks) => {
    tasks.splice(index, 1);
    showTasks(tasks);
  };

  // Function to edit a task
const editTask = (index,tasks) => {
    const taskList = document.getElementById("taskList");
    const listItem = taskList.childNodes[index];
    const task = tasks[index];
    const taskName = task.name;
    const taskDate = task.date;
    const taskDescription = task.description;
    const listItemContainer = document.createElement("div");
    listItemContainer.className = "show-task-list-container";
    const taskNameInput = document.createElement("input");
    taskNameInput.type = "text";
    taskNameInput.value = taskName;
  
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.value = taskDate;
  
    const descriptionInput = document.createElement("textarea");
    descriptionInput.value = taskDescription;
  
    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
      tasks[index] = {
        name: taskNameInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
      };
      showTasks(tasks);
    });
  
    listItem.innerHTML = "";
    listItemContainer.appendChild(taskNameInput);
    listItemContainer.appendChild(dateInput);
    listItemContainer.appendChild(descriptionInput);
    listItemContainer.appendChild(saveButton);
    listItem.appendChild(listItemContainer);
    taskNameInput.focus();
  };



  export{showTasks} 