(function() {
  describe("Chordmeister.Parser", function() {
    beforeEach(function() {
      this.chord1 = "A B C";
      this.chord2 = "G D C";
      this.line1 = "Oh say does that star spangled";
      this.line2 = "banner yet waaaa-ave!";
      this.text = [this.chord1, this.line1, this.chord2, this.line2].join("\n");
      return this.parser = new Chordmeister.Parser(this.text);
    });
    describe("#lines", function() {
      return it("returns a list of ClassifiedLines", function() {
        var p;
        p = this.parser.lines();
        return p.forEach(function(cl) {
          return expect(cl instanceof Chordmeister.ClassifiedLine).to.be["true"];
        });
      });
    });
    describe("#text", function() {
      return it("returns the text it was initialized with", function() {
        return expect(this.parser.text).to.eql(this.text);
      });
    });
    describe("#chordLines", function() {
      return it("returns the chord and the line number it is associated with", function() {
        return expect(this.parser.chordLines()).to.eql({
          0: this.chord1,
          2: this.chord2
        });
      });
    });
    return describe("#lyricLines", function() {
      return it("returns the chord and the line number it is associated with", function() {
        return expect(this.parser.lyricLines()).to.eql({
          1: this.line1,
          3: this.line2
        });
      });
    });
  });

}).call(this);
