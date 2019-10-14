let input = document.getElementById("input");
let ul = document.getElementById("task-lists");

// Resets the input value back to null
function resetInputValue() {
  input.value = null;
}

input.addEventListener ("keypress", function(param) {
  if (input.value.length > 0 && param.keyCode === 13) {
    param.preventDefault()
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
})

window.onload = resetInputValue()