define({
    
    isMobileDevice : function(){
        return (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    },

    isIPhone : function(){
        return ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1));
    },

    isIPad : function(){
        return (navigator.platform.indexOf("iPad") !== -1);
    },

    isAndroidMobile : function(){
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("android") > -1 && ua.indexOf("mobile") > -1;
    },

    isAndroidTablet : function(){
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("android") > -1 && ua.indexOf("mobile") === -1;
    },

    isChrome : function(){
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("chrome") > -1;
    },

    isFirefox : function(){
        var ua = navigator.userAgent.toLowerCase();
        return ua.indexOf("firefox") > -1;
    }
        
});