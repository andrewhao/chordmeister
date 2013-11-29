module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: false,
        cwd: '',
        src: [ '{src,test}/**/*.coffee' ],
        dest: 'build',
        ext: '.js'
      }
    },

    mocha: {
      test: {
        src: ['test/index.html'],
        options: {
          run: true,
          reporter: "Spec"
        }
      },
    },

    watch: {
      all: {
        files: [ '{src,test}/**/*.coffee' ],
        tasks: [ 'coffee', "mocha" ]
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha');

  grunt.registerTask('test', []);
  grunt.registerTask('default', [ 'coffee' ]);

};
