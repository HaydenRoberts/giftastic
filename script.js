var sports = ['Soccer', 'Hockey', 'Basketball', 'Football', 'Baseball'];

for(i=0; i<sports.length; i++) {
    var button = $('<button/>').text(sports[i]);
    $(button).attr('class', 'sports-btn');
    $('.buttons').append(button);
}