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
          lyric = "I feel good, dunna dunna dunna dun";
          cl = new ClassifiedLine(lyric);
          return expect(cl.type()).to.equal("LYRIC");
        });
      });
      describe("for chord lines", function() {
        it("returns type CHORD", function() {
          var cl, line;
          line = "G A D    C   A";
          cl = new ClassifiedLine(line);
          return expect(cl.type()).to.equal("CHORD");
        });
        it("returns CHORD for complex slashed chords", function() {
          var cl, line;
          line = "A/G B/F# F#m/G";
          cl = new ClassifiedLine(line);
          return expect(cl.type()).to.equal("CHORD");
        });
        return it("returns CHORD for minor chords", function() {
          var cl, line;
          line = "Am Em F#m";
          cl = new ClassifiedLine(line);
          return expect(cl.type()).to.equal("CHORD");
        });
      });
      return describe("for headings", function() {
        it("returns HEADING for 'chorus'", function() {
          var cl, line;
          line = "CHORUS";
          cl = new ClassifiedLine(line);
          return expect(cl.type()).to.equal("HEADING");
        });
        it("returns HEADING for 'verse 1'", function() {
          var cl, line;
          line = "verse 1";
          cl = new ClassifiedLine(line);
          return expect(cl.type()).to.equal("HEADING");
        });
        return it("returns HEADING for 'bridge'", function() {
          var cl, line;
          line = "bridge";
          cl = new ClassifiedLine(line);
          return expect(cl.type()).to.equal("HEADING");
        });
      });
    });
  });

}).call(this);
