
document.getElementById("addBtn").onclick = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element into the divContainer
  const divContainer = document.getElementById("divContainer");
  divContainer.appendChild(newDiv);
}


const pickedColor = document.querySelectorAll('.color')

pickedColor.forEach(pickedColor=>{
  
  pickedColor.addEventListener('click', function(){

  const selectedColor = this.style.backgroundColor;

  const targetColor = document.getElementById('colorTarget')

  targetColor.style.backgroundColor = selectedColor;

  })
})