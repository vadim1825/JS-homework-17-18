document.addEventListener('DOMContentLoaded', function() {

	var firstP = document.querySelector('.top_p');

    var firstPSlideDown = function() {

        var pos = -60;

        var action = setInterval(frame, 5);

        function frame() {

            if (pos == 30) {

                clearInterval(action);
            } else {

                pos++;

                firstP.style.top = pos + 'px';
            };
        };
    };


    firstPSlideDown();



});
document.addEventListener('DOMContentLoaded', function() {

	var secondP = document.querySelector('.left_p');

    var secondPSlideRight = function() {

        var pos = -20;

        var action = setInterval(frame, 10);

        function frame() {

            if (pos == 50) {

                clearInterval(action);
            } else {

                pos++;

                secondP.style.left = pos + '%';
            };
        };
    };


    setTimeout(secondPSlideRight, 1000);



});
document.addEventListener('DOMContentLoaded', function() {

	var thirdP = document.querySelector('.right_p');

    var thirdPSlideLeft = function() {

        var pos = -15;

        var action = setInterval(frame, 10);

        function frame() {

            if (pos == 50) {

                clearInterval(action);
            } else {

                pos++;

                thirdP.style.right = pos + '%';
            };
        };
    };


    setTimeout(thirdPSlideLeft, 2000);



});
document.addEventListener('DOMContentLoaded', function() {

    var fourthP = document.querySelector('.bottom_p');

    var fourthPSlideRight = function() {

        var pos = -25;

        var action = setInterval(frame, 10);

        function frame() {

            if (pos == 50) {

                clearInterval(action);
            } else {

                pos++;

                fourthP.style.left = pos + '%';
            };
        };
    };


    setTimeout(fourthPSlideRight, 3000);



});
document.addEventListener('DOMContentLoaded', function() {

	var refreshButton = document.querySelector('.button');

    var buttonAppear = function() {

        var pos = 0;

        var action = setInterval(frame, 20);

        function frame() {

            if (pos == 100) {

                clearInterval(action);

            } else {

                pos += 0.01;

                refreshButton.style.opacity = pos;
            };
        };
    };


    setTimeout(buttonAppear, 2000);


    var again = function() {

        location.reload();
    };


    refreshButton.addEventListener('click',function() {

        again();
    });



});