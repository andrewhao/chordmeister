describe "Parser", ->
  @text = "G A D\nOh say can you see"
  @p = new Parser(@text)

  describe "#lines", ->
    it "returns a list of split lines", ->
      expect(@p.lines).to.equal(["G A D", "Oh say can you see"])

  describe "#parse", ->
    it "returns a list of ClassifiedLines", ->
      p = @p.parse
      p.forEach (cl) ->
        expect(cl instanceof ClassifiedLine).to.be.true
