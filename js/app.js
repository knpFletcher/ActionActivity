$(document).ready(function(){
    $("#person0-details").hide();
    $("#person1-details").hide();
    $("#person2-details").hide();
    $("#person3-details").hide();

  $("#person0-anchor").click(function(){
    $("#person0-details").slideToggle();
    $("#person1-details").hide();
    $("#person2-details").hide();
    $("#person3-details").hide();
  });

  $("#person1-anchor").click(function(){
    $("#person1-details").slideToggle();
    $("#person0-details").hide();
    $("#person2-details").hide();
    $("#person3-details").hide();
  });

  $("#person2-anchor").click(function(){
    $("#person2-details").slideToggle();
    $("#person0-details").hide();
    $("#person1-details").hide();
    $("#person3-details").hide();
  });

  $("#person3-anchor").click(function(){
    $("#person3-details").slideToggle();
    $("#person0-details").hide();
    $("#person1-details").hide();
    $("#person2-details").hide();
  });
});
