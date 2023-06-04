import { addTask } from "./AddTask";
import { showTasks} from "./renderTasks";

const createTaskInput = (tasks,projectName) => {
  // Create HTML Code by using javascript for Add Project Code
const mainContainer = document.getElementsByClassName("container-1")[0];
const aside = document.createElement("aside");
mainContainer.appendChild(aside);

const heading = document.createElement("h2");
heading.className = "Task-Heading";
heading.textContent=projectName;
aside.appendChild(heading);

const AddProject = document.createElement("div");
AddProject.className = "addProject";
aside.appendChild(AddProject);

const AddProjectText = document.createElement("span");
AddProjectText.textContent = "Add Your Task Here";
AddProject.appendChild(AddProjectText);

const TaskInputContainer = document.createElement("div");
TaskInputContainer.id = "taskInputContainer";
TaskInputContainer.className = "taskInputContainer";
aside.appendChild(TaskInputContainer);

const TaskList = document.createElement("div");
TaskList.className = "taskList";
aside.appendChild(TaskList);
const UlTaskList = document.createElement("ul");
UlTaskList.id = "taskList";
TaskList.appendChild(UlTaskList);


// Add Project Screen 70% when you click on Add Your Daily Task perform this function
const addProjectButton = document.getElementsByClassName("addProject")[0];
addProjectButton.addEventListener("click", showInputContainer);






    const taskInputContainer = document.getElementById("taskInputContainer");
    taskInputContainer.innerHTML = "";
  
    const taskNameheading = document.createElement("h3");
    taskNameheading.textContent="Enter Your Task Detail";
    const taskNameInput = document.createElement("input");
    taskNameInput.type = "text";
    taskNameInput.id = "taskNameInput";
    taskNameInput.placeholder = "Enter task name...";
  
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.id = "dateInput";
  
    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "descriptionInput";
    descriptionInput.placeholder = "Enter task description...";
  
    // Add Task Button
    const addButton = document.createElement("button");
    addButton.textContent = "Add Task";
    
    //   add TAsk function import form AddTask.js  
    addButton.addEventListener("click", () => {
      addTask(tasks);
      showTasks(tasks);     // after addition show all the task
    });
  
    // Cancel Task Button
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", cancelTask);


    const buttonContainer = document.createElement("div");
    taskInputContainer.appendChild(taskNameheading);
    taskInputContainer.appendChild(taskNameInput);
    taskInputContainer.appendChild(dateInput);
    taskInputContainer.appendChild(descriptionInput);
    buttonContainer.appendChild(addButton);
    buttonContainer.appendChild(cancelButton);
    taskInputContainer.appendChild(buttonContainer);
    taskNameInput.focus();
    
    // by default taskInputContainer Display none
    taskInputContainer.style.display = "none";
  };





  //  cancelTask() never want to add current TAsk
function cancelTask(){
    const taskInputContainer = document.getElementById("taskInputContainer");
    const addProjectButton = document.getElementsByClassName("addProject")[0];
    addProjectButton.style.display = "flex";
    taskInputContainer.style.display = "none";
  } 



// Function Show Input Container to Add TAsk
function showInputContainer() {
  const taskInputContainer = document.getElementsByClassName("taskInputContainer")[0];
  const addProjectButton = document.getElementsByClassName("addProject")[0];
  addProjectButton.style.display = "none";
  taskInputContainer.style.display = "flex";
}



  export{createTaskInput};