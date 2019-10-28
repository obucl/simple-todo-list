let taskInput = document.getElementById("task-field");
let ul = document.getElementById("task-list");



taskInput.addEventListener ("keypress", function(param) {
  if (taskInput.value.length > 0 && param.keyCode === 13) {
    param.preventDefault()

    let mainTask = document.createElement("span");
    mainTask.className = "main-task";

    let li = document.createElement("li");
    
    li.addEventListener ("mouseenter", showOptions);
    li.addEventListener ("mouseleave", hideOptions);

    let divOptions = document.createElement("div");
    divOptions.className = "task-options hide";

    let edit = document.createElement("span");
    edit.appendChild(document.createTextNode("EDIT"));
    edit.addEventListener ("click", taskEdit);

    let str = document.createElement("span");
    str.appendChild(document.createTextNode("STRIKETHROUGH"));
    str.addEventListener ("click", taskStr);

    let remove = document.createElement("span");
    remove.appendChild(document.createTextNode("REMOVE"));
    remove.addEventListener ("click", taskRemove);

    divOptions.appendChild(edit);
    divOptions.appendChild(str);
    divOptions.appendChild(remove);

    mainTask.appendChild(document.createTextNode(taskInput.value));

    li.appendChild(mainTask);
    li.appendChild(divOptions);

    ul.appendChild(li);

    taskInput.value = "";
  } 
  else if (taskInput.value.length === 0 && param.keyCode === 13) {
    param.preventDefault()
  }
})

// Edit the task
function taskEdit(edit) {
  edit.srcElement.parentElement.classList.add("hide");
  let textValue =  edit.srcElement.parentElement.parentElement.firstElementChild.innerText;

  let mainTaskEdit = document.createElement("input")
  mainTaskEdit.setAttribute('maxlength', 40)
  mainTaskEdit.value = textValue;
  console.log(mainTaskEdit)

  let mainTask = edit.srcElement.parentElement.parentElement.firstElementChild;

  edit.srcElement.parentElement.parentElement.replaceChild(mainTaskEdit, mainTask);

  mainTaskEdit.addEventListener("keypress", function(edited) {
    if (mainTaskEdit.value.length > 0 && edited.keyCode === 13) {
      edited.preventDefault();
      mainTask.innerHTML = mainTaskEdit.value;

      edit.srcElement.parentElement.parentElement.replaceChild(mainTask, mainTaskEdit);
    }
  })
}

// Strike-through the task
function taskStr(str) {
  str.srcElement.parentElement.parentElement.firstElementChild.classList.add("done");
}

// Remove the list
function taskRemove(remove) {
  let list = remove.srcElement.parentElement.parentElement
  remove.srcElement.parentElement.parentElement.parentElement.removeChild(list)
}

// Shows the task options
function showOptions(show) {
  if (show.srcElement.firstElementChild.nodeName === "SPAN") {
    show.srcElement.children[1].classList.remove('hide')
  }
}

// Hides the task options
function hideOptions(hide) {
    hide.srcElement.children[1].classList.add('hide')
}


// Resets the input value back to null
function resetInputValue() {
  taskInput.value = null;
}
window.onload = resetInputValue()