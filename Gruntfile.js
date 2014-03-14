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
      build: {
        // now we are going to take the file from above and compress the hell out of it!
        src: 'assets/_source/js/main.js',
        dest: 'assets/js/main.min.js'
      }
    },
    // image minification
    imagemin: {
        dynamic: {
        options: {
            cache: 'false'
        },
        files: [{
          expand: true,
          // this directory will be where we watch for images to minify
          cwd: 'assets/css/img/',
          src: ['**/*.{png,jpg,gif}'],
          // and here is where we will stick those minified images
          dest: 'assets/css/img/'
        }]
      }
    },
    // sass processing
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          // on the left is our css output and the right is what scss file we are watching
          'skin.css': 'assets/_source/scss/**/*.scss'
        }
      }
    },
    // lets watch all of these files from above for changes so we can run grunt automatically
    watch: {
      scripts: {
        files: ['assets/_source/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
        },
      },
      css: {
        files: ['assets/_source/scss/*.scss'],
        tasks: ['sass'],
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
