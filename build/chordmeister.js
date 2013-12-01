(function() {
  this.Chordmeister || (this.Chordmeister = {});

  this.Chordmeister.Chord = (function() {
    function Chord(word) {
      this.word = word;
      console.log("constructing chord with word " + word);
    }

    return Chord;

  })();

}).call(this);

(function() {
  this.Chordmeister || (this.Chordmeister = {});

  this.Chordmeister.ClassifiedLine = (function() {
    function ClassifiedLine(text) {
      this.text = text;
      this.debug = false;
    }

    ClassifiedLine.prototype.type = function() {
      if (this.isChord()) {
        return "CHORD";
      } else if (this.isHeading()) {
        return "HEADING";
      } else if (this.isBlank()) {
        return "SPACER";
      } else {
        return "LYRIC";
      }
    };

    ClassifiedLine.prototype.isChord = function() {
      var retVal, tokens,
        _this = this;
      tokens = this.text.replace(/\s+/gi, " ").split(" ");
      retVal = true;
      tokens.forEach(function(word) {
        var isChord;
        isChord = word.match(_this.chordRegex);
        if (_this.debug) {
          console.log("word " + word + " is " + (isChord != null ? "definitely" : "not") + " a chord");
        }
        if (!isChord) {
          retVal = false;
        }
      });
      return retVal;
    };

    ClassifiedLine.prototype.isHeading = function() {
      return this.text.match(this.headingRegex);
    };

    ClassifiedLine.prototype.isBlank = function() {
      return this.text.match(this.blankRegex);
    };

    ClassifiedLine.prototype.blankRegex = /^[\s]*$/gi;

    ClassifiedLine.prototype.headingRegex = /^chorus|verse|bridge/gi;

    ClassifiedLine.prototype.chordRegex = /^[A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*(\/[A-G][b\#]*)*$/;

    return ClassifiedLine;

  })();

}).call(this);

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

}).call(this);

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
