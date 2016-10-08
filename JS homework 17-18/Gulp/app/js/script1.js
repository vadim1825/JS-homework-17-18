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