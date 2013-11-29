(function() {
  this.ClassifiedLine = (function() {
    function ClassifiedLine(text) {
      this.text = text;
    }

    ClassifiedLine.prototype.type = function() {
      if (this.isChord()) {
        return "CHORD";
      } else {
        return "LYRIC";
      }
    };

    ClassifiedLine.prototype.isChord = function() {
      var retVal, tokens,
        _this = this;
      tokens = this.text.replace(/\s+/gi, " ").split(" ");
      console.log("tokens are: " + tokens);
      retVal = true;
      tokens.forEach(function(word) {
        var isChord;
        isChord = word.match(_this.chordRegex);
        console.log("word " + word + " is " + (isChord != null ? "definitely" : "not") + " a chord");
        if (!isChord) {
          retVal = false;
        }
      });
      return retVal;
    };

    ClassifiedLine.prototype.chordRegex = /^[A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*(\/[A-G][b\#]*)*$/;

    return ClassifiedLine;

  })();

}).call(this);
