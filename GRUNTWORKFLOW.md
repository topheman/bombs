TOPHEMAN GRUNT WORKFLOW
=======================

## Disclaimer

I don't pretend this is the best solution. Since I thought it could be usefull to other people, I wanted to share it.

## Installation

* Prerequisite
  * Install [nodeJS](http://nodejs.org/)
  * Install [grunt](http://gruntjs.com/getting-started) (globally, to have the grunt command line) doing : `npm install -g grunt-cli`
* At the root of your project, run `npm install` , it will install locally all the node modules needed (all referenced in the package.json file at the root of the project).

## File organization

* [`src/`](https://github.com/topheman/bombs/tree/master/src) : folder containing your sources and where you code
* `release/` : folder created at build time containing the build version of `src/` (in .gitignore by default)
* [`Gruntfile.js`](https://github.com/topheman/bombs/blob/master/Gruntfile.js) : the file containing the grunt task, you may have to modify it according to your needs
* [`grunt.options.default.json`](https://github.com/topheman/bombs/blob/master/grunt.options.default.json) : see `grunt deploy`
* `.ftppass` : see `grunt deploy`
* [`htaccessToTransfer`](https://github.com/topheman/bombs/blob/master/htaccessToTransfer) : see `grunt deploy`
* [`requirejs.compile.options.js`](https://github.com/topheman/bombs/blob/master/requirejs.compile.options.js) : see `grunt build`

## Grunt commands

Now that you've made the installation, you'll have access to different command lines (those aren't grunt's default command lines, those are tasks I registred in the `Gruntfile.js`, feel free to check how it works and adapt it to your own needs):

* [`grunt build`](#grunt-build)
* [`grunt server`](#grunt-server)
* [`grunt server-release`](#grunt-server-release)
* [`grunt deploy`](#grunt-deploy)

### grunt build

* What does it do ?
  * cleans the `release/` folder
  * copy all files from `src/` to `release/` (automatic because using requireJS)
  * resolves/minifies all the requireJS dependencies into 1 file (also containing requireJS)
  * minifies the css
  * removes any unnecessary files such as :
    * all js minified files (we don't need them any more)
    * all html files (we will process them after)
  * creates an `.htaccess` file for apache servers with `AddType text/cache-manifest .appcache` inside (so that the appcache files will be recognised as a manifest on apache servers if you don't have the type) - `htacessToTransfer` is copied for this task
  * copy/processes the html files like templates adding version number (from package.json) + buildNumber
    * game.release.html becomes game.html (it has a link to the manifest and a direct call to the build via requireJS)
  * creates an html5 cache manifest file in `release/manifest.appcache` - see the manifest task in the `Gruntfile` to match with your needs
* requireJS configuration
  * [`src/js/require.config.js`](https://github.com/topheman/bombs/blob/master/src/js/require.config.js) : this is the configuration where you set baseUrl, paths, shim, etc … It is used client side in debug mode
  * `requirejs.compile.options.js` : this file is called at build time, it has a reference to the previous file (so that you declare your requireJS config only once) :
    * you can specify which module you want to build (you can make multiple builds like a game would need a runtime.js and levelEditor.js)
  * see how different require is called in :
    * [`src/game.html`](https://github.com/topheman/bombs/blob/master/src/game.html)
    * [`src/game.release.html`](https://github.com/topheman/bombs/blob/master/src/game.release.html)

### grunt server

Just run this command, it will start a server with `src/` directory as baseUrl and will open it in your browser at localhost:9002 (see `connect` task).

You don't have to have an Apache server anymore !

### grunt server-release

Same as grunt server, but it will launch the server with `release/` directory as baseUrl.

### grunt deploy

* Prerequisite
  * rename `grunt.options.default.json` to `grunt.options.json`
  * set the correct host, port and dest for your ftp server
  * it's in .gitignore by default
  * create `.ftppass` and put the correct credentials (see [grunt-ftp-deploy](https://npmjs.org/package/grunt-ftp-deploy)): `{"key1": {"username": "username1","password": "password1"}}`
  * it's in .gitignore by default
* Use
  * after you made a build with `grunt build`, just type `grunt deploy`, it will upload your release folder by ftp at the destination you set.

