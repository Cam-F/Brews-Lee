$(function () {
    $(".change-state").on("click", function (event) {
        var id = $(this).data("id");
        var newState = $(this).data("newstate");

        var newDrinkState = {
            empty: newState
        };

        $.ajax("/api/beers/" + id, {
            type: "PUT",
            data: newDrinkState
        }).then(
            function () {
                console.log("Changed drink to", newState);
                location.reload();
            }
            );
    });

    $("create-form").on("submit", function (event) {
        event.preventDefault();

        var newBeer = {
            name: $("#beer").val().trim(),
            empty: true
        };

        $.ajax("/api/beers", {
            type: "POST",
            data: newBeer
        }).then(
            function () {
                console.log("Created new beer");
                location.reload();
            }
            );
    });

    $(".delete-beer").on("click", function (even) {
        var id = $(this).data("id");

        $.ajax("/api/beers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("Deleted beer" + id);
                location.reload();
            }
            );
    });
});