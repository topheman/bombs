function isIOs(){
    return navigator.userAgent.match(/Android/i) != null;
}

function isAndroid(){
    return (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) != null;
}

function hideAdressBar(){
   setTimeout(function(){ window.scrollTo(0,1);}, 0);
}

function activateGameLink(){
    if(isIOs()){
        jQuery('#intro .browser').addClass('active');
    }
    else if(isAndroid()){
        jQuery('#intro .android').addClass('active');
    }
}

jQuery(function(){
    hideAdressBar();
    activateGameLink();
})