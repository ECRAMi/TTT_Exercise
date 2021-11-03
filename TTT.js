<<<<<<< HEAD
$( document ).ready(function() {
    console.log('Doc Ready');
    let turn = 1, lastTurn = 'X', filled = 0;

    $('.Cell').ready(function() {
        $('.Cell').html(' ');
    });

    $('.Cell').click(function() {
        console.log(turn % 2);
        console.log(lastTurn)

        if(turn % 2 == 0){ 
            if($.trim($(this).html())=='') {
                $(this).html('X');
                $(this).addClass('X');
                $('#TurnNum').html('Player 1\'s Turn');
                turn++;
                filled++;
                lastTurn = 'X';
            }
        }else if(turn % 2 == 1){
            if($.trim($(this).html())=='') {
                $(this).html('O');
                $(this).addClass('O');
                $('#TurnNum').html('Player 2\'s Turn');
                turn++;
                filled++;
                lastTurn = 'O';
            }
        }
        setTimeout(function() {
            if(checkWinner(lastTurn) == true){
                $('.Cell').html(' ');
                $('.Cell').removeClass('X');
                $('.Cell').removeClass('O');

                if(lastTurn === 'O' && turn % 2 == 0){
                    $('#TurnNum').html('Player 2\'s Turn');
                    turn = 0;
                    $('#P1score').html(function(i, val) {
                        return val * 1 + 1;
                    });
                    alert('Player 1 wins');
                }else if(lastTurn === 'X' && turn % 2 == 1){
                    $('#TurnNum').html('Player 1\'s Turn');
                    turn = 1;
                    $('#P2score').html(function(i, val) {
                        return val * 1 + 1;
                    });
                    alert('Player 2 wins');
                }
                filled = 0;
            }else if(filled >= 9){
                $('.Cell').html(' ');
                $('.Cell').removeClass('X');
                $('.Cell').removeClass('O');
                filled = 0;
                alert('It\'s a tie!');
            }
        }, 100);
    });

});

function checkWinner(sign) {
    if($('.C1-1').hasClass(sign) && $('.C2-1').hasClass(sign) && $('.C3-1').hasClass(sign)) {
        return true;
    }else if($('.C1-2').hasClass(sign) && $('.C2-2').hasClass(sign) && $('.C3-2').hasClass(sign)) {
        return true;
    }else if($('.C1-3').hasClass(sign) && $('.C2-3').hasClass(sign) && $('.C3-3').hasClass(sign)) {
        return true;
    }else if($('.C1-1').hasClass(sign) && $('.C1-2').hasClass(sign) && $('.C1-3').hasClass(sign)) {
        return true;
    }else if($('.C2-1').hasClass(sign) && $('.C2-2').hasClass(sign) && $('.C2-3').hasClass(sign)) {
        return true;
    }else if($('.C3-1').hasClass(sign) && $('.C3-2').hasClass(sign) && $('.C3-3').hasClass(sign)) {
        return true;
    }else if($('.C1-1').hasClass(sign) && $('.C2-2').hasClass(sign) && $('.C3-3').hasClass(sign)) {
        return true;
    }else if($('.C1-3').hasClass(sign) && $('.C2-2').hasClass(sign) && $('.C3-1').hasClass(sign)) {
        return true;
    }else{
        return false;
    }
=======
$( document ).ready(function() {
    console.log('Doc Ready');
    let turn = 1, lastTurn = 'X', filled = 0, p1score = 0, p2score = 0;

    $('.Cell').ready(function() {
        $('.Cell').html(' ');
    });

    $('.Cell').click(function() {
        console.log(turn % 2);
        console.log(lastTurn)

        if(turn % 2 == 0){ 
            if($.trim($(this).html())=='') {
                $(this).html('X');
                $(this).addClass('X');
                $('#TurnNum').html('Player 1\'s Turn');
                $('#TurnNum').removeClass('X');
                $('#TurnNum').addClass('O');
                turn++;
                filled++;
                lastTurn = 'X';
            }
        }else if(turn % 2 == 1){
            if($.trim($(this).html())=='') {
                $(this).html('O');
                $(this).addClass('O');
                $('#TurnNum').html('Player 2\'s Turn');
                $('#TurnNum').removeClass('O');
                $('#TurnNum').addClass('X');
                turn++;
                filled++;
                lastTurn = 'O';
            }
        }
        setTimeout(function() {
            if(checkWinner(lastTurn) == true){
                $('.Cell').html(' ');
                $('.Cell').removeClass('X');
                $('.Cell').removeClass('O');

                if(lastTurn === 'O' && turn % 2 == 0){
                    $('#TurnNum').html('Player 2\'s Turn');
                    turn = 0;
                    $('#P1score').html(function(i, val) {
                        return val * 1 + 1;
                    });
                    p1score++;
                    alert('Player 1 wins');
                }else if(lastTurn === 'X' && turn % 2 == 1){
                    $('#TurnNum').html('Player 1\'s Turn');
                    turn = 1;
                    $('#P2score').html(function(i, val) {
                        return val * 1 + 1;
                    });
                    p2score++;
                    alert('Player 2 wins');
                }
                filled = 0;
                if(p1score > p2score){
                    $('#status').html('Player 1 is leading');
                    $('#status').removeClass('X');
                    $('#status').addClass('O');
                }else if(p1score < p2score){
                    $('#status').html('Player 2 is leading');
                    $('#status').removeClass('O');
                    $('#status').addClass('X')
                }else if(p1score == p2score){
                    $('#status').html('Players are tied');
                    $('#status').removeClass('O');
                    $('#status').removeClass('X');
                }
            }else if(filled >= 9){
                $('.Cell').html(' ');
                $('.Cell').removeClass('X');
                $('.Cell').removeClass('O');
                filled = 0;
                alert('It\'s a tie!');
            }
        }, 100);
    });

});

function checkWinner(sign) {
    if($('.C1-1').hasClass(sign) && $('.C2-1').hasClass(sign) && $('.C3-1').hasClass(sign)) {
        return true;
    }else if($('.C1-2').hasClass(sign) && $('.C2-2').hasClass(sign) && $('.C3-2').hasClass(sign)) {
        return true;
    }else if($('.C1-3').hasClass(sign) && $('.C2-3').hasClass(sign) && $('.C3-3').hasClass(sign)) {
        return true;
    }else if($('.C1-1').hasClass(sign) && $('.C1-2').hasClass(sign) && $('.C1-3').hasClass(sign)) {
        return true;
    }else if($('.C2-1').hasClass(sign) && $('.C2-2').hasClass(sign) && $('.C2-3').hasClass(sign)) {
        return true;
    }else if($('.C3-1').hasClass(sign) && $('.C3-2').hasClass(sign) && $('.C3-3').hasClass(sign)) {
        return true;
    }else if($('.C1-1').hasClass(sign) && $('.C2-2').hasClass(sign) && $('.C3-3').hasClass(sign)) {
        return true;
    }else if($('.C1-3').hasClass(sign) && $('.C2-2').hasClass(sign) && $('.C3-1').hasClass(sign)) {
        return true;
    }else{
        return false;
    }
>>>>>>> 22eba1a9da6d16f0a29cf8bb1405563b086a1d17
}