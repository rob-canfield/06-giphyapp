var topics = ['Hannibal Burress', 'Pete Holmes', 'Eric Andre', 'Ryan Hamilton', 'Bill Burr', 'Gary Gullman', 'Aziz Ansari', 'Anthony Jeselnik', 'Dave Chapelle', 'Brian Reagan']


for (i = 0; i < topics.length; i++){
    
    $("#topics").append('<button ' + 'data-comedian="' + topics[i] + '">' + topics[i] + '</button>');
    // $("button").("data-comedian", topics[i])
}



// $("button").attr("data-comedian", "Hannibal Burress");


$(document).on('click', 'button', function (){
    var comedian = $(this).attr("data-comedian");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    comedian + "&api_key=hVU4Q9qva6zSLrNJYez5dI7hZJ6m0jZ6";

    $("#gifs-here").html("");

    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function(response){
        
        var results = response.data;
        console.log(results);

        for (i = 0; i < 10; i++){
            if (results[i].rating !== "r"){

                var gifDiv = $("<div>");

                var rating = results[i].rating

                var p = $("<p>Rating: " + rating + "</p>");

                var image = $("<img>"); 

                image.attr("data-state", "still");
                image.attr("data-still", results[i].images.fixed_height_still.url);
                image.attr("data-animate", results[i].images.fixed_height.url);
                image.attr("src", results[i].images.fixed_height_still.url);
                image.attr("id", "gif")

                gifDiv.append(p);
                gifDiv.append(image);

                $("#gifs-here").prepend(gifDiv);
            }
        }
    })
})

$(document).on('click', '#gif', function(){

    var state = $(this).attr("data-state");

    if (state === "still"){
        $(this).attr("src", $(this).attr("data-animate"))
        $(this).attr(state, "animate");
    } else if (state === "animate"){
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr(state, "still");
    }
})