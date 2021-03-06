require(["chordmeister/classified_line"], function(classifiedLine) {
  ClassifiedLine = classifiedLine.default

  describe("ClassifiedLine", function() {
    beforeEach(function() {
      this.text = "oh say can you see";
      this.cl = new ClassifiedLine(this.text);
    });
    describe("#text", function() {
      it("returns text", function() {
        expect(this.cl.text).to.equal(this.text);
      });
    });
    describe("#type()", function() {
      describe("for lyric lines", function() {
        it("returns type LYRIC", function() {
          var cl, lyric;
          lyric = "I feel good, dunna dunna dunna dun";
          cl = new ClassifiedLine(lyric);
          expect(cl.type()).to.equal("LYRIC");
        });
      });
      describe("for chord lines", function() {
        it("returns type CHORD", function() {
          var cl, line;
          line = "G A D    C   A";
          cl = new ClassifiedLine(line);
          expect(cl.type()).to.equal("CHORD");
        });
        it("returns CHORD for complex slashed chords", function() {
          var cl, line;
          line = "A/G B/F# F#m/G";
          cl = new ClassifiedLine(line);
          expect(cl.type()).to.equal("CHORD");
        });
        it("returns CHORD for minor chords", function() {
          var cl, line;
          line = "Am Em F#m";
          cl = new ClassifiedLine(line);
          expect(cl.type()).to.equal("CHORD");
        });
      });
      describe("for headings", function() {
        it("returns HEADING for 'chorus'", function() {
          var cl, line;
          line = "CHORUS";
          cl = new ClassifiedLine(line);
          expect(cl.type()).to.equal("HEADING");
        });
        it("returns HEADING for 'verse 1'", function() {
          var cl, line;
          line = "verse 1";
          cl = new ClassifiedLine(line);
          expect(cl.type()).to.equal("HEADING");
        });
        it("returns HEADING for 'bridge'", function() {
          var cl, line;
          line = "bridge";
          cl = new ClassifiedLine(line);
          expect(cl.type()).to.equal("HEADING");
        });
      });
      describe("for spacers", function() {
        it("returns SPACER for blank line", function() {
          var cl, line;
          line = "\n";
          cl = new ClassifiedLine(line);
          expect(cl.type()).to.equal("SPACER");
        });
        it("returns SPACER for spacey blank line", function() {
          var cl, line;
          line = "\t  ";
          cl = new ClassifiedLine(line);
          expect(cl.type()).to.equal("SPACER");
        });
        it("returns SPACER for nothing in the line", function() {
          var cl, line;
          line = "";
          cl = new ClassifiedLine(line);
          expect(cl.type()).to.equal("SPACER");
        });
      });
    });
  });
});
