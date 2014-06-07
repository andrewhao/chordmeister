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

    mocha: {
      test: {
        src: ['test/index.html'],
        options: {
          run: false,
          reporter: "Spec",
          growlOnSuccess: true,
          log: true,
          logErrors: true
        }
      },
    },

    watch: {
      all: {
        files: [ '{src,test}/**/*.js' ],
        tasks: [ "transpile", "mocha" ]
      }
    },

    transpile: {
      main: {
        type: "amd",
        files: [{
          expand: true,
          cwd: "src/",
          src: ["**/*.js"],
          dest: "build/"
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');

  grunt.registerTask('test', ['transpile', 'mocha']);
  grunt.registerTask('default', [ 'transpile' ]);

};
