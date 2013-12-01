describe "Chordmeister.Chord", ->
  beforeEach ->
    @chord = new Chordmeister.Chord
  it "is an instance of Chord", ->
    expect(@chord instanceof Chordmeister.Chord).to.be.true
