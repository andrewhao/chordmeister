require(["chordmeister/phrase"], function(phrase) {
  Phrase = phrase.default

  describe("Phrase", function() {
    beforeEach(function() {
      this.subject = new Phrase(
        "Oh say can you see",
        "A"
      )
    });

    describe("#lyric", function() {
      it("returns the initialized lyric", function() {
        expect(this.subject.lyric).to.eq("Oh say can you see")
      });
    });

    describe("#chord", function() {
      it("returns the initialized chord", function() {
        expect(this.subject.chord).to.eq("A")
      });
    });
  });
});
