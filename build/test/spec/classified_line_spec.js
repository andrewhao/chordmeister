(function() {
  describe("ClassifiedLine", function() {
    beforeEach(function() {
      this.text = "oh say can you see";
      return this.cl = new ClassifiedLine(this.text);
    });
    describe("#text", function() {
      return it("returns text", function() {
        return expect(this.cl.text).to.equal(this.text);
      });
    });
    return describe("#type()", function() {
      describe("for lyric lines", function() {
        return it("returns type LYRIC", function() {
          var cl, lyric;
          lyric = "I feel good, duna duna duna dun";
          cl = new ClassifiedLine(lyric);
          return expect(cl.type()).to.equal("LYRIC");
        });
      });
      return describe("for chord lines", function() {
        it("returns type CHORD", function() {
          var chord, cl;
          chord = "G A D    C   A";
          cl = new ClassifiedLine(chord);
          return expect(cl.type()).to.equal("CHORD");
        });
        return it("returns CHORD for complex slashed chords", function() {
          var chord, cl;
          chord = "A/G B/F#";
          cl = new ClassifiedLine(chord);
          return expect(cl.type()).to.equal("CHORD");
        });
      });
    });
  });

}).call(this);
