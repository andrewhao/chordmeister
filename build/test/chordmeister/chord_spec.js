(function() {
  describe("Chordmeister.Chord", function() {
    beforeEach(function() {
      return this.chord = new Chordmeister.Chord;
    });
    return it("is an instance of Chord", function() {
      return expect(this.chord instanceof Chordmeister.Chord).to.be["true"];
    });
  });

}).call(this);
