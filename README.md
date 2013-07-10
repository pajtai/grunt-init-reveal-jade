# grunt-init-node

> Create the project scaffolding for a [RevealJS](https://github.com/hakimel/reveal.js) slideshow with [grunt-init](http://gruntjs.com/project-scaffolding),
including support for livereload, Jade templating, and deploying your slideshow to gh-pages.

This will setup a project with the following NPM dependencies:

```
matchdep
grunt-reveal-jade
grunt-open
grunt-contrib-watch
grunt-contrib-connect
grunt-contrib-livereload
grunt-build-gh-pages
```

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init](http://gruntjs.com/project-scaffolding).

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory. It's
recommended that you use git to clone this template into that directory, as follows:

```
git clone git@github.com:pajtai/grunt-init-reveal-jade.git ~/.grunt-init/reveal-jade
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory
path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init reveal-jade
```

_Note that this template will generate files in the current directory, so be sure to change
to a new directory first if you don't want to overwrite existing files._
