describe "Chordmeister.ClassifiedLine", ->
  beforeEach ->
    @text = "oh say can you see"
    @cl = new Chordmeister.ClassifiedLine(@text)
  describe "#text", ->
    it "returns text", ->
      expect(@cl.text).to.equal(@text)

  describe "#type()", ->
    describe "for lyric lines", ->
      it "returns type LYRIC", ->
        lyric = "I feel good, dunna dunna dunna dun"
        cl = new Chordmeister.ClassifiedLine(lyric)
        expect(cl.type()).to.equal("LYRIC")

    describe "for chord lines", ->
      it "returns type CHORD", ->
        line = "G A D    C   A"
        cl = new Chordmeister.ClassifiedLine(line)
        expect(cl.type()).to.equal("CHORD")

      it "returns CHORD for complex slashed chords", ->
        line = "A/G B/F# F#m/G"
        cl = new Chordmeister.ClassifiedLine(line)
        expect(cl.type()).to.equal("CHORD")

      it "returns CHORD for minor chords", ->
        line = "Am Em F#m"
        cl = new Chordmeister.ClassifiedLine(line)
        expect(cl.type()).to.equal("CHORD")

    describe "for headings", ->
      it "returns HEADING for 'chorus'", ->
        line = "CHORUS"
        cl = new Chordmeister.ClassifiedLine(line)
        expect(cl.type()).to.equal("HEADING")

      it "returns HEADING for 'verse 1'", ->
        line = "verse 1"
        cl = new Chordmeister.ClassifiedLine(line)
        expect(cl.type()).to.equal("HEADING")

      it "returns HEADING for 'bridge'", ->
        line = "bridge"
        cl = new Chordmeister.ClassifiedLine(line)
        expect(cl.type()).to.equal("HEADING")

    describe "for spacers", ->
      it "returns SPACER for blank line", ->
        line = "\n"
        cl = new Chordmeister.ClassifiedLine(line)
        expect(cl.type()).to.equal("SPACER")

      it "returns SPACER for spacey blank line", ->
        line = "\t  "
        cl = new Chordmeister.ClassifiedLine(line)
        expect(cl.type()).to.equal("SPACER")

      it "returns SPACER for nothing in the line", ->
        line = ""
        cl = new Chordmeister.ClassifiedLine(line)
        expect(cl.type()).to.equal("SPACER")
