$(document).ready(function () {

  let selectedColor = ""; 
  let elements = []; 


  // Event listener for color selection
  $(".color").on("click", function () {

    selectedColor = $(this).css("background-color"); 
    updateColor(); 

  });


  // Event listener for adding a new element
  $("#addBtn").on("click", function () {
    addElement(); 
    renderElements(); 
  });

  
  // Event listener for removing selected elements
  $("#removeBtn").on("click", function () {
    removeSelectedElements(); 
    renderElements(); 
  });


  // Function to update the color target with the selected color
  function updateColor() {
    $("#colorTarget").css("background-color", selectedColor); 
  }


  // Function to add a new element
  function addElement() {
    const newElement = {
      content: "new content", 
      borderWidth: 1,
      backgroundColor: ""
    };
    elements.push(newElement); 
  }
  

  // Function to toggle the selection state of an element
  function toggleElementSelection(index, isCtrlPressed) {
    if (isCtrlPressed) {

      // If Ctrl key is pressed, toggle the selection state
      if (elements[index].borderWidth > 1) {

        elements[index].borderWidth = 1; 
        elements[index].backgroundColor = ""; 
      } else {

        elements[index].borderWidth = 5; 
        elements[index].backgroundColor = selectedColor; 
      }
    } else {

      // If Ctrl key is not pressed, select only the clicked element
      elements.forEach((el, i) => {

        if (i == index) {
          el.borderWidth = 5; 
          el.backgroundColor = selectedColor; 
        } else {

          el.borderWidth = 1; 
          el.backgroundColor = ""; 
        }
      });
    }
  }


  // Function to remove selected elements
  function removeSelectedElements() {

    elements = elements.filter(function (el) {
      return el.borderWidth <= 1; 

    });
  }


  // Function to render elements on the UI
  function renderElements() {

    $("#divContainer").empty(); 
    elements.forEach((el, index) => {

      const newDiv = $("<div></div>");
      newDiv.addClass("newDiv"); 

      newDiv.css("border-width", el.borderWidth + "px");
      newDiv.css("background-color", el.backgroundColor); 

      const newContent = $("<span>New Content</span>");
      newDiv.append(newContent); 


      // Event listener for toggling element selection
      newDiv.on("click", function (event) {
        toggleElementSelection(index, event.ctrlKey); 
        renderElements(); 
      });

      $("#divContainer").append(newDiv); 
    });
  }

});
