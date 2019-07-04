$(document).ready(function() {

  $("#person0-anchor").click(function() {
    $("#person1-details").slideUp($(this).is(':visible'));
    $("#person2-details").slideUp($(this).is(':visible'));
    $("#person3-details").slideUp($(this).is(':visible'));
    $("#person0-details").slideToggle("fast", function() {
      $("#person0-details").toggleClass("hidden");
    });
  });

  $("#person1-anchor").click(function() {
    $("#person0-details").slideUp($(this).is(':visible'));
    $("#person2-details").slideUp($(this).is(':visible'));
    $("#person3-details").slideUp($(this).is(':visible'));
    $("#person1-details").slideToggle("fast", function() {
      $("#person1-details").toggleClass("hidden");
    });
  });

  $("#person2-anchor").click(function() {
    $("#person0-details").slideUp($(this).is(':visible'));
    $("#person1-details").slideUp($(this).is(':visible'));
    $("#person3-details").slideUp($(this).is(':visible'));
    $("#person2-details").slideToggle("fast", function() {
      $("#person2-details").toggleClass("hidden");
    });
  });

  $("#person3-anchor").click(function() {
    $("#person0-details").slideUp($(this).is(':visible'));
    $("#person1-details").slideUp($(this).is(':visible'));
    $("#person2-details").slideUp($(this).is(':visible'));
    $("#person3-details").slideToggle("fast", function() {
      $("#person3-details").toggleClass("hidden");
    });
  });
});
