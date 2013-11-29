(function() {
  this.ClassifiedLine = (function() {
    function ClassifiedLine(text) {
      this.text = text;
      this.debug = false;
    }

    ClassifiedLine.prototype.type = function() {
      if (this.isChord()) {
        return "CHORD";
      } else if (this.isHeading()) {
        return "HEADING";
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

    ClassifiedLine.prototype.headingRegex = /^chorus|verse|bridge/gi;

    ClassifiedLine.prototype.chordRegex = /^[A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*(\/[A-G][b\#]*)*$/;

    return ClassifiedLine;

  })();

}).call(this);
