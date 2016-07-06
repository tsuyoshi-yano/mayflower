/**
 *  Usage:
 *      Once per computer:
 *         $ npm install -g gulp-cli
 *
 *      Once per project, in gulp folder:
 *         $ npm install
 *
 *
 *      Running clumped tasks (defined in this file) --
 *      see quench.js build function
 *         $ gulp dev
 *
 *      Running single task (task defined in /tasks.  eg. /tasks/css.js)
 *         $ gulp css                  // will use the development environment
 *         $ gulp css --env production // will use the production environment
 *
 *      For details on build config, see "user supplied keys" in quench.js
**/

// Include gulp and plugins
var gulp    = require("gulp"),
    quench  = require("./quench.js"),
    path    = require("path");


// default configuration
var defaults = {
    root: path.resolve(__dirname, "../../sites/all/themes/massgov/source/assets"),
    dest: path.resolve(__dirname, "../../sites/all/themes/massgov/assets"),
    rootTheme: path.resolve(__dirname, "../../sites/all/themes/massgov"),
    rootSite: path.resolve(__dirname, "../../"),
    tasks: ["js", "js-common", "css", "bower", "svg-sprite"],
    env: "development", // "development", "production", "local"
    watch: false,
    browserSync: false
};

/**
 * development task
 * Default Task (run when you run 'gulp').
 */
gulp.task("mg-local", function(){

    var config = Object.assign({}, defaults, {
        env   : "development",
        watch : true,
        browserSync: true,
        tasks: defaults.tasks.concat("patternlab")
    });

    quench.build(config);

});

/**
 * production task
 */
gulp.task("mg-prod", function(){

    var config = Object.assign({}, defaults, {
        env   : "production",
        watch : false,
        browserSync: false
    });

    quench.build(config);

});

/**
 * build for development without a watcher
 */
gulp.task("mg-build", function(){

    var config = Object.assign({}, defaults, {
        env   : "development",
        watch : false,
        browserSync: false,
        tasks: defaults.tasks.concat("patternlab")
    });

    quench.build(config);

});

// watch for single tasks on the command line, eg "gulp js"
quench.singleTasks(defaults);
