module.exports = function(grunt) {

  grunt.initConfig({

    concat: {

      options: {

        separator: ';'

      },

      dist: {

        src: ['js/src/*.js'],

        dest: 'js/dist/script.main.js'
      }

    },

    uglify: {

      dist: {

        src: ['js/dist/script.main.js'],

        dest: 'js/dist/script.main.min.js'
      }

    },

    sass: {

      dist: {

        files: [{

          expand: true,

          cwd: 'styles/src',

          src: ['style1.scss'],

          dest: 'styles/dist',

          ext: '.css'

        }]

      }

    },

    cssmin: {

      target: {

        files: [{

          expand: true,

          cwd: 'styles/dist',

          src: ['style1.css', '!*.min.css'],

          dest: 'styles/dist',

          ext: '.min.css'

        }]

      }

    },

    watch: {

      concat: {

        files: ['js/src/*.js'],

        tasks: ['concat']

      },

      uglify: {

        files: ['js/dist/script.main.js'],

        tasks: ['uglify']

      },

      sass: {

        files: ['styles/src/style1.scss'],

        tasks: ['sass']

      },

      cssmin: {

        files: ['styles/dist/style1.css'],

        tasks: ['cssmin']

      }

    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-watch');





  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'cssmin']);



};