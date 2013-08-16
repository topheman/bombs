/*!
 * TophemanBombs
 * http://bombs.topheman.com/
 *
 * Copyright 2012/2013, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * https://github.com/topheman/bombs
 * 
 * @dependency require.js - https://github.com/jrburke/requirejs/blob/master/LICENSE
 * @dependency Ball.js Copyright (C) 2012 Christophe Rosset <tophe@topheman.com> - https://github.com/topheman/Ball.js/blob/master/LICENSE
 * @dependency Vector2D.js http://jamieblog.org
 * @dependency zepto.min.js (any version of jquery) http://zeptojs.com/ (MIT LICENSE)
 * @dependency requestAnimFrame.js - http://notes.jetienne.com/2011/05/18/cancelRequestAnimFrame-for-paul-irish-requestAnimFrame.html
 * @dependency DeviceMotion and DeviceOrientation polyfill by Remy Sharp / leftlogic.com MIT http://rem.mit-license.org
 * 
 * @sounds (free of rights) https://github.com/topheman/bombs/blob/master/src/assets/audio/LICENSE
 */


define(['game/GameManager'],function(GameManager){

    var game;

    game = {

        init : function(){
            game = new GameManager();
            game.init();
        },
        
        pause : function(){
            game.pause();
        },
        
        resume : function(){
            game.resume();
        }

    };
    
    return game;
    
});