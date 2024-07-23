

$(document).ready(function () {

    let selectedColor = ""; 
    let elements = []; 
    let nextId = 1; 

    // Function to create div elements on the front page
    function createDivElements() {

        $("#divContainer").empty(); 

        elements.forEach((el) => {
            const newDiv = $("<div></div>");
            
            newDiv.attr("data-id", el.id);
            newDiv.css("border-width", el.borderWidth + "px");
            newDiv.css("background-color", el.backgroundColor);

            const newContent = $("<span>" + el.content + "</span>");
            newDiv.append(newContent);

            // Event listener for toggling element selection
            newDiv.on("click", function (event) {
                let id = $(this).attr("data-id");
                console.log("--div Id", id);
                console.log("elements",elements)
                toggleElementSelection(parseInt(id), event.ctrlKey);
                updateDivElements(); 
            });

            $("#divContainer").append(newDiv);
        });
    }

    // Function to add a new div element
    function addElement() {
        const newElement = {
            id: nextId++, 
            status: 'inactive', 
            content: "New Content", 
            borderWidth: 1,
            backgroundColor: ""
        };
        elements.push(newElement);
    }

    // Function to update the div elements based on the current state
    function updateDivElements() {
        $("#divContainer div").each(function() {
            const id = $(this).attr("data-id");
            const el = elements.find(e => e.id === parseInt(id));
            if (el) {
                $(this).css("border-width", el.borderWidth + "px");
                $(this).css("background-color", el.backgroundColor);
            }
        });
    }

    // Event listener for color selection 
    $("#colorPalette div").on("click", function () {
        selectedColor = $(this).css("background-color");
        updateColor();
    });

    // Event listener for adding a new div element
    $("#addBtn").on("click", function () {
        addElement();
        createDivElements();
    });

    // Event listener for removing selected div elements
    $("#removeBtn").on("click", function () {
        removeSelectedElements();
        createDivElements();
    });

    // Function to update the color target with the selected color
    function updateColor() {
        $("#colorTarget").css("background-color", selectedColor);
    }

    // Function to remove selected div elements
    function removeSelectedElements() {
        elements = elements.filter((el) => el.status !== 'active');
    }

    // Function to toggle the selection state of a div element
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
});
