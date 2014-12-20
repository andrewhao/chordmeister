define("chordmeister/line", 
  ["chordmeister/phrase","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Phrase = __dependency1__["default"];
    function Line(lyricText, chordText) {
      this.lyricText = lyricText;
      this.chordText = chordText;
    };

    Line.prototype.phrases = function() {
      return this._generatePhrases();
    }

    Line.prototype._generatePhrases = function() {
      // "A    A G".split("")
      var chordMapping = [];
      var arr = this.chordText.split("");
      for(var i = 0; i < arr.length; i++) {
        var char = arr[i];
        if(char !== ' ') {
          if(i > 0) {
            chordMapping[chordMapping.length - 1].e = i;
          }
          chordMapping.push({s: i, e: undefined});
        };
      };

      // mapping is: [{chord: "A", i: 0},
      //              {chord: "G", i: 7}]

      var phrases = [];
      var self = this;
      chordMapping.forEach(function(map) {
        var start = map.s;
        var end = map.e;
        console.log(start + " " + end);
        console.log(self.lyricText);
        console.log("substring with " + start + " and " + end);
        console.log(self.lyricText.substring(start, end))
        var lyric = self.lyricText.substring(start, end).trim()
        var chord = self.chordText.substring(start, end).trim()
        console.log(lyric + chord);


        var p = new Phrase(lyric, chord)
        console.log(p.lyric + p.chord)
        phrases.push(p)
      });
      return phrases;
    };

    __exports__["default"] = Line
  });