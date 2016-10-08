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