import "./main.css";
import { addProject } from "./factory-function";
import { addTask } from "./AddTask";


const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("addButton");

let TaskContainerArray= [];


addButton.addEventListener("click", () => {
  addProject(inputBox, listContainer);
  saveData();
  createTaskContainer();
  const TaskContainerObject = { func: createTaskContainer };
  TaskContainerArray.unshift(TaskContainerObject);
});

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showDataAfterStoreData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showDataAfterStoreData();





function createTaskContainer(){


    // Create HTML Code by using javascript for Add Project Code
     const mainContainer = document.getElementsByClassName("container")[0];
const aside = document.createElement("aside");
mainContainer.appendChild(aside);

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

// Function Show Input Container to Add TAsk
function showInputContainer() {
    const taskInputContainer = document.getElementsByClassName("taskInputContainer")[0];
    addProjectButton.style.display = "none";
    taskInputContainer.style.display = "flex";
  }
  
// by default taskInputContainer Display none
const taskInputContainer = document.getElementsByClassName("taskInputContainer")[0];
taskInputContainer.style.display = "none";




// Array to store tasks
let tasks = [];

// Function to create the input fields and button
const createTaskInput = () => {
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

  const addButton = document.createElement("button");
  addButton.textContent = "Add Task";
//   add TAsk funvction import form AddTAsk
  addButton.addEventListener("click", () => {
    addTask(tasks);
    renderTasks();

  });

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
};


// Function to add a new task


//  cancelTask() never want to add current TAsk
function cancelTask(){
    addProjectButton.style.display = "flex";
    taskInputContainer.style.display = "none";
} 
// Function to remove a task
const removeTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
};

// Function to edit a task
const editTask = (index) => {
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
    renderTasks();
  });

  listItem.innerHTML = "";
  listItemContainer.appendChild(taskNameInput);
  listItemContainer.appendChild(dateInput);
  listItemContainer.appendChild(descriptionInput);
  listItemContainer.appendChild(saveButton);
  listItem.appendChild(listItemContainer);
  taskNameInput.focus();
};

// Function to render tasks
const renderTasks = () => {
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
      editTask(index);
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      removeTask(index);
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

// Initialize the task input fields and button
createTaskInput();


}

