var topics = ['Hannibal Burress', 'Pete Holmes', 'Eric Andre', 'Ryan Hamilton', 'Bill Burr', 'Gary Gullman', 'Aziz Ansari', 'Anthony Jeselnik', 'Dave Chapelle', 'Brian Reagan']


for (i = 0; i < topics.length; i++){
    $("#topics").append("<button>" + topics[i] + "</button>");
}