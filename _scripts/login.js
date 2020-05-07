const inputs = document.querySelectorAll(".input");

function focusFunc(){
    console.log(focus)
  let parent = this.parentNode.parentNode;
  parent.classList.add('focus');
}
function blurFunc(){
    console.log(blur)
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
})