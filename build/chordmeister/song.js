define("chordmeister/song", 
  [],
  function() {
    "use strict";
    (function() {
      var Song;

      Song = (function() {
        function Song() {}

        Song.prototype.lyrics = function() {
          return console.log("outputting lyrics");
        };

        Song.prototype.chords = function() {
          return console.log("outputting chords");
        };

        return Song;

      })();

      export default Song;

    }).call(this);
  });