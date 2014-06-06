require ["chordmeister/chord"], (Chord) ->
  describe "Chord", ->
    beforeEach ->
      @chord = new Chord
    it "is an instance of Chord", ->
      expect(@chord instanceof Chord).to.be.true
