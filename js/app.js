$(document).click(".person__details", function(event) {

  detailsToOpen = $(event.target).closest(".m-people__person").find(".contact__details");
  detailsToClose = $(".contact__details:visible").not(detailsToOpen)
  detailsToClose.slideUp();
  detailsToOpen.slideToggle();
});
