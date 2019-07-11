# Changelog

## 3.0.0 - 2019-07-11

- fixed accelerometer detection
- alert the user to enable accelerometer ([now blocked by default on safari mobile](https://www.macrumors.com/2019/02/04/ios-12-2-safari-motion-orientation-access-toggle/))
- now using `<dialog>` instead of `alert()` (with polyfill)
- generate QrCode client-side
- remove remoteTilt
- now hosting on github pages
- add deploy task to github pages
- using yarn

## 2.0.0 - 2013-08-15

- changed the whole code to become __requireJS__ compliant
- removed all __PhoneGapp__ code and shut down the android app support
- added support for android chrome and firefox mobile
- added html5 cache support for __offline gaming__
- added better feature detection of accelerometer
- added accelerometer emulator on desktop (not only for development but for game testing too)
- patched remotetilt (the emulator) a little so that it could `window.postMessage()` to the game window - you can now drop bombs hitting space as you manage the ball on desktop !
- changed jQuery for Zepto + not used in the home page
- removed zynga viewporter
  - use `window.onresize` to check orientation change (which is more reliable than `window.orientation` which has multiple implementation)
  - use css media queries for orientation lock screen
- plugged in my grunt workflow which basically ([more here](https://github.com/topheman/bombs/blob/master/GRUNTWORKFLOW.md)) :
  - creates a minified build of the js/css (only 1 js file, 1 css file)
  - creates the html5 cache manifest
  - more here ...


## 1.0.0 - 2012-04-01

- use of [Ball.js](https://github.com/topheman/Ball.js) for collision detection / animations / display
- `window.DeviceMotionEvent` support on Apple mobile Safari devices, directly playable in browser
- accelerometer support for Android devices, packaging the code into a [PhoneGap app](https://play.google.com/store/apps/details?id=com.phonegap.tophemanBombs&feature=search_result)
- use of [remote-tilt](http://remote-tilt.com/) while developping for testing motion events
- HighScores saved inside `localStorage`
- landscape orientation lockscreen - landscape detection via [zynga viewporter v2.0](https://github.com/zynga/viewporter/tree/v2.0)
