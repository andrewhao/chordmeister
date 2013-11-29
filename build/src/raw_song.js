(function() {
  this.RawSong = (function() {
    function RawSong(text) {
      this.text = text;
    }

    RawSong.prototype.parser = function() {
      this.p = new Parser(this.text);
      this.p.parse();
      return this.p;
    };

    RawSong.prototype.chordLines = function() {
      return this.parser().chordLines();
    };

    RawSong.prototype.lyricLines = function() {
      return this.parser().lyricLines();
    };

    return RawSong;

  })();

}).call(this);
