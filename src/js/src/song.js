(function() {
  this.Song = (function() {
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
