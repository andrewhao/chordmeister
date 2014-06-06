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
      compile: {
        files: {
          'tmp/chordmeister.js': 'src/chordmeister/**/*.coffee'
        }
      },

      glob_to_multiple: {
        expand: true,
        flatten: false,
        cwd: '',
        src: [ '{src,test}/**/*.coffee' ],
        dest: 'tmp',
        ext: '.js'
      }
    },

    simplemocha: {
      options: {
        //globals: [''],
        timeout: 3000,
        ignoreLeaks: false,
        //grep: '*_spec',
        ui: 'bdd',
        reporter: 'spec'
      },

      all: { src: ['tmp/test/**/*.js'] }
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

    transpile: {
      main: {
        type: "amd",
        files: [{
          expand: true,
          cwd: "tmp/src/",
          src: ["**/*.js"],
          dest: "build/"
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-es6-module-transpiler');

  grunt.registerTask('test', ['coffee', 'transpile', 'mocha']);
  grunt.registerTask('default', [ 'coffee' ]);

};
