let idCounter = 0;

$(document).ready(function() {
    // Event listener for add button.
    $("#addButton").click(function() {
        addNewDiv();
    });
});

function addNewDiv() {
    idCounter++;
    const newDivId = `Div-Element-${idCounter}`;

    const newDiv = $("<div></div>")
        
        .attr("id", newDivId)
        .text(`Div ID: ${newDivId}`)
        .appendTo("#divContainer");

    newDiv.click(function() {

         $(this).toggleClass("border-3");

        
        });
}



