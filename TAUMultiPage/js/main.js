	var contentText = document.querySelector('#content-text');
    var btn2 = document.querySelector('#left');
    var btn3 = document.querySelector('#col');

    var canvas=document.getElementById("draw")
	var x=canvas.getContext("2d");
    x.font = 'italic 25pt Calibri';
    x.fillStyle= 'white';
	x.fillText("wqqweqwewqeqeeeq", 1, 40);
	x.font = 'italic 20pt Calibri';
    x.fillStyle= 'blue';
	x.fillText("asdfsafasasfasfsaf", 100, 130); 
	x.font = 'italic 40pt Calibri';
    x.fillStyle= 'red';
	x.fillText("xzczxccxzczxczx", 60, 150);
	
    btn2.addEventListener("click", function() {
    	if (contentText.innerHTML !== "") {contentText.innerHTML = "";} else {contentText.innerHTML = screen.height + "X" + screen.width;}
    	 });
    btn3.addEventListener("click", function() {
    	$("#two").css({"color": "red"});
    	});
( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";

            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
} () );