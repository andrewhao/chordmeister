import Phrase from 'chordmeister/phrase';
function Line(lyricText, chordText) {
  this.lyricText = lyricText;
  this.chordText = chordText;
};

Line.prototype.phrases = function() {
  return this._generatePhrases();
}

Line.prototype._generatePhrases = function() {
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

  var phrases = [];
  var self = this;
  chordMapping.forEach(function(map) {
    var start = map.s;
    var end = map.e;
    var lyric = self.lyricText.substring(start, end).trim()
    var chord = self.chordText.substring(start, end).trim()
    var p = new Phrase(lyric, chord)
    phrases.push(p)
  });

  return phrases;
};

export default Line
