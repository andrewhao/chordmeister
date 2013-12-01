(function() {
  this.Chordmeister || (this.Chordmeister = {});

  this.Chordmeister.Parser = (function() {
    function Parser(text) {
      this.text = text;
    }

    Parser.prototype.lines = function() {
      var lines,
        _this = this;
      if (this.lineArray != null) {
        return this.lineArray;
      }
      this.lineArray = [];
      lines = this.text.split('\n');
      lines.forEach(function(l, i) {
        return _this.lineArray.push(new Chordmeister.ClassifiedLine(l));
      });
      return this.lineArray;
    };

    Parser.prototype.chordLines = function() {
      var retVal;
      retVal = {};
      this.lines().forEach(function(l, i) {
        if (l.type() === "CHORD") {
          return retVal[i] = l.text;
        }
      });
      return retVal;
    };

    Parser.prototype.lyricLines = function() {
      var retVal;
      retVal = {};
      this.lines().forEach(function(l, i) {
        if (l.type() === "LYRIC") {
          return retVal[i] = l.text;
        }
      });
      return retVal;
    };

    return Parser;

  })();

}).call(this);
