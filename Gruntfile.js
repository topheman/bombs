module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var builderOptions = require('./requirejs.compile.options'),
        version = require('./package.json').version,
        gruntSpecificOptions;

    try{
        gruntSpecificOptions = grunt.file.readJSON('./grunt.options.json');//specific options meant to be split from the hard code of the GruntFile.js
    }
    catch(e){
        grunt.log.error("No grunt.options.json file find (you will need it for ftp-deploy)");
    }

    // Configure Grunt
    grunt.initConfig({

        clean: {
            //clean all before any build
            all: {
                src : ['release']
            },
            //remove the html before replacing the release ones + remove the minified js files no more needed + remove the concat css no more needed
            "after-build" : {
                src : [
                    'release/*.html',
                    'release/assets/audio/LICENSE',
                    'release/js/game/GameManager.js',
                    'release/js/game/HighScoresManager.js',
                    'release/js/game/Stage.js',
                    'release/js/game/banner.js',
                    'release/js/utils/browserDetect.js',
                    'release/js/utils/requestAnimFrame.js',
                    'release/js/vendor/Ball.js',
                    'release/js/vendor/Vector2D.js',
                    'release/js/vendor/zepto.min.js',
                    'release/js/vendor/require.js',
                    'release/js/require.config.js'
                ]
            }
        },

        //to include require.js in the build we run a concat task (before the after-build clean)
        //you could also use it if you have multiple css to concat them into one file
        concat: {
            "bootstrap-js" : {
                src: ['src/js/game/banner.js','release/js/vendor/require.js', 'release/js/game/bootstrap.js'],
                dest: 'release/js/game/bootstrap.js'
            }
        },

        //for mime-type on apache servers, we add the .htaccess with the declaration : AddType text/cache-manifest .appcache
        copy: {
            dist: {
                files: [
                    { 'release/.htaccess' : 'htaccessToTransfer' }
                ]
            }
        },

        // grunt-contrib-connect will serve the files of the project
        // on specified port and hostname
        connect: {
            release:{
                options: {
                    port: 9002,
                    hostname: "0.0.0.0",
                    keepalive: true,
                    base: "release"
                }
            },
            debug: {
                options: {
                    port: 9002,
                    hostname: "0.0.0.0",
                    keepalive: true,
                    base: "src"
                }
            }
        },

        // grunt-open will open your browser at the project's URL
        open: {
            release: {
                path: 'http://localhost:<%= connect.release.options.port%>/index.html'
            },
            debug: {
                path: 'http://localhost:<%= connect.debug.options.port%>/index.html'
            }
        },

        requirejs: {
            compile: {
                options: builderOptions
            }
        },

        cssmin: {
            compile: {
                files: {
                    'release/css/index.css': 'release/css/index.css',
                    'release/css/game.css': 'release/css/game.css'
                }
            }
        },

        //copy into release folder the release.html files + adds buildNumber in title tag via templating, at the end of the build
        processhtml: {
            options: {
                process: true,
                data: {
                    "buildNumber": (new Date()).getTime(),
                    "version": version
                }
            },
            dist : {
                files: {
                    'release/index.html' : ['src/index.html'],
                    'release/game.html' : ['src/game.release.html'],
                    'release/offline.html' : ['src/offline.html']
                }
            }
        },

        manifest: {
            generate: {
                options: {
                    basePath: "release/",
                    cache: [
                        "game.html",    //the game files
                        "js/game/bootstrap.js",
                        "js/index/script.js",
                        "js/vendor/device-motion-polyfill.js",
                        "css/game.css",
                        "css/index.css",
                        'css/img/orientation-lock.png'
                    ],
                    network: [
                        "http://www.google-analytics.com/ga.js",
                        "http://www.google-analytics.com/__utm.gif",
                        "http://*",
                        "https://*"
                    ],
                    fallback: [
                        "/ offline.html"
                    ],
                    preferOnline: false,
                    verbose: true,
                    timestamp: true
                },
                src: [
                    "assets/img/*.png",
                    "assets/audio/*.wav"
                ],
                dest: "release/manifest.appcache"
            }
        }

    });

    if(gruntSpecificOptions){
        grunt.config("ftp-deploy",{
            release: {
                auth: {
                    host: gruntSpecificOptions["ftp-deploy"].release.host,
                    port: gruntSpecificOptions["ftp-deploy"].release.port,
                    authKey: 'key1'
                },
                src: 'release',
                dest: gruntSpecificOptions["ftp-deploy"].release.dest,
                exclusions: ['release/build.txt']
            }
        });
        grunt.registerTask('deploy', ['ftp-deploy:release']);
    }

    function makeLocalIpLog(mode) {
        return function() {
            grunt.log.writeln('Access from your local network: http://' + require('my-local-ip')() + ':' + grunt.config().connect[mode].options.port);
        }
    }

    grunt.registerTask('my-local-ip:release', makeLocalIpLog('release'));
    grunt.registerTask('my-local-ip:debug', makeLocalIpLog('debug'));

    grunt.registerTask('server', ['open:debug', 'my-local-ip:debug', 'connect:debug']);
    grunt.registerTask('server-debug', ['open:debug', 'my-local-ip:debug', 'connect:debug']);
    grunt.registerTask('server-release', ['open:release', 'my-local-ip:release', 'connect:release']);

    grunt.registerTask('build', ['clean:all', 'requirejs', 'cssmin', 'concat', 'clean:after-build', 'copy', 'processhtml','manifest']);

};
