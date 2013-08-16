/*!
 * Used on
 * http://squares.topheman.com/
 * http://bombs.topheman.com/
 *
 * Copyright 2012, Christophe Rosset (Topheman)
 * http://blog.topheman.com/
 * http://twitter.com/topheman
 * https://github.com/topheman/bombs
 *
 * HighScoresManager.js
 * Manages high scores, uses localStorage if enabled, fallback to memory if not
 * Can be extended in the futur to client/server AJAX, WebServices or whatever to share highScores between players
 */

/**
 * @param {Int} highScoresNumber (Number of highscores you wish to manage)
 * @param {Object} options
 *      .localStorageKeyName
 */

define(function(){
    
    var HighScoresManager;
    
    HighScoresManager = function (highScoresNumber,options){

        //private constantes
        var LOCAL_STORAGE_KEY_NAME = options ? (options.localStorageKeyName ? options.localStorageKeyName : 'tophemanHighScores' ) : 'tophemanHighScores';

        //private attributes
        var _highScores;
        var _highScoresNumber = highScoresNumber;

        //code executed in the constructor
        _highScores = _reloadHighScores();
        //end of constructor

        //public functions
        this.getHighScores = function(){
            return _highScores;
        };

        /**
         * Returns the id in the _highScores array of the score you just added if it goes into the top high scores
         * If not, returns null
         * @return {Int}|null
         */
        this.addHighScore = function(score, level){
            return _addHighScore(score, level);
        };

        //private functions

        /**
         * @example http://diveintohtml5.info/detect.html
         * @return {Boolean}
         */
        function _isLocalStorageEnabled(){
            try {
                return 'localStorage' in window && window['localStorage'] !== null;
            } catch(e){
                return false;
            }
        }

        /**
         * If localStorage enabled, tries to retrieve high scores (if no highScores in localStorage, returns empty array)
         * If no localStorage support, return empty array
         */
        function _reloadHighScores(){
            if(_isLocalStorageEnabled()){
                var scoresStored = window.localStorage.getItem(LOCAL_STORAGE_KEY_NAME) !== null ? JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY_NAME)) : null;
                if(scoresStored !== null)
                    return scoresStored;
                else
                    return [];
            }
            else{
                return [];
            }
        }

        /**
         * If localStorage enabled, saves highScores to local storage
         * If no localStorage support, does nothing ...
         */
        function _saveHighScores(){
            if(_isLocalStorageEnabled()){
                window.localStorage.setItem(LOCAL_STORAGE_KEY_NAME, JSON.stringify(_highScores));
            }
        }

        /**
         * @return {Array}
         */
        function _sortHighScores(){
            _highScores.sort(function(a,b){return b.score-a.score;});
        }

        /**
         * Returns true if the score is high enough to enter in the top high scores
         * @param {Int} score
         * @return {Boolean}
         */
        function _isScoreEnoughHigh(score){
            _sortHighScores();
            //the first entry is always ok
            if(_highScores.length === 0 || !_highScores[_highScoresNumber-1])
                return true;
            if(score > _highScores[_highScoresNumber-1].score)
                return true;
            else
                return false;
        }

        /**
         * @param {Int} score
         * @param {Int} level
         * @return {Int}|null
         */
        function _addHighScore(score,level){
//            console.info('_addHighScore',score,level);
            //if the score is high enough to enter in the top we push it to _highScores
            if(_isScoreEnoughHigh(score)){
//                console.info('if _isEnoughHigh');
                _highScores.push({score:score,level:level});
                _sortHighScores();
                //if there are too many highScores in the top, we remove the last one
                if(_highScores.length > _highScoresNumber)
                    _highScores.splice(_highScoresNumber,1);
                //now, we save the high score
                _saveHighScores();
                //find the new id of the score just added
                for(var i=0;i<_highScores.length;i++){
//                    console.info('i',i,_highScores[i]);
                    if(_highScores[i].score === score)
                        return i;
                }
            }
            else
                return null;
        }

    };
    
    return HighScoresManager;
    
});