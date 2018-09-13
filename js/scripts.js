// Business logic:


// Everything below this line is front-end logic:

$(document).ready(function() {
  $("form#appt").submit(function(event) {
    event.preventDefault();
    // alert("beginning is working");
    var name = $("#name").val();
    var description = $("#description").val();
    var date = $("#date").val();
    var startTime = $("#startTime").val();
    var endTime = $("#endTime").val();

// alert("end is working");
    $("#output").text("Hello " + name + ", your appointment for " + description + " is set for " + date + " at " + startTime + " until " + endTime + ".");

 });
});
