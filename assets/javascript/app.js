$( document ).ready(function() {

    var sandler = ["Happy Gilmore", "The Waterboy", "Click", "Billy Madison", "Wedding Singer", "Little Nicky", "Big Daddy", "Anger Management", "Mr. Deeds", "Air Heads", "50 First Dates", "The Longest Yard", "I Now Pronounce You Chuck and Larry"];
    
    function displayGifButtons(){
        $("#gifButtonsView").empty(); 
        for (var i = 0; i < sandler.length; i++){
            var gifButton = $("<button>");
            gifButton.addClass("action");
            gifButton.addClass("btn btn-primary")
            gifButton.attr("data-name", sandler[i]);
            gifButton.text(sandler[i]);
            $("#gifButtonsView").append(gifButton);
        }
    }
    
    function addNewButton(){
        $("#addGif").on("click", function(){
        var action = $("#action-input").val().trim();
        if (action == ""){
          return false; 
        }
        sandler.push(action);
    
        displayGifButtons();
        return false;
        });
    }
    
    function removeLastButton(){
        $("removeGif").on("click", function(){
        sandler.pop(action);
        displayGifButtons();
        return false;
        });
    }
    
    function displaygifsIn(){
        var action = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + action + "&limit=10&api_key=fGVNfsOzUWpcV89QR7oKQR2ARIqQWAlW";
        console.log(queryURL); 
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
            console.log(response); 
            $("#gifsIn").empty(); 
            var results = response.data; 
            if (results == ""){
              alert("There isn't a gif for this selected button");
            }
            for (var i=0; i<results.length; i++){
    
                var gifDiv = $("<div>"); 
                gifDiv.addClass("gifDiv");
                
                var gifRating = $("<p>").text("Rating: " + results[i].rating);
                gifDiv.append(gifRating);
                
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_small_still.url); 
                gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); 
                gifImage.attr("data-animate", results[i].images.fixed_height_small.url); 
                gifImage.attr("data-state", "still"); 
                gifImage.addClass("image");
                gifDiv.append(gifImage);
                
                $("#gifsIn").prepend(gifDiv);
            }
        });
    }
    
    displayGifButtons(); 
    addNewButton();
    removeLastButton();
    
    $(document).on("click", ".action", displaygifsIn);
    $(document).on("click", ".image", function(){
        var state = $(this).attr('data-state');
        if ( state == 'still'){
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }else{
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });
    });