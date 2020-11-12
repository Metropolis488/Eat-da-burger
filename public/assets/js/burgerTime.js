$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    var beenEaten = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: beenEaten
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burgerName: $("#HB").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
        console.log(newBurger);
      }
    );
  });

});
