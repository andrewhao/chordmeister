require(["chordmeister/chord"], function(chord) {
  Chord = chord.default

  describe("Chord", function() {
    beforeEach(function() {
      this.chord = new Chord;
    });
    it("is an instance of Chord", function() {
      return expect(this.chord instanceof Chord).to.be["true"];
    });
  });
});
