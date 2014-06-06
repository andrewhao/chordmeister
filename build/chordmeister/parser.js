define("chordmeister/parser", 
  [],
  function() {
    "use strict";
    (function() {
      var Parser;

      Parser = (function() {
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

        Parser.prototype.lyricText = function() {
          var line, num, text, _ref;
          text = [];
          _ref = this.lyricLines();
          for (num in _ref) {
            line = _ref[num];
            text.push(line);
          }
          return text.join('\n');
        };

        return Parser;

      })();

      export default Parser;

    }).call(this);
  });