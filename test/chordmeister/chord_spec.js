(function() {
  require(["chordmeister/chord"], function(Chord) {
    return describe("Chord", function() {
      beforeEach(function() {
        return this.chord = new Chord;
      });
      return it("is an instance of Chord", function() {
        return expect(this.chord instanceof Chord).to.be["true"];
      });
    });
  });

}).call(this);
