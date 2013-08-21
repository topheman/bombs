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
   if( (!window.DeviceMotionEvent && !window.DeviceOrientationEvent) || (!("ontouchstart" in window) && !window.DeviceMotionEvent) || (!("ontouchstart" in window) && !window.DeviceOrientationEvent) || (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && !("ontouchstart" in window)) ){
        document.getElementById("go-play").addEventListener("click",function(e){
            e.preventDefault();
            console.log(this);
            if(confirm("Your browser doesn't support the accelerometer, if you are on desktop, you still can try with the device motion emulator.\n\nMake sure to allow the popup to be able to control the device motion emulator\n\nDo you still want to continue ?")){
                window.location = this.href+"?emulate";
            }
        });
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

activateGameLink();
activateSwipe();