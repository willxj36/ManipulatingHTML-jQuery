$(document).ready(function() {

    //Objective 1
    $('body').prepend('<input type="button" value="Objective 1" id="obj1btn"></input>');
    $('#obj1btn').click(function() {
        alert('You clicked it in this lab too!');
    });
    
    //Objective 2
    $('#obj2btn').click(function() {
        alert($('#obj2text').val());
    });
    
    //Objective 3
    $('#obj3').hover(function() {
        $(this).css('background', 'red');
    }, function() {
        $(this).css('background', 'white');
    });

    //Objective 4
    $('#obj4').click(function() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        $(this).css('color', 'rgb(' + r + ', ' + g + ', ' + b + ')');
    });

    //Objective 5
    $('#obj5btn').click(function() {
        $('#obj5div').append($('<span>Will Seese</span>'));
    });

    //Objective 6
    let friends = ['Amber', 'Ethan', 'Kendra', 'Adam', 'Rudy', 'Moe', 'Rory', 'AJ', 'Justin', 'Bryan'];
    let counter = 0;
    $('#obj6btn').click(function() {
        if(counter < friends.length) {
            $('#obj6ul').append($('<li>' + friends[counter] + '</li>'));
            counter++;
        };
    });

});