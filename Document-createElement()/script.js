let selectedColor = "";


$(document).ready(function () {
 
  $(".color").on("click", function () {

    selectedColor = $(this).css("background-color");
    $("#colorTarget").css("background-color", selectedColor);

  });
  
  

  function addElement() {

    const newDiv = $("<div></div>");
    newDiv.addClass("newDiv");

    const newContent = $("<span>New Content</span>");
    newDiv.append(newContent);

    newDiv.on("click", function (evnt) {

      if(evnt.ctrlKey){

        const currntBorderwidth = parseInt($(this).css("border-width"));

        if(currntBorderwidth >1){

          $(this).css("border-width", "1px");
          $(this).css("background-color", "");

        }else{

          $(this).css("border-width", "5px");
          $(this).css("background-color", selectedColor);
        }
      }else{

        $(".newDiv").css("border-width", "1px").css("background-color", "");
        $(this).css("border-width", "5px").css("background-color", selectedColor);

      }
     
      
    });


    $("#divContainer").append(newDiv);

  }


  $("#addBtn").on("click", addElement);

  $("#removeBtn").on("click", function () {

    $(".newDiv").each(function () {
      
      // console.log("-------",$(this).css("border-width"));

      if (parseInt($(this).css("border-width")) > 1) {

        $(this).remove();

      }

    });

  });

});