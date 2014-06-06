define("chordmeister/song", 
  [],
  function() {
    "use strict";
    (function() {
      this.Chordmeister || (this.Chordmeister = {});

      this.Chordmeister.Song = (function() {
        function Song() {}

        Song.prototype.lyrics = function() {
          return console.log("outputting lyrics");
        };

        Song.prototype.chords = function() {
          return console.log("outputting chords");
        };

        return Song;

      })();

    }).call(this);
  });