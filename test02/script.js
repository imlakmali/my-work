$(document).ready(function(){

    let idCounter = 0;
    const elements = [];

    $("#addButton").click(function(){

        idCounter++;
        const newDivId= `Div-Element ID : ${idCounter}`

        function addElement(){

            const newElement ={
                id: newDivId,
                active: false,
                borderThickness: 1
               
            };
            elements.push(newElement);
            return newElement
        }


function createNewDivElement(element){

     $("<div></div>")
    .addClass("new-div")
    .attr("data-id", element.id)
    .css("border",`${element.borderThickness}px solid #140f44` )
    .text(`Div ID: ${element.id}`)
    .appendTo("#divContainer")
    .click(function(){
        updateDivStatus(element.id)
    })
}

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
        
const newElement = addElement(); 
createNewDivElement(newElement); 

     

    });
});