const pickedColor = document.querySelectorAll('.color');

const selectedColor = '';


  pickedColor.forEach(color=>{

    color.addEventListener('click', function(){

     selectedColor = this.style.backgroundColor;

    const targetColor = document.getElementById('colorTarget');

    targetColor.style.backgroundColor = selectedColor;

  })
})




function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  newDiv.addEventListener('click', function(){

    const colorTarget = document.getElementById('colorTarget');
    this.style.backgroundColor = colorTarget.style.backgroundColor

  });
  // add the newly created element into the divContainer
  const divContainer = document.getElementById("divContainer");
  divContainer.appendChild(newDiv);
}

const addBtn = document.getElementById("addBtn")
addBtn.addEventListener('click', addElement)

