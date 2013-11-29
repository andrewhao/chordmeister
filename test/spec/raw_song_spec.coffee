describe "RawSong", ->
  beforeEach ->
    @chord1 = "A B C"
    @chord2 = "G D C"
    @line1 = "Oh say does that star spangled"
    @line2 = "banner yet waaaa-ave!"
    @text = [@chord1, @line1, @chord2, @line2].join("\n")
    @rawSong = new RawSong(@text)

  describe "#text", ->
    it "returns the text it was initialized with", ->
      expect(@rawSong.text).to.equal(@text)

  describe "#chordLines", ->
    it "returns the chord and the line number it is associated with", ->
      expect(@rawSong.chordLines()).to.equal(
        0: @chord1
        2: @chord2
      )

  describe "#lyricLines", ->
    it "returns the chord and the line number it is associated with", ->
      expect(@rawSong.lyricLines()).to.equal
        1: @line1
        3: @line2
