// Represents a set of ClassifiedLines
function Song() {}

Song.prototype.lyrics = function() {
  return console.log("outputting lyrics");
};

Song.prototype.chords = function() {
  return console.log("outputting chords");
};

export default Song;

