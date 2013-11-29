(function() {
  describe("Parser", function() {
    this.text = "G A D\nOh say can you see";
    this.p = new Parser(this.text);
    describe("#lines", function() {
      return it("returns a list of split lines", function() {
        return expect(this.p.lines).to.equal(["G A D", "Oh say can you see"]);
      });
    });
    return describe("#parse", function() {
      return it("returns a list of ClassifiedLines", function() {
        var p;
        p = this.p.parse;
        return p.forEach(function(cl) {
          return expect(cl instanceof ClassifiedLine).to.be["true"];
        });
      });
    });
  });

}).call(this);
