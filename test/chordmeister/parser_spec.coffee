require ["chordmeister/parser", "chordmeister/classified_line"], (Parser, ClassifiedLine) ->
  describe "Parser", ->
    beforeEach ->
      @chord1 = "A B C"
      @chord2 = "G D C"
      @line1 = "Oh say does that star spangled"
      @line2 = "banner yet waaaa-ave!"
      @text = [@chord1, @line1, @chord2, @line2].join("\n")
      @parser = new Parser(@text)
  
    describe "#lines", ->
      it "returns a list of ClassifiedLines", ->
        p = @parser.lines()
        p.forEach (cl) ->
          expect(cl instanceof ClassifiedLine).to.be.true
  
    describe "#text", ->
      it "returns the text it was initialized with", ->
        expect(@parser.text).to.eql(@text)
  
    describe "#chordLines", ->
      it "returns the chord and the line number it is associated with", ->
        expect(@parser.chordLines()).to.eql(
          0: @chord1
          2: @chord2
        )
  
    describe "#lyricLines", ->
      it "returns the chord and the line number it is associated with", ->
        expect(@parser.lyricLines()).to.eql
          1: @line1
          3: @line2
  
    describe "#lyricText", ->
      it "returns a lyric on each line, in the order it was given", ->
        expect(@parser.lyricText()).to.eql("#{@line1}\n#{@line2}")
