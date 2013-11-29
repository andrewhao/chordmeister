(function() {
  describe("RawSong", function() {
    beforeEach(function() {
      this.chord1 = "A B C";
      this.chord2 = "G D C";
      this.line1 = "Oh say does that star spangled";
      this.line2 = "banner yet waaaa-ave!";
      this.text = [this.chord1, this.line1, this.chord2, this.line2].join("\n");
      return this.rawSong = new RawSong(this.text);
    });
    describe("#text", function() {
      return it("returns the text it was initialized with", function() {
        return expect(this.rawSong.text).to.equal(this.text);
      });
    });
    describe("#chordLines", function() {
      return it("returns the chord and the line number it is associated with", function() {
        return expect(this.rawSong.chordLines()).to.equal({
          0: this.chord1,
          2: this.chord2
        });
      });
    });
    return describe("#lyricLines", function() {
      return it("returns the chord and the line number it is associated with", function() {
        return expect(this.rawSong.lyricLines()).to.equal({
          1: this.line1,
          3: this.line2
        });
      });
    });
  });

}).call(this);
