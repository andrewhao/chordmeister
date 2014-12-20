define("chordmeister/chord", 
  ["exports"],
  function(__exports__) {
    "use strict";
    // A musical chord
    function Chord(word) {
      this.word = word;
      console.log("constructing chord with word " + word);
    }

    __exports__["default"] = Chord;
  });