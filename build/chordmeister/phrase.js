define("chordmeister/phrase", 
  ["exports"],
  function(__exports__) {
    "use strict";
    function Phrase(lyric, chord) {
      this.lyric = lyric;
      this.chord = chord;
    }

    __exports__["default"] = Phrase
  });