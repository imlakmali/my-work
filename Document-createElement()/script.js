$(document).ready(function () {

      let selectedColor = "";
      let element = [];

  $(".color").on("click", function () {

      selectedColor = $(this).css("background-color");
      updateColor();

  });

  $("#addBtn").on("click", function () {

      addElement();
      uiSection();

  });

  $("#removeBtn").on("click", function () {

      removeSelectedDiv();
      uiSection();

  });

  function updateColor() {

       $("#colorTarget").css("background-color", selectedColor);

  }

  function addElement() {

      const newElement = {
        content: "new content",
        borderWidth: 1,
        backgroundColor: "",
    };
        element.push(newElement);

  }

  function toggleElementSection(indx, isctrlPressed) {

      if (isctrlPressed) {

        if (element[indx].borderWidth > 1) {

          element[indx].borderWidth = 1;
          element[indx].backgroundColor = "";

        } else {

          element[indx].borderWidth = 5;
          element[indx].backgroundColor = selectedColor;

      }
    } else {

        element.forEach((el, i) => {

          if (i == indx) {
            el.borderWidth = 5;
            el.backgroundColor = selectedColor;

          } else {

            el.borderWidth = 1;
            el.backgroundColor = "";

        }

      });

    }

  }

  function removeSelectedDiv() {

    element = element.filter(function (el) {
      return el.borderWidth <= 1;

    });
  }

  function uiSection() {

    $("#divContainer").empty();
    element.forEach((el, indx) => {

      const newDiv = $("<div></div>");
      newDiv.addClass("newDiv");

      newDiv.css("border-width", el.borderWidth + "px");
      newDiv.css("background-color", el.backgroundColor);

      const newContent = $("<span>New Content</span>");
      newDiv.append(newContent);

      newDiv.on("click", function (evnt) {

        toggleElementSection(indx, evnt.ctrlKey);
        uiSection();

      });

      $("#divContainer").append(newDiv);
      
    });

  }
});
