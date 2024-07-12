$(document).ready(function () {

  const picedColor = $(".color");
  let selectedColor = "";

  picedColor.on("click", function () {

    selectedColor = $(this).css("background-color");
    $("#colorTarget").css("background-color", selectedColor);

  });


  function addElement() {

    const newDiv = $("<div></div>");
    newDiv.addClass("newDiv");

    const newContent = $("<span>New Content</span>");
    newDiv.append(newContent);

    newDiv.on("click", function () {

      $(this).css("background-color", $("#colorTarget").css("background-color") );

    });

    $("#divContainer").append(newDiv);

  }

  $("#addBtn").on("click", addElement);
  
});
