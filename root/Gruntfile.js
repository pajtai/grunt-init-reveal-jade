/*global module:false, require:false*/
module.exports = function(grunt) {

    "use strict";

    var path = require('path'),
        lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
        folderMount = function folderMount(connect, point) {
            return connect.static(path.resolve(point));
        };

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Project configuration.
    grunt.initConfig({

        reveal: {

            livereload: {
                options: {
                    slides: {%= slidesDirectory %},
                    build: {%= buildDirectory %},
                    temp: {%= tempDirectory %},
                    assets: {%= assetsDirectory %},
                    cleanBuild: {%= cleanBeforeBuild %},
                    title: {%= slideshowTitle %},
                    description: {%= slideshowDescription %},
                    author: {%= slideshowAuthor %},
                    theme: {%= theme %},
                    syntax: {%= syntaxHlTheme %},
                    controls: {%= controls %},
                    progress: {%= progress %},
                    history: {%= history %},
                    center: {%= center %},
                    // default/cube/page/concave/zoom/linear/none
                    transition: {%= transition %}
                }
            }
        },

        watch: {
            options: {
                // Start a live reload server on the default port: 35729
                livereload: true,
                nospawn: true
            },
            jade: {
                files: ['{%= slidesDirectory %}/*.jade'],
                tasks: ["reveal-createBuild", "reveal-deleteTemp"]
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                tasks: ["reveal:livereload", "open"]
            }
        },

        connect: {
            livereload : {
                options : {
                    port       : 9001,
                    hostname: 'localhost',
                    base       : './build',
                    middleware : function (connect, options) {
                        return [lrSnippet, folderMount(connect, options.base)]
                    }
                }
            }
        },

        open : {
            reload : {
                path : 'http://localhost:9001/'
            }
        }

    });

    grunt.registerTask("server", "Build and watch task", ["reveal:livereload", "connect", "open", "watch"]);
    grunt.registerTask("refresh", "Build and watch task", ["reveal:livereload", "open"]);
};
