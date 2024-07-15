
let selectedColor = "";

$(document).ready(function () {

 $(".color").on('click', function () {

    selectedColor = $(this).css("background-color");
    $("#colorTarget").css("background-color", selectedColor);

  });


  function addElement() {

    const newDiv = $("<div></div>");
    newDiv.addClass("newDiv");

    const newContent = $("<span>New Content</span>");
    newDiv.append(newContent);

    newDiv.on("click", function () {

      $(this).css("background-color", selectedColor );

    });

    $("#divContainer").append(newDiv);

  }

  $("#addBtn").on("click", addElement);
  
});
