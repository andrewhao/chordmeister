describe "ClassifiedLine", ->
  beforeEach ->
    @text = "oh say can you see"
    @cl = new ClassifiedLine(@text)
  describe "#text", ->
    it "returns text", ->
      expect(@cl.text).to.equal(@text)

  describe "#type()", ->
    describe "for lyric lines", ->
      it "returns type LYRIC", ->
        lyric = "I feel good, duna duna duna dun"
        cl = new ClassifiedLine(lyric)
        expect(cl.type()).to.equal("LYRIC")

    describe "for chord lines", ->
      it "returns type CHORD", ->
        chord = "G A D    C   A"
        cl = new ClassifiedLine(chord)
        expect(cl.type()).to.equal("CHORD")

      it "returns CHORD for complex slashed chords", ->
        chord = "A/G B/F#"
        cl = new ClassifiedLine(chord)
        expect(cl.type()).to.equal("CHORD")
