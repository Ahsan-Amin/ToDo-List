import "./main.css";
import { addProject } from "./factory-function";
import {createTaskInput} from "./input-outputTaskField";
import { showTasks} from "./renderTasks";

let ID_COUNTER = 1;
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("addButton");

const TaskContainerArray= [];



addButton.addEventListener("click", () => {
  if (inputBox.value === '') {
  } else {
    let Project = {
      ID: ID_COUNTER,
      projectName: inputBox.value,
      tasks: [],
    };
    removeUIElement(); 
    TaskContainerArray.unshift(Project);
    let TaskArray = Project.tasks;
    createTaskInput(TaskArray,Project.projectName);
    addProject(Project.projectName, listContainer);
    saveProjectName();

    inputBox.value = '';
    ID_COUNTER++;
  }
  saveProjectTasks(TaskContainerArray);

});

listContainer.addEventListener("click", function(e) {
  const lis = Array.from(listContainer.querySelectorAll("li" ));
  const clickedElement = e.target;

  if (clickedElement.tagName === "LI") {

      let listItems = document.querySelectorAll("#list-container li");
      listItems.forEach(function(item) {
      item.addEventListener("click", function() {
      listItems.forEach(function(item) {
      item.classList.remove("checked");
    });
    this.classList.add("checked");
  });
});


    removeUIElement();
    const index = lis.indexOf(clickedElement);
    saveProjectName();
    // get tasks array form relative index
    const getTasksArray = TaskContainerArray[index].tasks;
    const projectName=TaskContainerArray[index].projectName;
    createTaskInput(getTasksArray,projectName)
    showTasks(getTasksArray);
    saveProjectTasks(TaskContainerArray);
  }
  else if (clickedElement.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveProjectName();
    const index = lis.indexOf(e.target.parentElement);
    removeUIElement();
    TaskContainerArray.splice(index, 1);
    saveProjectTasks(TaskContainerArray);
  }
}, false);

// Function to remove UI element
const  removeUIElement = () => {
  const asideElements = Array.from(document.querySelectorAll("aside"));
  if (asideElements.length > 0) {
    asideElements.forEach((element) => {
      element.remove();
    });
  }
}

// Save data
const saveProjectName=()=> {
  localStorage.setItem("Project-Name", listContainer.innerHTML);
}
const showDataAfterStoreData=() => {
  listContainer.innerHTML = localStorage.getItem("Project-Name");
}


const saveProjectTasks = (ProjectTasks) => {
  localStorage.setItem("Project-Tasks", JSON.stringify(ProjectTasks));
};


const getProjectTasks = (TaskContainerArray) => {
  const storedArray = JSON.parse(localStorage.getItem('Project-Tasks'));
  
  if (storedArray) {
    TaskContainerArray.length = 0;
    Array.prototype.push.apply(TaskContainerArray, storedArray);
  }
};


getProjectTasks(TaskContainerArray);
showDataAfterStoreData();

