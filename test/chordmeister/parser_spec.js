require([
  "chordmeister/parser",
  "chordmeister/classified_line"
], function(parser, classifiedLine) {
  Parser = parser.default;
  ClassifiedLine = classifiedLine.default;

  describe("Parser", function() {
    beforeEach(function() {
      this.chord1 = "A B C";
      this.chord2 = "G D C";
      this.line1 = "Oh say does that star spangled";
      this.line2 = "banner yet waaaa-ave!";
      this.text = [this.chord1, this.line1, this.chord2, this.line2].join("\n");
      this.parser = new Parser(this.text);
    });
    describe("#lines", function() {
      it("returns a list of ClassifiedLines", function() {
        var p;
        p = this.parser.lines();
        p.forEach(function(cl) {
          expect(cl instanceof ClassifiedLine).to.be["true"];
        });
      });
    });
    describe("#text", function() {
      it("returns the text it was initialized with", function() {
        expect(this.parser.text).to.eql(this.text);
      });
    });
    describe("#chordLines", function() {
      it("returns the chord and the line number it is associated with", function() {
        expect(this.parser.chordLines()).to.eql({
          0: this.chord1,
          2: this.chord2
        });
      });
    });
    describe("#lyricLines", function() {
      it("returns the chord and the line number it is associated with", function() {
        expect(this.parser.lyricLines()).to.eql({
          1: this.line1,
          3: this.line2
        });
      });
    });
    describe("#lyricText", function() {
      it("returns a lyric on each line, in the order it was given", function() {
        expect(this.parser.lyricText()).to.eql("" + this.line1 + "\n" + this.line2);
      });
    });
  });
});
