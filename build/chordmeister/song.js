define("chordmeister/song", 
  ["exports"],
  function(__exports__) {
    "use strict";
    // Represents a set of ClassifiedLines
    function Song() {}

    Song.prototype.lyrics = function() {
      return console.log("outputting lyrics");
    };

    Song.prototype.chords = function() {
      return console.log("outputting chords");
    };

    __exports__["default"] = Song;
  });