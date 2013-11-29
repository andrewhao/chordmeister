(function() {
  this.Parser = (function() {
    function Parser(text) {
      this.text = text;
      this.classified_lines = [];
    }

    Parser.prototype.lines = function() {
      return this.text.split('\n');
    };

    Parser.prototype.parse = function() {
      var _this = this;
      this.classified_lines = [];
      this.lines().forEach(function(l, i) {
        return _this.classified_lines.push(new ClassifiedLine(l));
      });
      return this.classified_lines;
    };

    Parser.prototype.chordLines = function() {
      var retVal;
      retVal = {};
      this.classified_lines.forEach(function(l, i) {
        if (l.type() === "CHORD") {
          return retVal[i] = l.text;
        }
      });
      return retVal;
    };

    Parser.prototype.lyricLines = function() {
      var retVal;
      retVal = {};
      this.classified_lines.forEach(function(l, i) {
        if (l.type() === "LYRIC") {
          return retVal[i] = l.text;
        }
      });
      return retVal;
    };

    return Parser;

  })();

}).call(this);
