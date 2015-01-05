require([
  'chordmeister/line'
], function(line) {
  Line = line.default

  describe("Line", function() {
    beforeEach(function() {
      this.subject = new Line(
        "Oh say can you see",
        "A      G          "
      );
    });

    describe("#phrases", function() {
      it("generates a set of two phrases", function() {
        expect(this.subject.phrases().length).to.eq(2)
      });

      it("correctly splits the lines to create phrases", function() {
        var first = this.subject.phrases()[0]
        var second = this.subject.phrases()[1]
        expect(first.lyric).to.eq("Oh say")
        expect(first.chord).to.eq("A")
        expect(second.lyric).to.eq("can you see")
        expect(second.chord).to.eq("G")
      });
    });
  });
});
