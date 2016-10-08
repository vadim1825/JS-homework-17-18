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