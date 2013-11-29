(function() {
  describe("#lyrics", function() {
    return it("accesses constructed lyric", function() {
      var c;
      c = new Foo("lyric");
      return c.lyrics.should.equal("lyric");
    });
  });

}).call(this);
