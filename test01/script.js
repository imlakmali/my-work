$(document).ready(function () {

  let selectedColor = ""; 
  let elements = []; 
  let nextId = 1; 
  // console.log(elements)----

  // Function to add a new div element
  function addElement() {
    const newElement = {
      id: nextId++, 
      status: 'inactive', 
      content: "new content", 
      borderWidth: 1,
      backgroundColor: ""
    };
    elements.push(newElement); 
  }


  // Event listener for color selection 
  $("#colorPalette div").on("click", function () {

    selectedColor = $(this).css("background-color"); 
    updateColor(); 

  });


  // Event listener for adding a new div element
  $("#addBtn").on("click", function () {

    addElement(); 
    renderElements(); 

  });


  // Event listener for removing selected div elements
  $("#removeBtn").on("click", function () {

    removeSelectedElements(); 
    renderElements(); 

  });


  // Function to update the color target with the selected color
  function updateColor() {

    $("#colorTarget").css("background-color", selectedColor); 

  }


  // Function to toggle the selection state of an div element
  function toggleElementSelection(id, isCtrlPressed) {

    elements.forEach((el) => {

      if (isCtrlPressed) {

        // If Ctrl key is pressed
        if (el.id === id) {

          if (el.borderWidth > 1) {

            el.borderWidth = 1; 
            el.backgroundColor = ""; 
            el.status = 'inactive';

          } else {

            el.borderWidth = 5; 
            el.backgroundColor = selectedColor; 
            el.status = 'active'; 

          }
        }
      } else {

        // If Ctrl key is not pressed, select only the clicked element
        if (el.id === id) {

          el.borderWidth = 5; 
          el.backgroundColor = selectedColor; 
          el.status = 'active'; 

        } else {

          el.borderWidth = 1; 
          el.backgroundColor = ""; 
          el.status = 'inactive'; 

        }
      }
    });
  }


  // Function to remove selected div elements
  function removeSelectedElements() {

    elements = elements.filter((el) => el.status !== 'active'); 

  }


  // Function to render elements on the UI
  function renderElements() {

    $("#divContainer").empty(); 

    elements.forEach((el) => {

      const newDiv = $("<div></div>");
      newDiv.addClass("newDiv"); 

      newDiv.attr("data-id", el.id); 

      newDiv.css("border-width", el.borderWidth + "px");
      newDiv.css("background-color", el.backgroundColor); 

      const newContent = $("<span>New Content</span>");
      newDiv.append(newContent); 


      // Event listener for toggling element selection
      newDiv.on("click", function (event) {

        let id = $(this).attr("data-id"); 
        console.log("--div id",id  )
        console.log(`Element ID ${el.id} status: ${el.status}`);
        toggleElementSelection(parseInt(id), event.ctrlKey); 
        renderElements(); 

      });

      $("#divContainer").append(newDiv); 
    });

    
    
  }

});
