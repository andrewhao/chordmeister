require ['chordmeister/song'], (Song) ->
  describe "Song", ->
    describe "#lyrics", ->
      it "accesses constructed lyric", ->
        s = new Song()
