// Social Sharing Dropdown
$( "#social-share" ).click(function() {
    $("#social").toggleClass("visible").slideToggle(200);
  });
  
  // Follow User Button
  $(".username")
    .hover(function addUser() {
      $(this).text("+");
    }, function() {
      $(this).text("t");    
  });
  
  // Open Modal Window
  $("#initial").click(function(e) {
    $("#modal").toggleClass("visible").slideToggle(200);
  });
  
  // Close Modal Window
  $("#close").click(function() {
    $("#modal").toggleClass("hidden").toggle();
  });