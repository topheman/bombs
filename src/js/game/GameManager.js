/*!
 * TophemanBombs
 * http://bombs.topheman.com/
 *
 * Copyright 2012/2013, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * https://github.com/topheman/bombs
 *
 * GameManager.js
 * Bootstrap of TophemanBombs game that manages
 * - player inputs (accelerometer)
 * - loops
 * - collisions
 * - screen refresh
 * - sounds
 * - ...
 */

define (['game/Stage','vendor/Ball','game/HighScoresManager','jQuery','utils/browserDetect', 'utils/sensorsChecker'],function(Stage,undefined,HighScoresManager,undefined,browserDetect,sensorsChecker){
    
    var GameManager;

    GameManager = function(){
        
        //phonegap (previous version of the game)
        this.appLaunched    = false; //to know if the app has been lauched (is already constructed)
        this.appPaused      = false;

        //game const vars
        var GLOBAL_COLOR            = '#900000';
        var WELCOME_SCREEN_DURATION = 4000;
        var HIGH_SCORES_TOP_NUMBER  = 10;
        var HIGH_SCORES_MANAGER_KEY = 'tophemanBallScores';

        //default vars for level difficulty
        var LEVEL_START                         = 0;
        var DEFAULT_TIME_REMAINING              = 30*1000;//ms
        var DEFAULT_BOMB_BONUS_PER_RING         = 1;
        var DEFAULT_ENEMY_NUMBER_TO_KILL        = 2;
        var ENEMY_NUMBER_INCREASE_LEVEL_RATIO   = 1;
        var MAX_ENEMIES_ON_SCREEN_DEFAULT       = 2;
        var PLAYER_DEFAULT_LIVE_NUMBER          = 3;
        var DEFAULT_SCORE_MALUS_PER_COLLISION   = 1;
        var DEFAULT_SCORE_BONUS_PER_BOMB        = 4;
        var DEFAULT_SCORE_BONUS_PER_ENEMY       = 2;
        
        var canvasRatioForEntities = 1; //will be changed according to the size of the canvas

        //every sizes such as radiuses are defined according to an iphone screen, they are changed by canvasRatioForEntities

        var PLAYER_RADIUS           = 15;
        var PLAYER_MASS             = 1.3;
        var PLAYER_COLOR            = '#0000FF';//blue
        var PLAYER_GRAVITY          = 1;
        var PLAYER_ELASTICITY       = 0.98;
        var PLAYER_FRICTION         = 0.94;
        var PLAYER_LIFETIME         = Infinity;
        var PLAYER_BOUNCING_COLOR   = '#000060';
        var PLAYER_BOUNCING_RATE    = 20;
        var PLAYER_GLOWING_COLOR    = '#9922DD';
        var PLAYER_GLOWING_RATE     = 40;
        var PLAYER_EXPLODING_RADIUS = 80;
        var PLAYER_EXPLODING_RATE   = 40;
        var PLAYER_OPTIONS          = {aging:true,bouncingColor:PLAYER_BOUNCING_COLOR,bouncingRate:PLAYER_BOUNCING_RATE,glowingColor:PLAYER_GLOWING_COLOR,glowingRate:PLAYER_GLOWING_RATE,explodingRadius:PLAYER_EXPLODING_RADIUS,explodingRate:PLAYER_EXPLODING_RATE,explodingAlpha:true};

        var ENEMY_RADIUS            = 10;
        var ENEMY_MASS              = 0.9;
        var ENEMY_COLOR             = '#FF0000';//red
        var ENEMY_GRAVITY           = PLAYER_GRAVITY;//0.6;
        var ENEMY_ELASTICITY        = PLAYER_ELASTICITY;
        var ENEMY_FRICTION          = 0.999;//0.999999
        var ENEMY_LIFETIME          = Infinity;
        var ENEMY_BOUNCING_COLOR    = '#690000';
        var ENEMY_BOUNCING_RATE     = 20;
        var ENEMY_GLOWING_COLOR     = '#9922DD';
        var ENEMY_GLOWING_RATE      = 40;
        var ENEMY_EXPLODING_COLOR   = 'FFFFFF';
        var ENEMY_EXPLODING_RATE    = 20;
        var ENEMY_EXPLODING_RADIUS  = 80;
        var ENEMY_OPTIONS           = {aging:true,bouncingColor:ENEMY_BOUNCING_COLOR,bouncingRate:ENEMY_BOUNCING_RATE,glowingColor:ENEMY_GLOWING_COLOR,glowingRate:ENEMY_GLOWING_RATE,explodingColor:ENEMY_EXPLODING_COLOR,explodingRadius:ENEMY_EXPLODING_RADIUS,explodingRate:ENEMY_EXPLODING_RATE};

        var RING_RADIUS             = 10;
        var RING_MASS               = 0.9;
        var RING_COLOR              = '#3ADF00';
        var RING_GRAVITY            = PLAYER_GRAVITY;
        var RING_ELASTICITY         = PLAYER_ELASTICITY;
        var RING_FRICTION           = 0.99;
        var RING_LIFETIME           = 200;
        var RING_GLOWING_COLOR      = '#21610B';
        var RING_GLOWING_RATE       = 40;
        var RING_OPTIONS            = {aging:true,glowingColor:RING_GLOWING_COLOR,glowingRate:RING_GLOWING_RATE};

        var BOMB_RADIUS             = 10;
        var BOMB_MASS               = 1;
        var BOMB_COLOR              = '#000000';//red
        var BOMB_GRAVITY            = PLAYER_GRAVITY;//0.6;
        var BOMB_ELASTICITY         = PLAYER_ELASTICITY;
        var BOMB_FRICTION           = 1;
        var BOMB_LIFETIME           = Infinity;
        var BOMB_BLINKING_COLOR     = '#B404AE';
        var BOMB_BLINKING_RATE      = 15;
        var BOMB_EXPLODING_COLOR    = '#CFFFFF';
        var BOMB_EXPLODING_RATE     = 30;
        var BOMB_EXPLODING_RADIUS   = 100;
        var BOMB_OPTIONS            = {blinkingColor:BOMB_BLINKING_COLOR,blinkingRate:BOMB_BLINKING_RATE,explodingColor:BOMB_EXPLODING_COLOR,explodingRadius:BOMB_EXPLODING_RADIUS,explodingRate:BOMB_EXPLODING_RATE};
        var BOMB_ARMING_TIME        = 0.5;//number of seconds between the bomb is dropped and it's armed
        var BOMB_EXPLODING_TIME     = 3;//number of seconds between the bomb is armed and it explodes

        var TOUCH_RADIUS            = 30;
        var TOUCH_MASS              = 1;
        var TOUCH_COLOR             = '#FF8000';
        var TOUCH_GRAVITY           = PLAYER_GRAVITY;
        var TOUCH_ELASTICITY        = PLAYER_ELASTICITY;
        var TOUCH_FRICTION          = 1;
        var TOUCH_LIFETIME          = Infinity;
        var TOUCH_EXPLODING_RADIUS  = 45;
        var TOUCH_EXPLODING_COLOR   = '#FFC284';
        var TOUCH_EXPLODING_RATE    = 15;
        var TOUCH_OPTIONS           = {explodingColor:TOUCH_EXPLODING_COLOR,explodingRate:TOUCH_EXPLODING_RATE,explodingRadius:TOUCH_EXPLODING_RADIUS};

        //game vars
        var width                   = null;
        var height                  = null;
        var canvas                  = null;
        var ctx                     = null;
        var level                   = 0;
        var score                   = 0;
        var highScoresManager       = null;
        var iterator                = 0;
        var looping                 = false;
        var inputX                  = 0;
        var inputY                  = 0;
        var pauseAllowed            = false;
        var landScapeModeOn         = browserDetect.isMobileDevice() ? true : false;
        var timeRemaining           = null;
        var currentTimeStamp,lastTimeStamp;
        var flashMessages           = [];
        var tmpHighScoreRank        = null;

        //game/player vars
        var playerBombsAvailable    = null;
        var playerFireCoordinates   = false;
        var playerLives             = PLAYER_DEFAULT_LIVE_NUMBER;

        //game/level vars/attributes
        var player     = null;
        var enemies    = [];
        var rings      = [];
        var bombs      = [];
        var touchs     = [];

        var maxEnemiesOnScreen              = null;
        var numberOfEnemiesLastingToKill    = null;
        var numberOfEnemiesLastingToAdd     = null;
        var numberOfEnemiesOnThisLevel      = null;
        var bombsBonusPerRing               = null;//number of bombs aquired per rings
        var scoreMalusPerCollision          = null;//number of points substract
        var scoreBonusPerBomb               = null;
        var scoreBonusPerEnemy              = null;

        //device
        var DEVICEMOTION_INPUT_RATIO        = 0.2;
        var html5DeviceMotionSupport        = false;
        var html5DeviceOrientationSupport   = false;

        //sounds (initialized in initSounds)
        var ACTIVATE_SOUND_EFFECTS      = true;
        var SOUND_BALL_COLLISION_FILE   = "./assets/audio/bounce-ball.wav";
        var SOUND_BORDER_COLLISION_FILE = "./assets/audio/bounce-rail.wav";
        var SOUND_EXPLOSION_FILE        = "./assets/audio/explosion.wav";
        var html5SoundSupport           = false;
        var sounds                      = {};

        //screens
        var SCREEN_LEVEL_DURATION       = 2500;
        var SCREEN_FLASH_RATE           = 150;
        var screenOn                    = null;//which screen is on if not playing (intro, highscores, game over ...) used in the WelcomeScreenListeners
        var welcomeScreensTimer         = null;//used for setTimeouts (to be able to clear the timer if canceled)
        var flagTimeRunningOut          = false;
        var flagBombsRunningOut         = false;
        var images                      = {};

        this.init = function(){

            //scrollTop with firefox mobile is buggy
            if(browserDetect.isMobileDevice() && !browserDetect.isFirefox() && !browserDetect.isAndroidTablet() && !browserDetect.isIPad()){
                window.scrollTo(0, /Android/.test(navigator.userAgent) ? 1 : 0);
            }

            var self = this;
            self.initDialog();
            Stage.prepareStage(async function(stageCanvas){
                let accelerometerOK = false
                //initialize GameManager canvas var from this closure
                canvas = stageCanvas;
                //initialize width/height vars from this closure
                width   = canvas.width;
                height  = canvas.height;
                if (canvas.getContext) {
                    self.setCanvasRatioForEntities(canvas);
                    ctx = canvas.getContext("2d");
                    highScoresManager = new HighScoresManager(HIGH_SCORES_TOP_NUMBER,{localStorageKeyName:HIGH_SCORES_MANAGER_KEY});
                    self.initOrientationCss();
                    self.initSounds();
                    accelerometerOK = await self.initMotionListeners();
//                    self.initKeyboardListeners();
                    self.initWelcomeScreens('welcome');
                }
                else{
                    alert("Sorry, your browser doesn't support canvas.\nTopheman Bombs only works with recent browsers.");
                }
                if (!accelerometerOK) {
                    self.dialog.openModal(`
                        <p><strong>No accelerometer</strong> was detected on your device.</p>
                        <p>Please activate <strong>"Motion and Orientation"</strong> feature in\nSettings > Safari or Settings > Chrome</p>
                        <p style="text-align:center;"><button onclick="document.querySelector('dialog').close()">OK</button></p>
                    `);
                }
            });
            this.appLaunched = true;
        };
        
        this.setCanvasRatioForEntities = function(canvas){
            
            canvasRatioForEntities = canvas.height/320;
            PLAYER_RADIUS = parseInt(PLAYER_RADIUS*canvasRatioForEntities);
            PLAYER_EXPLODING_RADIUS = parseInt(PLAYER_EXPLODING_RADIUS*canvasRatioForEntities);
            PLAYER_OPTIONS.explodingRadius = parseInt(PLAYER_OPTIONS.explodingRadius*canvasRatioForEntities);
            ENEMY_RADIUS = parseInt(ENEMY_RADIUS*canvasRatioForEntities);
            ENEMY_EXPLODING_RADIUS = parseInt(ENEMY_EXPLODING_RADIUS*canvasRatioForEntities);
            ENEMY_OPTIONS.explodingRadius = parseInt(ENEMY_OPTIONS.explodingRadius*canvasRatioForEntities);
            BOMB_RADIUS = parseInt(BOMB_RADIUS*canvasRatioForEntities);
            BOMB_EXPLODING_RADIUS = parseInt(BOMB_EXPLODING_RADIUS*canvasRatioForEntities);
            BOMB_OPTIONS.explodingRadius = parseInt(BOMB_OPTIONS.explodingRadius*canvasRatioForEntities);
            TOUCH_RADIUS = parseInt(TOUCH_RADIUS*canvasRatioForEntities);
            TOUCH_EXPLODING_RADIUS = parseInt(TOUCH_EXPLODING_RADIUS*canvasRatioForEntities);
            TOUCH_OPTIONS.explodingRadius = parseInt(TOUCH_OPTIONS.explodingRadius*canvasRatioForEntities);
            RING_RADIUS = RING_RADIUS*canvasRatioForEntities;
            
        };

        /**
         * Expose pause function to sleep the app
         */
        this.pause = function(){
            if(this.appLaunched === true && looping === true){
                this.toggleLoop();
            }
            //fallback if it was on a screen display
            this.stopLoop();
            this.appPaused = true;
        };

        /**
         * Expose resume function to wake up the app
         */
        this.resume = function(){
            this.appPaused = false;
        };

        this.initDialog = function() {
            this.dialog = makeDialog();
        }

        this.initOrientationCss = function(){
            if(browserDetect.isMobileDevice()){
                $('#orientationlock').bind('touchmove',function(e){e.preventDefault();});
            }
        };

        this.initSounds = function(){
            var a = document.createElement('audio');
            html5SoundSupport       = !!(a.canPlayType && a.canPlayType('audio/wav; codecs="1"').replace(/no/, '')) && ACTIVATE_SOUND_EFFECTS;
            if(html5SoundSupport === true){
                sounds['soundBallCollision'] = new Audio(SOUND_BALL_COLLISION_FILE);
                sounds['soundBorderCollision'] = new Audio(SOUND_BORDER_COLLISION_FILE);
                sounds['soundExplosion'] = new Audio(SOUND_EXPLOSION_FILE);
            }
        };

        this.initMotionListeners = function(){

            return new Promise((res, rej) => {
                sensorsChecker.checkDeviceorientation(function() {
                    return res(true)
                }, function() {
                    return res(false)
                })
            }).then(accelerometerOK => {
                if(window.DeviceOrientationEvent){
                    html5DeviceOrientationSupport = accelerometerOK;
                    var deviceOrientationCallback;
                    // not a mobile or a firefox tablet (a chrome tablet)
                    if(window.orientation === 0){
                    // alert('debug infos : Android device or window.DeviceMotionEvent missing\n\nwindow.orientation : '+window.orientation);
                        deviceOrientationCallback = function(e){
                            inputX = e.gamma/20;
                            inputY = e.beta/20;
                        };
                    }
                    // not a firefox tablet (a mobile)
                    else{
                    // alert('debug infos : Android device or window.DeviceMotionEvent missing\n\nwindow.orientation : '+window.orientation);
                        deviceOrientationCallback = function(e){
                            inputX = e.beta/20;
                            inputY = -e.gamma/20;
                        };
                    }
                    window.addEventListener('deviceorientation',deviceOrientationCallback,false);
                    return accelerometerOK;
                }
                else if (window.DeviceMotionEvent) {
                    html5DeviceMotionSupport = accelerometerOK;
                    //mac or desktop with emulator
                    // alert('debug infos : iOS or desktop emulator');
                    window.addEventListener('devicemotion', function(e){
                        inputX = e.accelerationIncludingGravity.x*DEVICEMOTION_INPUT_RATIO;
                        inputY = -e.accelerationIncludingGravity.y*DEVICEMOTION_INPUT_RATIO;
                    },false);
                    return accelerometerOK;
                }
            })
        };
        
//        this.initKeyboardListeners = function(){
//            
//            $(window).keydown(function(e){
//                console.info(e);
//            });
//            
//        };

        /**
         * Creates getCoordinatesFromEvent function that will manage click/touchstart/touchend events and return an object coordinates
         */
        var getCoordinatesFromEvent;
        
        if(browserDetect.isMobileDevice()){
            getCoordinatesFromEvent = function(e){
                return {
                    x:e.touches[0].pageX,
                    y:e.touches[0].pageY
                };
            };
        }
        else{
            getCoordinatesFromEvent = function(e){
                return {
                    x:e.pageX,
                    y:e.pageY
                };
            };
        }

        /**
        * @param {Object} coordinates {x:{Int},y:{Int}}
        * @param {Object} topLeftDot {x:{Int},y:{Int}}
        * @param {Object} bottomRightDot {x:{Int},y:{Int}}
        * @return {Boolean}
        */
        function clickIsInside(coordinates,topLeftDot,bottomRightDot){
            if(coordinates.x > topLeftDot.x && coordinates.x < bottomRightDot.x && coordinates.y > topLeftDot.y && coordinates.y < bottomRightDot.y) {
                return true;
            }
            else {
                return false;
            }
        }

        /**
         * Adds the mouse / touch listeners for the game part
         */
        this.addGameScreenListeners = function(){
            screenOn = null;
            var self = this;
            var eventTargeted = browserDetect.isMobileDevice() ? 'touchstart touchend' : 'click';
            $('canvas').bind(eventTargeted,function(e){
                //on pauseScreen click restart button
                if(looping === false && hasClickedRestartButton(getCoordinatesFromEvent(e))){
    //                setTimeout(function(){self.initWelcomeScreens('home');},300);//setTimeout to avoid multitap
                    self.initWelcomeScreens('home');
                }
                //on pauseScreen click any other place -> resume
                else if(looping === false){
                    self.toggleLoop();
                }
                //on loop click pause button -> pause the loop
                else if(looping === true && hasClickedPauseButton(getCoordinatesFromEvent(e))){
                    self.toggleLoop();
                }
                //player fires
                else{
                    self.playerFires(getCoordinatesFromEvent(e));
                }
            });

            //prevents moving the viewport in mobile browser mode
            if(browserDetect.isMobileDevice()){
                $('canvas').bind('touchmove',function(e){e.preventDefault();});
            }

            /**
             * @param {Object} coordinates {x:{Int},y:{Int}}
             * @return {Boolean}
             */
            function hasClickedRestartButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:width-60,y:0},{x:width,y:60}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-60,y:height-60},{x:width,y:height}) ) );
            }

            /**
             * @param {Object} coordinates {x:{Int},y:{Int}}
             * @return {Boolean}
             */
            function hasClickedPauseButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:0},{x:23,y:30}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-23,y:0},{x:width,y:30}) ) );
            }

        };

        /**
         * Removes the mouse / touch listeners added previously for the game part
         */
        this.removeGameScreenListeners = function(){
            var eventTargeted = browserDetect.isMobileDevice() ? 'touchstart touchend' : 'click';
            $('canvas').unbind(eventTargeted);

            if(browserDetect.isMobileDevice()){
                $('canvas').unbind('touchmove',function(e){e.preventDefault();});
            }
        };

        this.addWelcomeScreenListeners = function(){
            var self = this;
            var eventTargeted = browserDetect.isMobileDevice() ? 'click' : 'click';
            $('canvas').bind(eventTargeted,function(e){
                switch(screenOn){
                    case 'welcome':
                        clearTimeout(welcomeScreensTimer);//cancels the automatic display
                        self.initWelcomeScreens('home');
                        break;
                    case 'home':
                        if(hasClickedPlayButton({x:e.pageX,y:e.pageY})){
                            self.initGame();
                            self.nextLevel();
                        }
                        if(hasClickedHighScoresButton({x:e.pageX,y:e.pageY})){
                            self.initWelcomeScreens('highScores');
                        }
                        if(hasClickedInstructionsButton({x:e.pageX,y:e.pageY})){
                            self.initWelcomeScreens('instructions1');
                        }
                        if(hasClickedCreditsButton({x:e.pageX,y:e.pageY})){
                            self.initWelcomeScreens('credits');
                        }
                        break;
                    case 'gameOver':
                        self.initWelcomeScreens('highScores');
                        break;
                    case 'highScores':
                        self.initWelcomeScreens('home');
                        break;
                    case 'credits':
                        if(hasClickedCreditsBackButton({x:e.pageX,y:e.pageY})){
                            self.initWelcomeScreens('home');
                        }
                        if(hasClickedBallTophemanComButton({x:e.pageX,y:e.pageY})){
                            window.open('http://bombs.topheman.com', '_blank');
                        }
                        if(hasClickedTwitterButton({x:e.pageX,y:e.pageY})){
                            window.open('http://twitter.com/topheman', '_blank');
                        }
                        if(hasClickedBlogButton({x:e.pageX,y:e.pageY})){
                            window.open('http://blog.topheman.com', '_blank');
                        }
                        break;
                    case 'instructions1':
                        self.initWelcomeScreens('instructions2');
                        break;
                    case 'instructions2':
                        self.initWelcomeScreens('instructions3');
                        break;
                    case 'instructions3':
                        self.initWelcomeScreens('instructions4');
                        break;
                    case 'instructions4':
                        self.initWelcomeScreens('instructions5');
                        break;
                    case 'instructions5':
                        self.initWelcomeScreens('home');
                        break;
                }
            });

            //prevents moving the viewport in mobile browser mode
            if(browserDetect.isMobileDevice())
                $('canvas').bind('touchmove',function(e){e.preventDefault();});

            function hasClickedPlayButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:60},{x:width,y:height/2-100+50}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)+100-50,y:0},{x:width-60,y:height}) ) );
            }

            function hasClickedHighScoresButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2-10-40},{x:width,y:height/2-10+40}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)+10-40,y:0},{x:width-(width/2)+10+40,y:height}) ) );
            }

            function hasClickedInstructionsButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2+70-30},{x:width,y:height/2+70+30}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)-70-30,y:0},{x:width-(width/2)-70+30,y:height}) ) );
            }

            function hasClickedCreditsButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2+130-20},{x:width,y:height}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:0,y:0},{x:width-(width/2)-130+20,y:height}) ) );
            }

            function hasClickedCreditsBackButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:0},{x:width,y:height/2-16}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)+16,y:0},{x:width,y:height}) ) );
            }

            function hasClickedBallTophemanComButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2-16},{x:width,y:height/2+16}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)-16,y:0},{x:width-(width/2)+16,y:height}) ) );
            }

            function hasClickedTwitterButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2+90},{x:width,y:height/2+90+28}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)-90-28,y:0},{x:width-(width/2)-90,y:height}) ) );
            }

            function hasClickedBlogButton(coordinates){
                return ( (isLandScapeModeOn() === false && clickIsInside(coordinates,{x:0,y:height/2+120},{x:width,y:height/2+120+28}) ) || (isLandScapeModeOn() === true && clickIsInside(coordinates,{x:width-(width/2)-120-28,y:0},{x:width-(width/2)-120,y:height}) ) );
            }
        };

        this.removeWelcomeScreenListeners = function(){
            var eventTargeted = browserDetect.isMobileDevice() ? 'click' : 'click';
            $('canvas').unbind(eventTargeted);

            if(browserDetect.isMobileDevice()){
                $('canvas').unbind('touchmove',function(e){e.preventDefault();});
            }      
        };

        /**
         * @param {String} screen Which screen init | default : home
         */
        this.initWelcomeScreens = function(screen){
            screen = screen || 'home';
            //remove any previous screen listeners if we were not on a welcomeScreen
            if(screenOn === null){
                this.removeGameScreenListeners();
                this.addWelcomeScreenListeners();
            }

            //launch the selected welcome screen
            welcomeScreensDrawingFunction[screen]();

            //then, once the welcome screen passed, the "play" button should initGame and launch the first level as this!
    //        this.initGame();
    //        this.nextLevel();
        };

        //init game
        this.initGame = function(){
            //init some Global game
            level           = LEVEL_START;
            score           = 0;
            iterator        = 0;
            playerLives     = PLAYER_DEFAULT_LIVE_NUMBER;
            playerBombsAvailable  = 0;
            pauseAllowed    = false;
            looping         = false;
            player          = null;
            enemies.length  = 0;
            rings.length    = 0;
            bombs.length    = 0;
            touchs.length   = 0;
            tmpHighScoreRank = null;//reinit previous highScoreRank
            if(screenOn !== null){
                this.removeWelcomeScreenListeners();
            }
            //this.removeGameScreenListeners();
            this.addGameScreenListeners();
        };

        /**
         * Prepares the next level and lauch the loop
         * 
         * @param {Boolean} sameLevel If flag to true - will stay on the same level (to use when restarting a level after loosing a life)
         */
        this.nextLevel = function(sameLevel){
            var self = this;
            if(sameLevel !== true)
                level++;
            this.prepareLevel(level,sameLevel);
            playInfosMessage(drawLevelScreen,SCREEN_LEVEL_DURATION,function(){
                pauseAllowed = true;
                self.startLoop();
                $(canvas).removeClass('pause');
                $(canvas).addClass('loop');
            });
        };

        this.prepareLevel = function(level,sameLevel){
            this.preparePlayer(level);
            this.prepareEnemies(level);
            this.prepareRings(level);
            this.prepareBombs(level);
            flashMessages.length = 0;
            iterator             = 0;
            //init floating level vars according to difficulty
            scoreMalusPerCollision      = DEFAULT_SCORE_MALUS_PER_COLLISION;
            scoreBonusPerBomb           = DEFAULT_SCORE_BONUS_PER_BOMB;
            scoreBonusPerEnemy          = DEFAULT_SCORE_BONUS_PER_ENEMY;
            maxEnemiesOnScreen          = getMaxEnemiesOnScreen();
            bombsBonusPerRing           = DEFAULT_BOMB_BONUS_PER_RING;
            numberOfEnemiesOnThisLevel  = getNumberOfEnemiesOnThisLevel();
            playerBombsAvailable        = getBombsAvailable(numberOfEnemiesOnThisLevel);
            timeRemaining               = getTimeRemaining(numberOfEnemiesOnThisLevel,maxEnemiesOnScreen);
            flagTimeRunningOut          = false;
            flagBombsRunningOut         = false;
            //if we restart the level after loosing it, don't reset the enemies counter
            if(sameLevel !== true)
                numberOfEnemiesLastingToKill = numberOfEnemiesOnThisLevel;
            numberOfEnemiesLastingToAdd = numberOfEnemiesLastingToKill;

            function getNumberOfEnemiesOnThisLevel(){
                return DEFAULT_ENEMY_NUMBER_TO_KILL + (level-1)*ENEMY_NUMBER_INCREASE_LEVEL_RATIO;
            }

            function getMaxEnemiesOnScreen(){
                return Math.ceil(MAX_ENEMIES_ON_SCREEN_DEFAULT+level/5);
            }

            function getTimeRemaining(numberOfEnemiesOnThisLevel,maxEnemiesOnScreen){
                return DEFAULT_TIME_REMAINING*Math.pow(numberOfEnemiesOnThisLevel/maxEnemiesOnScreen,0.7);
            }

            function getBombsAvailable(numberOfEnemiesOnThisLevel){
                return level === 1 ? numberOfEnemiesOnThisLevel*2 : Math.ceil(Math.pow(numberOfEnemiesOnThisLevel*2,0.6));
            }
        };

        this.preparePlayer = function(level){
            player = new Ball(200,200,PLAYER_RADIUS,PLAYER_MASS,PLAYER_GRAVITY,PLAYER_ELASTICITY,PLAYER_FRICTION,PLAYER_COLOR,PLAYER_LIFETIME,PLAYER_OPTIONS);
            playerFireCoordinates = false;
        };

        this.prepareEnemies = function(level){
            enemies.length = 0;
        };

        this.prepareRings = function(level){
            rings.length = 0;
        };

        this.prepareBombs = function(level){
            bombs.length      = 0;
            touchs.length     = 0;
        };

        /**
         * Adds an enemy if there are still enemies to kill and yet, not too much enemies on the screen
         */
        this.addEnemy = function(flag,level){
            var enemy;
            //numberOfEnemiesOnThisLevel
            if((numberOfEnemiesLastingToAdd > 0 && numberOfEnemiesLastingToKill >= numberOfEnemiesLastingToAdd && enemies.length < maxEnemiesOnScreen) || flag === true){
                enemy = new Ball(200,200,ENEMY_RADIUS,ENEMY_MASS,ENEMY_GRAVITY,ENEMY_ELASTICITY,ENEMY_FRICTION,ENEMY_COLOR,ENEMY_LIFETIME,ENEMY_OPTIONS);
                enemy.setRandomPositionAndSpeedInBounds(width, height, level);
                enemies.push(enemy);
                numberOfEnemiesLastingToAdd--;
            }
        };

        this.addRing = function(enemy){
            var ring;
            ring = new Ball(enemy.getX(),enemy.getY(),RING_RADIUS,RING_MASS,RING_GRAVITY,RING_ELASTICITY,RING_FRICTION,RING_COLOR,RING_LIFETIME,RING_OPTIONS);
            ring.setVelocityX(Math.random()).setVelocityX(Math.random());
            ring.glow();
            rings.push(ring);
        };

        this.addBomb = function(player){
            //add bomb
            var bomb;
            bomb = new Ball(player.getX(), player.getY(), BOMB_RADIUS, BOMB_MASS, BOMB_GRAVITY, BOMB_ELASTICITY, BOMB_FRICTION, BOMB_COLOR, BOMB_LIFETIME, BOMB_OPTIONS);
            bomb.armingTime = (new Date()).getTime() + BOMB_ARMING_TIME*1000;
            bomb.explodingTime = (new Date()).getTime() + (BOMB_ARMING_TIME+BOMB_EXPLODING_TIME)*1000;
            bomb.armed = false;
            bombs.push(bomb);
            playerBombsAvailable--;
            //reset playerFireCoordinates
            playerFireCoordinates = false;

            //add touch at the same place of the bomb
            this.addTouch(player);
        };

        this.addTouch = function(coordinates){
            var touch;
            touch = new Ball(coordinates.x,coordinates.y,TOUCH_RADIUS,TOUCH_MASS,TOUCH_GRAVITY,TOUCH_ELASTICITY,TOUCH_FRICTION,TOUCH_COLOR,TOUCH_LIFETIME,TOUCH_OPTIONS);
            touch.explode();
            touchs.push(touch);
            //reset playerFireCoordinates
            playerFireCoordinates = false;
        };

        this.gameOver = function(){
            tmpHighScoreRank = highScoresManager.addHighScore(score, level);
            this.initWelcomeScreens('gameOver');
        };

        /**
         * If level timeouts, display timeout screen and reload the level (if player has lives left), if not game over
         */
        this.manageTimeOut = function(){
            var self = this;
            if(timeRemaining <= 0){
                timeRemaining = 0;//adjust timeRemaining
                this.stopLoop();
                pauseAllowed = false;
                if(level > 1)
                    playerLives--;
                playInfosMessage(drawTimeOutScreen,SCREEN_LEVEL_DURATION,function(){
                    self.managePlayerDies();
                });
            }
        };

        /**
         * If no more bombs after the last bomb has exploded and there is no enemy exploding, reload the level (if player has lives left), if not game over
         */
        this.manageBombsOut = function(){
            var self = this;
            var i,enemyStillExploding = false;
            if(playerBombsAvailable === 0 && bombs.length === 0 && rings.length === 0){
                for(i=0;i<enemies.length;i++){
                    if(enemies[i].isExploding() === true)
                        enemyStillExploding = true;
                }
                if(enemyStillExploding === false){
                    this.stopLoop();
                    pauseAllowed = false;
                    if(level > 1)
                        playerLives--;
                    playInfosMessage(drawBombsOutScreen,SCREEN_LEVEL_DURATION,function(){
                        self.managePlayerDies();
                    });
                }
            }
        };

        /**
         * If level timeouts, display timeout screen and reload the level (if player has lives left), if not game over
         */
        this.managePlayerExploded = function(){
            var self = this;
            if(player.isDead()){
                this.stopLoop();
                pauseAllowed = false;
                if(level > 1)
                    playerLives--;
                playInfosMessage(drawPlayerExplodedScreen,SCREEN_LEVEL_DURATION,function(){
                    self.managePlayerDies();
                });
            }
        };

        /**
         * If the player has killed all enemies, goes to the next level
         */
        this.manageLevelFinished = function(){
            var self = this;
            if(numberOfEnemiesLastingToKill === 0){
                this.stopLoop();
                pauseAllowed = false;
                var bombsBonus = playerBombsAvailable*scoreBonusPerBomb;
                score = score + bombsBonus;
                playInfosMessage(function(){drawBombsBonusScreen(bombsBonus);},SCREEN_LEVEL_DURATION,function(){
                    self.nextLevel();
                });
            }
        };

        this.managePlayerDies = function(){
            if(playerLives === 0){
                this.gameOver();
            }
            else{
                //restart same level
                this.nextLevel(true);
            }
        };

        /**
         * @param {Function} drawingFunction
         * @param {Int} duration
         * 
         * Adds a drawing callback - drawinbg function 1rst parameter must be line height
         */
        function addFlashMessage(drawingFunction,duration){
            var flashMessageInfos = {};
            flashMessageInfos.display = duration || SCREEN_FLASH_RATE;
            flashMessageInfos.callback = drawingFunction;
            flashMessages.push(flashMessageInfos);
        }

        function playInfosMessage(drawingFunction,duration,callback){
            drawingFunction();
            setTimeout(callback,duration);
        }

        this.playerFires = function(coordinates){
            playerFireCoordinates = coordinates;
        };


        this.startLoop = function(){
            //prevent double loops in parallele
            if(looping === false){
                looping = true;
                if(this.appPaused === true){//prevent starting the app in background after quit on level screen
                    clearAllContext();
                    this.toggleLoop();
                }
                else
                    this.loop();
            }

        };

        this.stopLoop = function(){
            //prevent double stop loop
            if(looping === true){
                looping = false;
                currentTimeStamp = null;
            }

        };

        this.toggleLoop = function(){
            if(pauseAllowed === false)
                return;
            if(looping === true){
                this.stopLoop();
                $(canvas).removeClass('loop');
                $(canvas).addClass('pause');
                drawPauseScreen();
            }
            else{
                $(canvas).removeClass('pause');
                $(canvas).addClass('loop');
                this.startLoop();
            }
        };

        /**
         * Create the loop function called in the requestAnimationFrame only once to optimize garbage collection
         */
        this.loopCallbackFunction = (function(self){
            return function(){
                self.loop();
            };
        })(this);

        this.loop = function(){
            //manages start/stop/pause/resume loop
            var self = this;
            var i,j;//array iterators
            if(looping === true)
                window.requestAnimationFrame(this.loopCallbackFunction);
            else
                return;//if we're not looping, we don't call the next loop AND we don't execute this loop

            iterator++;
            lastTimeStamp = currentTimeStamp || (new Date()).getTime();//timeStamp of last loop
            currentTimeStamp = (new Date()).getTime();//timeStamp of current loop
            timeRemaining = timeRemaining - (currentTimeStamp - lastTimeStamp);//update timeRemaining

            //if timeRemaining == 10 let the user know
            if(flagTimeRunningOut === false && (timeRemaining/1000).toFixed(0) === 10){
                addFlashMessage(drawTimeRunningOutMessage);
                flagTimeRunningOut = true;
            }

            //@todo put in a separate method ?
            if(flagBombsRunningOut === false && playerBombsAvailable === 1){
                addFlashMessage(drawBombsRunningOutMessage);
                flagBombsRunningOut = true;
            }
            else if(playerBombsAvailable > 1 && flagBombsRunningOut === true){
                flagBombsRunningOut = false;
            }

            //help messages on level 1
            if(level === 1){
                if(iterator === 1)
                    addFlashMessage(drawTiltPhoneNotificationMessage,SCREEN_FLASH_RATE*2);
                if(iterator === 1+SCREEN_FLASH_RATE*2.5)
                    addFlashMessage(drawTapScreenNotificationMessage,SCREEN_FLASH_RATE*2);
                if(iterator === 1+SCREEN_FLASH_RATE*5)
                    addFlashMessage(drawGrabDotsNotificationMessage,SCREEN_FLASH_RATE*2);
            }

            //check state of bombs / arm them / trigger their explosion
            if(bombs.length > 0)
                for(i=0;i<bombs.length;i++){
                    if(bombs[i].armed === false && currentTimeStamp > bombs[i].armingTime){
                        armBomb(bombs[i]);
                    }
                    else if(bombs[i].armed === true && bombs[i].isExploding() === false && currentTimeStamp > bombs[i].explodingTime){
                        explodeBomb(bombs[i]);
                    }
                }

            //remove dead touchs
            if(touchs.length > 0)
                for(i=touchs.length-1;i>=0;i--){
                    if(touchs[i].isDead() === true)
                        touchs.splice(i,1);
                }

            //remove dead bombs
            if(bombs.length > 0)
                for(i=bombs.length-1;i>=0;i--){
                    if(bombs[i].isDead() === true)
                        bombs.splice(i,1);
                }

            //remove dead enemies
            if(enemies.length > 0)
                for(i=enemies.length-1;i>=0;i--){
                    if(enemies[i].isDead() === true){
                        this.addRing(enemies[i]);//a ring appears when an enemy dies
                        numberOfEnemiesLastingToKill--;//update the number of ennemies still to kill
                        enemies.splice(i,1);
                    }
                }

            //remove dead rings
            if(rings.length > 0)
                for(i=rings.length-1;i>=0;i--){
                    if(rings[i].isDead() === true)
                        rings.splice(i,1);
                }

            //player adds bombs/touchs
            if(playerBombsAvailable > 0 && playerFireCoordinates !== false)
                this.addBomb(player);
            else if(playerFireCoordinates !== false)
                this.addTouch(playerFireCoordinates);

            //add enemies
            this.addEnemy();

            //move touchs (in order to explode them)
            for(i=0;i<touchs.length;i++){
                touchs[i].move();
            }

            //move bombs (in order to explode them)
            for(i=0;i<bombs.length;i++){
                bombs[i].move();
            }

            //move player
            if(player.isExploding() === false)
                player.move(inputX,inputY);
            else
                player.move();

            //move enemies
            for(i=0;i<enemies.length;i++){
                enemies[i].move();
            }

            //move rings randomly
            for(i=0;i<rings.length;i++){
                if(iterator%60 === 0)
                    rings[i].move((Math.random()-0.5)*5,(Math.random()-0.5)*5);
                else
                    rings[i].move();
            }

            //check for collisions ->

            //player vs borders
            if(player.isExploding() === false){
                player.manageStageBorderCollision(width, height,playSoundBorderCollision);
            }

            //player vs enemies
            for(i=0;i<enemies.length;i++){
                if(player.isExploding() === false && player.checkBallCollision(enemies[i]) === true){
                    if(enemies[i].isExploding() === true){
                        explodePlayer(player);
                        break;
                    }
                    else{
    //                    if(player.isBouncing() == false){
    //                        addFlashMessage(drawEnemyCollisionMessage);
    //                        score = score - scoreMalusPerCollision;
    //                        if(score < 0) score = 0;
    //                    }
                        player.resolveBallCollision(enemies[i]);
                        playSoundBallCollision();
                    }
                }
            }

            //enemies vs borders
            for(i=0;i<enemies.length;i++){
                if(enemies[i].isExploding() === false)
                    enemies[i].manageStageBorderCollision(width, height,playSoundBorderCollision);
            }

            //rings vs borders
            for(i=0;i<rings.length;i++){
                rings[i].manageStageBorderCollision(width, height,playSoundBorderCollision);
            }

            //enemies vs enemies
            if(enemies.length > 1){
                for(i=0;i<enemies.length;i++){
                    for(j=i+1;j<enemies.length;j++){
                        if(enemies[i].isExploding() === false && enemies[j].isExploding() === false && enemies[i].checkBallCollision(enemies[j]) === true){
                            enemies[i].resolveBallCollision(enemies[j],playSoundBallCollision);
                        }
                    }
                }
            }

            //player vs rings
            if(rings.length > 0){
                for(i=rings.length-1;i>=0;i--){
                    if(player.checkBallCollision(rings[i])){
                        //remove the ring
                        rings.splice(i,1);
                        playerBombsAvailable = playerBombsAvailable + bombsBonusPerRing;
                        addFlashMessage(drawRingCollisionMessage);
                    }
                }
            }

            //player vs bombs
            if(bombs.length > 0 && player.isExploding() === false){
                for(i=0;i<bombs.length;i++){
                    if(player.isExploding() === false && bombs[i].isExploding() === true && player.checkBallCollision(bombs[i])){
                        explodePlayer(player);
                        break;
                    }
                }
            }

            //bombs vs enemies
            if(bombs.length > 0){
                for(i=0;i<bombs.length;i++){
                    for(j=0;j<enemies.length;j++){
                        if(bombs[i].armed === true && bombs[i].isDead() === false && bombs[i].checkBallCollision(enemies[j])){
                            if(bombs[i].isExploding() === false)
                                explodeBomb(bombs[i]);
                            if(enemies[j].isExploding() === false){
                                explodeEnemy(enemies[j]);
                                score = score + scoreBonusPerEnemy;
                            }
                        }
                    }
                }
            }

            //draw

            //clear canvas
            clearAllContext();

            //draw touchs
            for(i=0;i<touchs.length;i++){
                touchs[i].draw(ctx);
            }

            //draw rings
            for(i=0;i<rings.length;i++){
                rings[i].draw(ctx);
            }

            //draw player
            player.draw(ctx);

            //draw bombs
            for(i=0;i<bombs.length;i++){
                bombs[i].draw(ctx);
            }

            //draw enemies
            for(i=0;i<enemies.length;i++){
                enemies[i].draw(ctx);
            }

            //staticDraws
            drawPauseButton();
            drawPlayerInfosTop();
            drawPlayerInfosBottom();

            //drawing flash messages if exist
            drawFlashMessages();

            //manage the duration of the flashMessages
            if(flashMessages.length > 0)
                for(i=0;i<flashMessages.length;i++){
                    flashMessages[i].display--;
                }

            //remove the expired flashMessages
            if(flashMessages.length > 0)
                for(i=flashMessages.length-1;i>=0;i--){
                    if(flashMessages[i].display < 0)
                        flashMessages.splice(i,1);
                }

            //tests
            this.manageLevelFinished();
            this.manageTimeOut();
            this.manageBombsOut();
            this.managePlayerExploded();

        };

        /**
         * @param {Ball} bomb
         */
        function armBomb(bomb){
            bomb.blink();
            bomb.armed = true;
        }

        /**
         * @param {Ball} bomb
         */
        function explodeBomb(bomb){
            bomb.explode();
        }

        /**
         * @param {Ball} enemy
         */
        function explodeEnemy(enemy){
            enemy.setVelocityX(0).setVelocityY(0).explode();
            playSoundExplosion();
        }

        /**
         * @param {Ball} player
         */
        function explodePlayer(player){
            player.setVelocityX(0).setVelocityY(0).explode();
            playSoundExplosion();
        }

        function playSound(soundId,volume,time){
            if(html5SoundSupport === true){
                try{
                    sounds[soundId].currentTime   = time || 0;
                    sounds[soundId].volume        = volume || 1;
                    sounds[soundId].play();
                }
                catch(e){
    //                console.info('html5 sound.play error ',e);
                }
            }
        }

        function playSoundBallCollision(){
            playSound('soundBallCollision');
        }

        function playSoundBorderCollision(){
            playSound('soundBorderCollision',0.1);
        }

        function playSoundExplosion(){
            playSound('soundExplosion');
        }

        function clearAllContext(){
            ctx.clearRect ( 0 , 0 , width , height );
        }

        function drawTopRightCorner(character){
            ctx.font        = 'bold italic 60px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            if(isLandScapeModeOn()) {
                flipCanvas();
                ctx.fillText(character,height-60,50);//↶
                flipBackCanvas();
            }
            else{
                ctx.fillText(character,width-60,50);//↶
            }
        }

        function drawPauseScreen(){
            var textMessageWidth = 253;
            ctx.font        = 'bold italic 60px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            drawCenteredText('PAUSED', 60, textMessageWidth);
            drawCenteredText('\u2192', 60, 50,0,50);//→
            drawTopRightCorner('\u21b6');
        }

        function drawLevelScreen(){
            var textMessageWidth = 253;
            clearAllContext();
            drawCenteredText('Level : '+level, 60, textMessageWidth);
            drawCenteredText(numberOfEnemiesLastingToKill+' enemies / '+(timeRemaining/1000).toFixed(0)+' seconds / '+playerBombsAvailable+' bombs', 20, 350,0,80);
        }

        function drawPlayerInfosTop(){
            ctx.font        = 'bold italic 15px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            var textMessageHeight = 15, hearts = '';
            var text = 'Bombs : '+playerBombsAvailable+' - Time : '+((timeRemaining/100)/10).toFixed(1)+'s - Enemies : '+(numberOfEnemiesOnThisLevel-numberOfEnemiesLastingToKill)+'/'+numberOfEnemiesOnThisLevel;
            for(var i=0; i<playerLives;i++)
                hearts = hearts+' \u2665';
            text = text + (hearts !== '' ? ' - '+hearts : '');
            if(isLandScapeModeOn()){
                flipCanvas();
                ctx.fillText(text,30,5+textMessageHeight);
                flipBackCanvas();
            }
            else{
                ctx.fillText(text,30,5+textMessageHeight);
            }
        }

        function drawPlayerInfosBottom(){
            ctx.font        = 'bold italic 15px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            var textMessageHeight = 15;
            if(isLandScapeModeOn()){
                flipCanvas();
                ctx.fillText('Level : '+level+' - Score : '+score,5,width-textMessageHeight/2);
                flipBackCanvas();
            }
            else{
                ctx.fillText('Level : '+level+' - Score : '+score,5,height-textMessageHeight/2);
            }
        }

        function drawPauseButton(){
            ctx.font        = 'bold italic 15px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            var textMessageHeight = 15;
            if(isLandScapeModeOn()){
                flipCanvas();
                ctx.fillText('||',5,5+textMessageHeight);
                flipBackCanvas();
            }
            else{
                ctx.fillText('||',5,5+textMessageHeight);
            }
        }

        /**
         * Filps canvas orientation
         * 
         * After, use drawCenteredText
         */
        function flipCanvas(){
            ctx.save();
            ctx.translate(width,0);
            ctx.rotate(90 * Math.PI / 180);
        }

        /**
         * Restores the canvas orientation
         */
        function flipBackCanvas(){
            ctx.restore();
        }

        /**
         * Draws text accounting the orientation of canvas
         * 
         * @param {String} text
         * @param {Int} fontSize
         * @param {Int} textBlockWidth
         * @param {Int} dx
         * @param {Int} dy
         * @param {String} color
         */
        function drawCenteredText(text,fontSize,textBlockWidth,dx,dy,color){
            dx = dx || 0;
            dy = dy || 0;
            color = color || GLOBAL_COLOR;
            if(isLandScapeModeOn()) flipCanvas();
            ctx.font        = 'bold italic '+fontSize+'px Arial,sans-serif';
            ctx.fillStyle 	= color;
            ctx.fillText(text,((isLandScapeModeOn() ? height : width)- textBlockWidth)/2 + dx,((isLandScapeModeOn() ? width : height) + fontSize)/2 + dy);
            if(isLandScapeModeOn()) flipBackCanvas();
        }

        function drawTiltPhoneNotificationMessage(dy){
            drawCenteredText('TILT YOUR PHONE',28,250,0,dy-16,PLAYER_COLOR);
            drawCenteredText('TO MANAGE THE PLAYER',28,350,0,dy+16,PLAYER_COLOR);
        }

        function drawTapScreenNotificationMessage(dy){
            var message = 'TAP SCREEN TO DROP BOMBS';
            drawCenteredText(message,24,370,0,dy,BOMB_COLOR);
        }

        function drawGrabDotsNotificationMessage(dy){
            drawCenteredText('GRAB THE GREEN DOTS',28,350,0,dy-16,RING_COLOR);
            drawCenteredText('TO GET MORE BOMBS',28,320,0,dy+16,RING_COLOR);
        }

        function drawEnemyCollisionMessage(dy){
            drawCenteredText('-'+scoreMalusPerCollision+'pt'+(scoreMalusPerCollision > 1 ? 's' : ''),50,60,0,dy);
        }

        function drawRingCollisionMessage(dy){
            drawCenteredText('+'+bombsBonusPerRing+' bomb'+(bombsBonusPerRing > 1 ? 's' : ''),50,230,0,dy);
        }

        function drawTimeRunningOutMessage(dy){
            drawCenteredText('10 seconds left !',35,230,0,dy);
        }

        function drawBombsRunningOutMessage(dy){
            drawCenteredText('Only 1 bomb left !',35,300,0,dy);
        }

        function drawTimeOutScreen(){
            clearAllContext();
            drawCenteredText('Time OUT ...',50,260);
            drawPlayerInfosTop();
            drawPlayerInfosBottom();
        }

        function drawBombsOutScreen(){
            clearAllContext();
            drawCenteredText('No more bombs left ...',30,320);
            drawPlayerInfosTop();
            drawPlayerInfosBottom();
        }

        function drawPlayerExplodedScreen(){
            clearAllContext();
            drawCenteredText('Be careful with the bombs !',20,270);
            drawPlayerInfosTop();
            drawPlayerInfosBottom();
        }

        function drawBombsBonusScreen(bombsBonus){
            clearAllContext();
            drawCenteredText('Bombs bonus : '+bombsBonus+'pts',30,290);
            drawPlayerInfosTop();
            drawPlayerInfosBottom();
        }

        function drawFlashMessages(){
            var lineHeight = 70;
            if(flashMessages.length > 0){
                ctx.save();
                for(var i=0;i<flashMessages.length;i++){
                    ctx.globalAlpha = flashMessages[i].display/SCREEN_FLASH_RATE;
                    flashMessages[i].callback.call({},lineHeight*i - flashMessages.length*lineHeight/2 + lineHeight/2);
                }
                ctx.restore();
            }
        }

        function drawInstructionPageNumber(pageNumber,pageTotal){
            ctx.font        = 'bold italic 20px Arial,sans-serif';
            ctx.fillStyle 	= GLOBAL_COLOR;
            if(isLandScapeModeOn()){
                flipCanvas();
                ctx.fillText(pageNumber+'/'+pageTotal,5,5+20);
                flipBackCanvas();
            }
            else{
                ctx.fillText(pageNumber+'/'+pageTotal,5,5+20);
            }
        }

        function preloadImages(){
            images['bandeau'] = new Image();
            if(isWideScreen()){
                images['bandeau'].src = './assets/img/topheman-bombs-bandeau.png';
            }
            else{
                images['bandeau'].src = './assets/img/topheman-bombs-bandeau-min.png';
            }
            //add the onload function after
        }

        var welcomeScreensDrawingFunction = {
            'welcome': function(){
                preloadImages();
                screenOn = 'welcome';
                clearAllContext();
                if(isLandScapeModeOn()){
                    images['bandeau'].onload = function(){
                        flipCanvas();
                        ctx.drawImage(images['bandeau'],height/2-parseFloat(images['bandeau'].naturalWidth)/2,width/2-parseFloat(images['bandeau'].naturalHeight)/2);
                        flipBackCanvas();
                    };
                }
                else{
                    images['bandeau'].onload = function(){
                        ctx.drawImage(images['bandeau'],width/2-parseFloat(images['bandeau'].naturalWidth)/2,height/2-parseFloat(images['bandeau'].naturalHeight)/2);
                    };
                }
                welcomeScreensTimer = setTimeout(function(){welcomeScreensDrawingFunction['home']();},WELCOME_SCREEN_DURATION);
            },
            'home': function(){
                //if already on home, don't draw page (caused by clicking vs setTimeout)
                if(screenOn === 'home')
                    return;
                screenOn = 'home';
                clearAllContext();
                drawCenteredText('Play',60,120,0,-100);
                drawCenteredText('Your HighScores',35,280,0,-10);
                drawCenteredText('Instructions',30,170,0,70);
                drawCenteredText('Credits',20,70,0,130);
            },
            'gameOver': function(){
                screenOn = 'gameOver';
                clearAllContext();
                drawCenteredText('Game Over',50,300,0,-60);
                drawCenteredText('Level '+level,50,250,0,0);
                drawCenteredText('Score '+score,50,250,0,60);
            },
            'highScores': function(){
                var highScores = highScoresManager.getHighScores();
                var fontSize = 20, lineHeight = 25, top = -160+40/2, color = GLOBAL_COLOR;
                screenOn = 'highScores';
                clearAllContext();
                drawCenteredText('Your HighScores',35,320,0,top);
                if(highScores.length > 0){
                    for(var i=0;i<highScores.length;i++){
                        if(i === tmpHighScoreRank)
                            color = 'black';
                        else
                            color = GLOBAL_COLOR;
                        drawCenteredText(i+1+' - Level '+highScores[i].level+' / '+highScores[i].score+' pts',fontSize,230,0,top+20+(i+1)*lineHeight,color);
                    }
                }
                drawTopRightCorner('\u21b6');
            },
            'instructions1': function(){
                screenOn = 'instructions1';
                clearAllContext();
                drawInstructionPageNumber(1, 5);
                drawCenteredText('Tilt your phone to lead the blue dot',20,330,0,0,PLAYER_COLOR);
                drawTopRightCorner('\u21b7');
            },
            'instructions2': function(){
                screenOn = 'instructions2';
                clearAllContext();
                drawInstructionPageNumber(2, 5);
                drawCenteredText('At level start, you will be told :',20,330,0,-50,GLOBAL_COLOR);
                drawCenteredText('- How many enemies you\'ll have',20,330,0,-25,ENEMY_COLOR);
                drawCenteredText('   to kill to finish the level',20,330,0,0,ENEMY_COLOR);
                drawCenteredText('- How many bombs you\'ll have',20,330,0,25,BOMB_COLOR);
                drawCenteredText('   to kill them',20,330,0,50,BOMB_COLOR);
                drawCenteredText('- How much time you\'ll have',20,330,0,75,GLOBAL_COLOR);
                drawTopRightCorner('\u21b7');
            },
            'instructions3': function(){
                screenOn = 'instructions3';
                clearAllContext();
                drawInstructionPageNumber(3, 5);
                drawCenteredText('Tap the screen to drop bombs',22,330,0,0,BOMB_COLOR);
                drawTopRightCorner('\u21b7');
            },
            'instructions4': function(){
                screenOn = 'instructions4';
                clearAllContext();
                drawInstructionPageNumber(4, 5);
                drawCenteredText('Grab the green dots to get more bombs',20,370,0,0,RING_COLOR);
                drawTopRightCorner('\u21b7');
            },
            'instructions5': function(){
                screenOn = 'instructions5';
                clearAllContext();
                drawInstructionPageNumber(5, 5);
                drawCenteredText('You\'ll get a bonus for each bomb',20,330,0,0,RING_COLOR);
                drawCenteredText('you didn\'t use',20,330,0,25,RING_COLOR);
                drawTopRightCorner('\u21b7');
            },
            'credits': function(){
                screenOn = 'credits';
                clearAllContext();
                if(isLandScapeModeOn()){
                    flipCanvas();
                    ctx.drawImage(images['bandeau'],height/2-parseFloat(images['bandeau'].naturalWidth)/2,width/2-parseFloat(images['bandeau'].naturalHeight)-16);
                    flipBackCanvas();
                }
                else{
                    ctx.drawImage(images['bandeau'],width/2-parseFloat(images['bandeau'].naturalWidth)/2,height/2-parseFloat(images['bandeau'].naturalHeight)-16);
                }
                drawCenteredText('bombs.topheman.com',16,190,0,0,'blue');
                drawCenteredText('Made by',16,110,0,30,GLOBAL_COLOR);
                drawCenteredText('Christophe Rosset (Topheman)',20,330,0,60,GLOBAL_COLOR);
                drawCenteredText('twitter.com/topheman',16,210,0,100,'blue');
                drawCenteredText('blog.topheman.com',16,190,0,130,'blue');
                drawTopRightCorner('\u21b6');
            }
        };

        /**
         * @return {Boolean}
         */
        function isLandScapeModeOn(){
    //        return true;//@todo retirer
            return landScapeModeOn;
        }

        /**
         * @return {Boolean}
         */
        function isWideScreen(){
    //        return true;//todo retirer
            return width > 500;
        }

    };

    return GameManager;
    
});