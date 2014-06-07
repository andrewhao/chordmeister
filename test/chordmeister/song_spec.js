(function() {
  require(['chordmeister/song'], function(Song) {
    return describe("Song", function() {
      return describe("#lyrics", function() {
        return it("accesses constructed lyric", function() {
          var s;
          return s = new Song();
        });
      });
    });
  });

}).call(this);
