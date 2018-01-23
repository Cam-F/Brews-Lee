$(function(){
    $(".cheers").on("click", function(event){
        var id = $(this).data("id");
        var newState = $(this).data("newDrank");

        var newBeerState = {
            drank: newState
        };

        $.ajax("/api/beers/" + id, {
            type: "PUT",
            data: newBeerState
        }).then(
            function(){
                console.log("Changed beer state to", newState);
                location.reload();
            }
        );
    });

    $("#createBeer").on("submit", function(event){
        event.preventDefault();

        var newBeer = {
            name: $("#name").val().trim()
        };

        $.ajax("/api/beers", {
            type: "POST",
            data: newBeer
        }).then(
            function(){
                console.log("Created a new beer");
                location.reload();
            }
        );
    });

    $(".deleteBeer").on("click", function(event){
        var id = $(this).data("id");

        $.ajax("/api/beers/" + id, {
            type: "DELETE"
        }).then(
            function(){
                console.log("Deleted beer", + id);
                location.reload();
            }
        );
    });
});