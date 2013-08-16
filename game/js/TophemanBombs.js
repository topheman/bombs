/*!
 * TophemanBombs
 * http://bombs.topheman.com/
 *
 * Copyright 2012, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 *
 * TophemanBombs.js
 * Game Wrapper
 * 
 * @dependency Ball.js
 * @dependency GameManager.js
 * @dependency Stage.js
 * @dependency HighScoreManager.js
 * @dependency Vector2D.js
 * @dependency jquery-1.7.1.min.js (any version of jquery)
 * @dependency requestAnimFrame.js
 * @dependency viewporter.js
 * 
 * @sounds (free of rights) /resources/108615__juskiddink__billiard-balls-single-hit-dry.wav
 */

var TophemanBombs = (function(){

    var game;

    return {

        init : function(){
            game = new GameManager();
            game.init();

        },
        
        isPhonegapModeOn : function(){
            return (typeof PhoneGap !== "undefined");
        },
        
        pause : function(){
            game.pause();
        },
        
        resume : function(){
            game.resume();
        }

    }

})()

//start
jQuery(TophemanBombs.isPhonegapModeOn() ? 'deviceready' : 'ready',function(){
    TophemanBombs.init();
})

//stop
if(TophemanBombs.isPhonegapModeOn()){
    document.addEventListener("pause", TophemanBombs.pause, false);
    document.addEventListener("resume", TophemanBombs.resume, false);
}