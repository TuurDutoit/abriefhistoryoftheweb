module.exports = function(grunt) {
    
    grunt.initConfig({
        browserify: {
            main: {
                files: {
                    "src/build/bundle.min.js": "src/js/main.js"
                },
                options: {
                    //transform: ["uglifyify"]
                }
            }
        },
        concat: {
            jquery: {
                files: {
                    "src/build/bundle-jquery.min.js": ["src/js/lib/jquery.min.js", "src/js/lib/jquery.event.move.js", "src/js/lib/jquery.event.swipe.js", "src/js/lib/slick.min.js"]
                }
            }
        },
        autoprefixer: {
            dist: {
                files: {
                    "src/css/style.prefixed.css": "src/css/style.css"
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    "src/build/style.min.css": "src/css/style.prefixed.css"
                }
            }
        }
    });
    
    
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-autoprefixer");
    
    
    grunt.registerTask("default", ["browserify", "concat", "autoprefixer", "cssmin"]);
    
}