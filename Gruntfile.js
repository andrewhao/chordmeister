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
        flatten: true,
        cwd: 'src',
        src: ['coffee/**/*.coffee'],
        dest: 'src',
        ext: '.js'
      }
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        require: ["coffee-script", "src/chord.js"],
        src: ['test/spec/**/*.coffee']
      }
    },

    watch: {
      all: {
        files:['src/**/*.coffee'],
        tasks:['coffee']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('test', []);
  grunt.registerTask('default', ['coffee']);

};