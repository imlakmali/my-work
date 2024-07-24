$(document).ready(function () {
    let selectedColor = "";
    let elements = [];
    let nextId = 1;

    // Function to add a new div element
    function addElement() {
        const newElement = {
            id: nextId++,
            active: false,
            borderWidth: 1,
            backgroundColor: ""
        };
        elements.push(newElement);
        createDivElement(newElement);
    }

    // Function to create a new div element in the DOM
    function createDivElement(element) {
        let newDiv = $("<div></div>");
        newDiv.attr("data-id", element.id);
        newDiv.text("Div ID: " + element.id);

        // Event listener for toggling element selection
        newDiv.on("click", function (event) {
            if (event.ctrlKey) { // If Ctrl key is pressed, toggle element
                element.active = true;
                element.borderWidth = 10;
                element.backgroundColor = selectedColor;
            } else { // Otherwise, deselect all others and select this one
                elements.forEach(el => {
                    el.active = false;
                    el.borderWidth = 1;
                    el.backgroundColor = "";
                });
                element.active = true;
                element.borderWidth = 10;
                element.backgroundColor = selectedColor;
            }

            updateDivElements();
        });

        $("#divContainer").append(newDiv);
        updateDivElement(element, newDiv);
    }

    // Function to update a specific div element based on the current state
    function updateDivElement(element, div) {
        $(div).css("border-width", element.borderWidth + "px");
        $(div).css("background-color", element.backgroundColor);
    }

    // Function to update all div elements based on the current state
    function updateDivElements() {
        $("#divContainer div").each(function () {
            const id = $(this).attr("data-id");
            const element = elements.find(e => e.id === parseInt(id));
            if (element) {
                updateDivElement(element, this);
            }
        });
    }

    // Event listener for color selection
    $("#colorPalette div").on("click", function () {
        selectedColor = $(this).css("background-color");
        $("#colorTarget").css("background-color", selectedColor);
    });

    // Event listener for adding a new div element
    $("#addBtn").on("click", function () {
        addElement();
    });

    // Event listener for removing selected div elements
    $("#removeBtn").on("click", function () {
        elements = elements.filter((element) => !element.active);
        $("#divContainer").children().each(function () {
            const id = $(this).attr("data-id");
            const element = elements.find(e => e.id === parseInt(id));
            if (!element) {
                $(this).remove();
            }
        });
    });
});