/*!
 * Stage
 *
 * Copyright 2012/2013, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * https://github.com/topheman/bombs
 * 
 * The canvas will automatically adapt width/height of the screen
 * 
 * Adds an event that displays your div#orientationlock when orientation changes to tell your mobile user to lock their device
 * 
 * Once it did all that, will call your callback
 *
 * Stage.js
 * 
 */

define(['utils/browserDetect'],function(browserDetect){
    
    var Stage;
    
    Stage = {
        
        prepareStage : function(callback){

            var canvas = document.getElementById('myCanvas');
            var reScrolling = false;
            var resizing = false;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            if(callback){
                callback.call({},canvas);
            }

            // reload if change from landscape to portrait
            $(window).bind('resize', function() {
                if(resizing && $(window).width()<$(window).height()){
                    // i know, setTimeout is bad, but firefox doesn't trigger reload without setTimeout ...
                    setTimeout(function(){window.location.reload();},0);
                }
                resizing = true;
            });

            //adressbar locking
            //scrollTop with firefox mobile is buggy
            if(browserDetect.isMobileDevice() && !browserDetect.isFirefox() && !browserDetect.isAndroidTablet() && !browserDetect.isIPad()){
                $(window).bind('scroll',function(){
                    if(reScrolling === false){
                        setTimeout(function(){window.scrollTo(0,1);reScrolling = false;}, 2000);
                        reScrolling = true;
                    }
                });
            }
            
        }
        
    };
    
    return Stage;
    
});