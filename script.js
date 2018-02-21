var sports = ['Soccer', 'Hockey', 'Basketball', 'Football', 'Baseball'];

for (i = 0; i < sports.length; i++) {
    var button = $('<button/>').text(sports[i]);
    $(button).attr('class', 'sports-btn');
    $(button).attr('data-name', sports[i]);
    $('.buttons').append(button);
}

$('#submit-btn').on('click', function () {
    var input = $('#sport-input').val();
    var button = $('<button/>').text(input);
    $(button).attr('class', 'sports-btn');
    $(button).attr('data-name', input);
    $('.buttons').append(button);
})

$(document).on('click', '.sports-btn', function () {
    $('.gif-results').empty();
    var userInput = $(this).attr('data-name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&limit=10&api_key=SWve0WZXbWtP1dGMDbhm08zaiqcHvIrp";
    // console.log(this);
    console.log(userInput);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        for (i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='gif'>")
            var rating = $('<p>').text(results[i].rating);
            $(rating).attr('class', 'rating');

            var gifImageStill = $('<img>');
            $(gifImageStill).attr('data-animate', results[i].images.fixed_height.url);
            $(gifImageStill).attr('data-still', results[i].images.fixed_height_still.url);

            $(gifImageStill).attr('src', results[i].images.fixed_height_still.url);
            $(gifImageStill).attr('class', 'gif-image');
            $(gifImageStill).attr('data-state', 'still');
            $(gifImageStill).attr('value', i);
            $(gifDiv).append(rating);
            $(gifDiv).append('<br>');
            $(gifDiv).append(gifImageStill);
            $('.gif-results').append(gifDiv);
        }
    });
})

$(document).on('click',".gif-image", function(){
    var state = $(this).attr("data-state");
    var value = $(this).attr("value");
    // console.log('hello');
    if (state === 'still') {
        $(this).attr("src", $(this).data('animate'));
        $(this).attr('data-state', 'animate');
        console.log('if');
    } else {
        $(this).attr("src", $(this).data('still'));
        $(this).attr('data-state', 'still');
        console.log('else');
    }
})