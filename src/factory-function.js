


const addProject =  (projectName,listContainer) =>{
    let listItems = document.querySelectorAll("#list-container li");
    listItems.forEach(function(item) {
    item.classList.remove("checked");
  });
        let li =document.createElement("li");
        li.innerHTML =projectName;
        li.className="checked";
        listContainer.insertBefore(li, listContainer.firstChild);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }

export{addProject} 