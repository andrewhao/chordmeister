(function() {
  this.Chord = (function() {
    function Chord(word) {
      this.word = word;
      console.log("constructing chord with word " + word);
    }

    return Chord;

  })();

}).call(this);
