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