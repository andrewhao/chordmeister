(function() {
  var Song, _class, _ref;

  Song = (function() {
    function Song() {
      _ref = _class.apply(this, arguments);
      return _ref;
    }

    _class = Song.lines;

    Song.prototype.lyrics = function() {
      return console.log("outputting lyrics");
    };

    Song.prototype.chords = function() {
      return console.log("outputting chords");
    };

    return Song;

  })();

}).call(this);
