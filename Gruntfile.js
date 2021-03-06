module.exports = function(grunt) {

    grunt.initConfig({
        // jshint
        jshint: {
            options: {
                node: true
            },
            all: [
                // specify js files to lint here, do not include third_party or vendor files
                'assets/_source/js/functions.js'
            ]
        },
        // js concatenation
        concat: {
            dist: {
                src: [
                    // what files would you like to combine?
                    'assets/_source/js/functions.js'
                ],
                // where would you like them to be combined to?
                dest: 'assets/_source/js/main.js',
            }
        },
        // js uglification/compression
        uglify: {
            main_js: {
                files: {
                    'assets/js/main.min.js': ['assets/_source/js/main.js']
                }
            }
        },
        // image minification
        imagemin: {
            // images used for ui only
            css_images: {
                files: [{
                    expand: true,
                    // this directory will be where we watch for images to minify
                    cwd: 'assets/css/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    // and here is where we will stick those minified images
                    dest: 'assets/css/img/'
                }],
                options: {
                    cache: false
                }
            },
            // images used for content
            content_images: {
                files: [{
                    expand: true,
                    // this directory will be where we watch for images to minify
                    cwd: 'assets/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    // and here is where we will stick those minified images
                    dest: 'assets/img/'
                }],
                options: {
                    cache: false
                }
            }
        },
        // sass development processing
        sassdev: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    // on the left is our css output and the right is what scss file we are watching
                    'assets/css/main.css': 'assets/_source/scss/main.scss'
                }
            }
        },
        // sass production processing
        sassprod: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    // on the left is our css output and the right is what scss file we are watching
                    'assets/css/main.min.css': 'assets/_source/scss/main.scss'
                }
            }
        },
        // lets watch all of these files from above for changes so we can run grunt automatically
        watch: {
            grunt: {
                files: ['package.json', 'Gruntfile.js']
            },
            scripts: {
                files: ['assets/_source/js/**/*.js', '!assets/_source/js/jquery.main.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            sassdev: {
                files: ['assets/_source/scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            sassprod: {
                files: ['assets/_source/scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            css_images: {
                files: ['assets/_source/css/img/**/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            },
            content_images: {
                files: ['assets/_source/css/img/**/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    // what grunt tasks we have available to us
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // registering those tasks
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'sass', 'watch', 'jshint']);

};
