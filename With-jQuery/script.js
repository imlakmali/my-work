$(document).ready(function(){
    $("#addBtn").click(function(){

      const div1 = $('<div class="new-div" id="nevDiv">New Div</div>');

      $('#divContainer').append(div1);
    });
  });