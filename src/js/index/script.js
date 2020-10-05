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

const dialog = makeDialog();
let isDeviceOrientationActivated = false;
const isMobileDevice = /(iPad|iPhone|Nexus|Mobile|Tablet)/i.test(navigator.userAgent);
const linkToGame = location.href.replace(/\/$/,"") + "/game.html";

function activateGameLink(){
    function accelerometerOk() {
        isDeviceOrientationActivated = true;
    }
    function accelerometerKo() {
        const infos = ['<strong>No accelerometer</strong> was detected on your device.'];
        if (isMobileDevice) {
            infos.push(`Please allow the access to the accelerometer.`);
        }
        else {
            infos.push("You don't seem to be on a mobile device, snap the QRCode with your mobile to play.");
            infos.push(`<a href="./game.html" style="text-align:center; display: block;"><img src="${document.querySelector("#qrcode img").src}"/></a>`);
        }
        infos.push(`<button onclick="document.querySelector('dialog').close()">OK</button>`);
        dialog.openModal(`<p>${infos.join('</p><p>')}</p>`)
    }
    document.getElementById("go-play").addEventListener('click', function(e) {
        e.preventDefault();
        // iOS requests permission
        if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
            .then(response => {
                if (response == 'granted') {
                    accelerometerOk()
                    window.location.href = "./game.html"
                }
                else {
                    accelerometerKo()
                }
            })
        }
        else {
            sensorsChecker.checkDeviceorientation(accelerometerOk, accelerometerKo);
        }
    })
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

function makeQRCode(link, el = document.getElementById("qrcode")) {
    new QRCode(document.getElementById("qrcode"), {
        text: link,
        width: 155,
        height: 155
    });
}

activateGameLink();
activateSwipe();
makeQRCode(linkToGame);
