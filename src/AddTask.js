
const addTask = (tasks) => {
    const taskNameInput = document.getElementById("taskNameInput");
    const dateInput = document.getElementById("dateInput");
    const descriptionInput = document.getElementById("descriptionInput");
    const taskList = document.getElementById("taskList");
  
    if (taskNameInput.value !== "") {
      const task = {
        name: taskNameInput.value,
        date: dateInput.value,
        description: descriptionInput.value,
      };
      tasks.unshift(task);
      const taskInputContainer = document.getElementsByClassName("taskInputContainer")[0];
      taskInputContainer.style.display = "none";
      const addProjectButton = document.getElementsByClassName("addProject")[0];
      addProjectButton.style.display = "flex";

      taskNameInput.value = "";
      dateInput.value = "";
      descriptionInput.value = "";
    }
  };

  export{addTask} 