/*!
 * TophemanBombs
 * http://bombs.topheman.com/
 *
 * Copyright 2012/2013, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * https://github.com/topheman/bombs
 *
 * @dependency swipe.js - Brad Birdsall, Prime Copyright 2011, Licensed GPL & MIT
 */
function activateGameLink(){
    var success = function(){};
    var failure = function(){
        document.getElementById("go-play").addEventListener("click",function(e){
            e.preventDefault();
            if(confirm("Your browser doesn't support the accelerometer, if you are on desktop, you still can try with the device motion emulator.\n\nMake sure to allow the popup to be able to control the device motion emulator\n\nDo you still want to continue ?")){
                window.location = this.href+"?emulate";
            }
        });
    };
    if( (!("ontouchstart" in window)) ){
        sensorsChecker.checkDeviceorientation(success,failure,{userAgentCheck: /(iPad|iPhone|Nexus|Mobile|Tablet)/i});
    }
}

function activateSwipe(){
    if(document.getElementById("slider")){
        //http://swipejs.com/
        slider = new Swipe(document.getElementById('slider'), {
            callback: function(e, pos) {
                var bullets = document.getElementById('position').getElementsByTagName('em');
                var i = bullets.length;
                while (i--) {
                  bullets[i].className = ' ';
                }
                bullets[pos].className = 'on';
            }
        });

        document.getElementById('prev').addEventListener("click",function(){slider.prev();});
        document.getElementById('next').addEventListener("click",function(){slider.next();});
    }
}

function makeQRCode(link) {
    new QRCode(document.getElementById("qrcode"), {
        text: link,
        width: 155,
        height: 155
    });
}

activateGameLink();
activateSwipe();
makeQRCode(location.href.replace(/\/$/,"") + "/game.html");
