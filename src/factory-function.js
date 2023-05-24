const addProject =  (inputBox,listContainer) =>{
    if (inputBox.value === ''){
        alert("You must need to add the content");
       }
    else{
        li(inputBox,listContainer);
    }


    function li (inputBox,listContainer){
        let li =document.createElement("li");
        li.innerHTML =inputBox.value;
        listContainer.insertBefore(li, listContainer.firstChild);
        inputBox.value = '';
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
        return li;
    }



}

export{addProject} 