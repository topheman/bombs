/*!
 * Stage
 *
 * Copyright 2012, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * 
 * Inject a <canvas> tag in a dom element of the id "viewporter"
 * The canvas will automatically adapt width/height of the screen
 * 
 * Adds an event that displays your div#orientationlock when orientation changes to tell your mobile user to lock their device
 * 
 * Once it did all that, will call your callback
 *
 * Stage.js
 * 
 * @dependency viewporter.js
 */

var Stage = (function(){
    
    return {
        prepareStage: prepareStage
    };
    
    /**
     * @param {Function} callback
     */
    function prepareStage(callback){
        
        var canvas = document.createElement('canvas');
        var reScrolling = false;
    
        //phonegap encapsulation mode doesn't need to preven't viewport orientation change
        if(typeof PhoneGap !== "undefined"){
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            document.getElementById('viewporter').appendChild(canvas);
            if(callback)
                callback.call({},canvas);
        }
        //not webapp encapsulated mode
        else{
            $(window).bind(viewporter.ACTIVE ? 'viewportready' : 'load', function() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                document.getElementById('viewporter').appendChild(canvas);
                if(callback)
                    callback.call({},canvas);
            });

            // orientation locking + reload if not in correct orientation
            jQuery(window).bind('viewportchange', function() {
                if(jQuery('#orientationlock').is(':visible')){
                    window.location.href = window.location.href;
                }
            });
            // orientation locking
            jQuery(window).bind('viewportready viewportchange', function() {
                jQuery('#orientationlock').toggle(viewporter.isLandscape());
            });
            
            //adressbar locking
            jQuery(window).bind('scroll',function(){
                console.info('scroll');
                if(reScrolling == false){
                    setTimeout(function(){window.scrollTo(0,1);reScrolling = false;}, 2000);
                    reScrolling = true;
                }
            })
            
        }
        
    }
    
})()