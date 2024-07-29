let idCounter = 0;
const elements = [];
let selectedColor = "";

$(document).ready(function () {

    // Event listener for add button
    $("#addButton").click(function () {

        const newElement = addElement();
        createNewDivElement(newElement);

    });

    // Event listener for color selection
    $("#favcolor").on("input", function () {

        selectedColor = $(this).val();
        $(this).css("background-color", selectedColor);

    });

  //   Event listener for Add Color 
    $("#addColorBtn").click(function(){
      applyColorToDivs()
    });

});

// Add new element object to elements array
function addElement() {

    idCounter++;
    const newDivId = `Div-Element ID: ${idCounter}`;

    const newElement = {
        id: newDivId,
        active: false,
        borderThickness: "",
    };

    elements.push(newElement);
    return newElement;
}

// Create new div element in the DOM
function createNewDivElement(element) {

    const newDiv = $("<div></div>")
        .addClass("new-div")
        .attr("data-id", element.id)
        .css("border", `${element.borderThickness}px`)
        .text(`Div ID: ${element.id}`)
        .appendTo("#divContainer");

    newDiv.click(function (event) {

        updateDivStatus(element.id, event.ctrlKey);

    });
}


// Update the status of a div element
function updateDivStatus(id, isCtrlPressed) {

    elements.forEach((element) => {

        let divElement = $(`div[data-id="${element.id}"]`);

        if (isCtrlPressed) {

            // If Ctrl key is pressed
            if (element.id === id) {

                element.active = !element.active;
                divElement.toggleClass("border-1");

            }
        } else {
            // If Ctrl key is not pressed
            if (element.id === id) {

                element.active = true;
                divElement.addClass("border-1");
               

            } else {

                element.active = false;
                divElement.removeClass("border-1");
                

            }

        }

    });

}


//  Apply selected color to div
function applyColorToDivs(){

  elements.forEach((element)=>{

    if(element.active){
      
      $(`div[data-id="${element.id}"]`).css("background-color", selectedColor )
    }
  })
}