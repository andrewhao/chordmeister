define("chordmeister/chord", 
  [],
  function() {
    "use strict";
    (function() {
      var Chord;

      Chord = (function() {
        function Chord(word) {
          this.word = word;
          console.log("constructing chord with word " + word);
        }

        return Chord;

      })();

      export default = Chord;

    }).call(this);
  });