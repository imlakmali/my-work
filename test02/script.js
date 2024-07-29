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
        .css("background-color", selectedColor)
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

                // Apply selected color if active
                if (element.active) {

                    divElement.css("background-color", selectedColor);

                } else {
                    divElement.css("background-color", "#f5f1f1"); 
                }
            }
        } else {
            // If Ctrl key is not pressed
            if (element.id === id) {

                element.active = true;
                divElement.addClass("border-1");
                divElement.css("background-color", selectedColor);

            } else {

                element.active = false;
                divElement.removeClass("border-1");
                divElement.css("background-color", "#f5f1f1"); 

            }

        }

    });
    
}
