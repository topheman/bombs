TOPHEMAN BOMBS v2
=================

* Try it at : [http://bombs.topheman.com/](http://bombs.topheman.com/)
* [Video demo on youtube](http://youtu.be/PEw9Kkko4xU "Video demo on youtube")
* A game made with Ball.js : [https://github.com/topheman/Ball.js](https://github.com/topheman/Ball.js)
* [Changelog](https://github.com/topheman/bombs/blob/master/CHANGELOG.md)
* [Workflow with grunt](https://github.com/topheman/bombs/blob/master/GRUNTWORKFLOW.md)

#Introduction

Topheman Bombs is a free __HTML5 / Javascript__ game that takes advantage of the canvas element and the accelerometer on your device.

And you can **play offline** (in the subway or whatever ...), or on your **desktop browser via the emulator** !

* Tilt your device to manage the blue dot
* Tap the screen to drop bombs on the enemies (red dots)
* Grab the green dots to get more bombs

![Topheman Bombs QR-Code](http://bombs.topheman.com/alternate/bombs-topheman-com-qrcode-bandeau.png)

#Browser Compatibility

Topheman Bombs has been written so that you could play it on any platform, with the same source code. Even if you don't have any accelerometer on your desktop, a motion events emulator is provided (remote-tilt), via feature detection.

Tested on : Apple devices, Android 4+ Chrome / Firefox.

Won't work on windows phone devices (accelerometer APIs aren't exposed).

#Development

##Ball.js

The game is based on [Ball.js](https://github.com/topheman/Ball.js), a JavaScript class that handles __physics interactions__ between balls on a flat area (i.e. collisions) as well as __rendering__, I made in early 2012.

##Topheman Bombs v2

This is the __second version__ of Topheman bombs. You can see the [changelog](CHANGELOG.md) here. The main changes are :

* left phoneGap to be a full html5 game supporting both iOS and Android
* offline gaming
* optimized build files via requireJS (see the grunt workflow for that)
* accelerometer emulator on desktop

##Grunt Workflow Boilerplate

In the end of 2013 first semester, after finishing [boxboxevents](https://github.com/topheman/boxbox), I was working on a game and I re-discovered [grunt](http://gruntjs.com/) with the v0.4.

I explain my __[grunt workflow here](GRUNTWORKFLOW.md)__ with all the different tasks such as :

* building
* server testing
* ftp deploying
* creating html5 manifest
* …

Feel free to take a look.

#Related

* [Blog post](http://blog.topheman.com/2013/08/24/topheman-bombs-v2-refonte-full-html5-javascript/)
* Thanks to [remote-tilt.com](http://remote-tilt.com/)

#License
This software is licensed under ![Attribution-NonCommercial 3.0 Unported (CC BY-NC 3.0)](http://i.creativecommons.org/l/by-nc/3.0/88x31.png)
at http://creativecommons.org/licenses/by-nc/3.0/