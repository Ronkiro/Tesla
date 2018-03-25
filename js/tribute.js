  $(document).ready(function() {
    $("body").addClass("animated bounce");
    $("#github").mouseover(function()         {
      $("#github").addClass("animated shake");
    });
    
    $("#github").mouseleave(function() {
      $("#github").removeClass("animated shake");
    });
    $("#share").mouseover(function()
{
      $("#share").removeClass("btn-danger");
      $("#share").addClass("btn-primary");
    });
    $("#share").mouseleave(function()
{
    $("#share").removeClass("btn-primary");
    $("#share").addClass("btn-danger");
    });
  });