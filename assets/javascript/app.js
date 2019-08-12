var topics = ['Hannibal Burress', 'Pete Holmes', 'Eric Andre', 'Ryan Hamilton', 'Bill Burr', 'Gary Gullman', 'Aziz Ansari', 'Anthony Jeselnik', 'Dave Chapelle', 'Brian Reagan']


for (i = 0; i < topics.length; i++){
    var item = topics[i]
    $("#topics").append("<button>" + item + "</button>");
}



$("button").attr("data-comedian", "Hannibal Burress");


$("button").click(function (){
    var comedian = $(this).attr("data-comedian");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    comedian + "&api_key=hVU4Q9qva6zSLrNJYez5dI7hZJ6m0jZ6";

    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function(response){
        console.log(response.data);

        var results = response.data;

        for (i = 0; i < results.length; i++){
            if (results[i].rating !== "r"){

                var gifDiv = $("<div>");

                var rating = results[i].rating

                var p = $("<p>Rating: " + rating + "</p>");

                var image = $("<img>"); 

                image.attr("src", results[i].image)

                gifDiv.append(p);
                gifDiv.append(image);

                $("#gifs-here").prepend(gifDiv);
            }
        }
    })


})



