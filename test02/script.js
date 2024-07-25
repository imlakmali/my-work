let idCounter = 0;
const elements = [];


$(document).ready(function(){

    // Event listener for add button.
     $("#addButton").click(function(){

        const newElement = addElement();  
        createNewDivElement(newElement); 
        
    });

   
});

//  add new element object to elements array
function addElement(){

    idCounter++;
    const newDivId = `Div-Element ID : ${idCounter}`;    
    const newElement ={
        id: newDivId,
        active: false,
        borderThickness: 1
       
    };
    elements.push(newElement);
    return newElement

}

//  create new div element in the DOM
function createNewDivElement(element){

   const newDiv =  $("<div></div>")
   .addClass("new-div")
   .attr("data-id", element.id)
   .css("border",`${element.borderThickness}px solid #140f44` )
   .text(`Div ID: ${element.id}`)
   .appendTo("#divContainer");

   newDiv.click(function(event){
       
       updateDivStatus(element.id, event.ctrlKey);

   });
}


// Update the status of a div element
function updateDivStatus(id, isCtrlPressed) {

    elements.forEach((element) => {

        if (isCtrlPressed) {
            // If Ctrl key is pressed
            if (element.id === id) {

                if (element.borderThickness > 1) {
                    element.borderThickness = 1;
                    element.active = false;
                } else {
                    element.borderThickness = 10;
                    element.active = true;
                }
            }
        } else {

            // If Ctrl key is not pressed
            if (element.id === id) {
                element.borderThickness = 10;
                element.active = true;
            } else {

                element.borderThickness = 1;
                element.active = false;
            }
        }
    });

    updateDivElements();
}

// Update div elements' styles
function updateDivElements() {

    elements.forEach(function(element) {

        $(`div[data-id="${element.id}"]`).css('border-width', `${element.borderThickness}px`);

    });
}

