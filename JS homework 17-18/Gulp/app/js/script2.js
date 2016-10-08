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