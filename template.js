/*
 * grunt-init-reveal-jade
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 Peter Ajtai
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a RevealJS slideshow including support for livereload.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
    'install_. After that, you may begin editing your slideshow by running ' +
    '_grunt server_. This will create a ready to use build. Should you want ' +
    'to create a build without running the server, run _grunt build_. ' +
    'For more information about installing and configuring Grunt, please see ' +
    'the Getting Started guide:' +
    '\n\n' +
    'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function (grunt, init, done) {

    init.process({type : 'reveal-jade'}, [
        // Prompt for these values.
        init.prompt('name'),
        init.prompt('description'),
        init.prompt('version'),
        init.prompt('repository'),
        init.prompt('homepage'),
        init.prompt('bugs'),
        init.prompt('licenses'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('author_url'),
        init.prompt('node_version', '>= 0.8.19'),
        init.prompt('slidesDirectory', 'slides'),
        init.prompt('assetsDirectory', 'assets'),
        init.prompt('buildDirectory', 'build'),
        init.prompt('tempDirectory', 'temp'),
        init.prompt('cleanBeforeBuild', true),
        init.prompt('slideshowTitle', 'My Title'),
        init.prompt('slideshowAuthor', 'Author'),
        init.prompt('slideshowDescription', 'Description'),
        init.prompt('theme', 'default'),
        init.prompt('syntaxHlTheme', 'zenburn'),
        init.prompt('controls', true),
        init.prompt('progress', true),
        init.prompt('history', true),
        init.prompt('center', true),
        init.prompt('transition', 'default'),
        init.prompt('orphanBuildBranch', 'gh-pages'),
        // Can also set to, "0.0.0"
        init.prompt('staticHost', 'localhost'),
    ], function (err, props) {
        props.keywords = [];
        props.devDependencies = {
            "matchdep"                 : "~0.1.2",
            "grunt-reveal-jade"        : "~0.0.2",
            "grunt-open"               : "~0.2.0",
            "grunt-contrib-watch"      : "~0.4.4",
            "grunt-contrib-connect"    : "~0.3.0",
            "grunt-contrib-livereload" : "~0.1.2"
        };

        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Add properly-named license files.
        init.addLicenseFiles(files, props.licenses);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // Generate package.json file.
        init.writePackageJSON('package.json', props);

        // All done!
        done();
    });

};
