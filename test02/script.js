let idCounter = 0;
const elements = [];

$(document).ready(function() {

    // Event listener for add button.
    $("#addButton").click(function() {

        const newElement = addElement();
        createNewDivElement(newElement);

    });

});


// Add new element object to elements array
function addElement() {

    idCounter++;
    const newDivId = `Div-Element ID : ${idCounter}`;

    const newElement = {
        id: newDivId,
        active: false,
        borderThickness: ""

    };

    elements.push(newElement);
    return newElement;

}


// Create new div element in the DOM
function createNewDivElement(element) {

    const newDiv = $("<div></div>")
        .addClass("new-div")
        .attr("data-id", element.id)
        //  .css("border", `${element.borderThickness}px solid`)
        .text(`Div ID: ${element.id}`)
        .appendTo("#divContainer");

    newDiv.click(function(event) {

        updateDivStatus(element.id, event.ctrlKey);

    });
}

// Update the status of a div element
function updateDivStatus(id, isCtrlPressed) {

    elements.forEach((element) => {

        const divElement = $(`div[data-id="${element.id}"]`);

        if (isCtrlPressed) {

            // If Ctrl key is pressed
            if (element.id === id) {

                if (element.borderThickness > 1) {
                    // element.borderThickness = 1;
                    // element.active = false;
                    // divElement.addClass("border-1 border-4 border-5 border-10")

                    divElement.toggleClass(" border-5 "); 
                        
                } else {
                    // element.borderThickness = 10;
                    // element.active = true;

                     divElement.toggleClass(" border-5");
                   
                        
                }
            }
        } else {
            // If Ctrl key is not pressed
            if (element.id === id) {
                // element.borderThickness = 10;
                // element.active = true;

                divElement.addClass("border-4");
                    
                    
            } else {
                // element.borderThickness = 1;
                // element.active = false;

                divElement.removeClass("border-4 ")
                
            }
        }
    });
}
