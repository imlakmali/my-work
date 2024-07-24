let idCounter = 0;
const elements = [];


$(document).ready(function(){

    // Event listener for add button.
     $("#addButton").click(function(){

        const newElement = addElement();   //create new element and add it in to the array.
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

    $("<div></div>")
   .addClass("new-div")
   .attr("data-id", element.id)
   .css("border",`${element.borderThickness}px solid #140f44` )
   .text(`Div ID: ${element.id}`)
   .appendTo("#divContainer")
   .click(function(){

       updateDivStatus(element.id);

   })
}


// update the status of s div element
function updateDivStatus(id){

const element = elements.find(e=> e.id === id);
if(element){

    element.active = !element.active;

    let borderThickness;
    if(element.active){
        borderThickness = 10;
    }else{
        borderThickness=1;
    }
    $(`div[data-id="${id}"]`).css("border-width", `${borderThickness}px`);
    console.log(elements)
    
}
}
    