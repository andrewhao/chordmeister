define("chordmeister/chord", 
  [],
  function() {
    "use strict";
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
  });