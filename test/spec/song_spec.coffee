do ->
  describe "#lyrics", ->
    it "accesses constructed lyric", ->
      c = new Chord("lyric")
      c.lyrics.should.equal("lyric")