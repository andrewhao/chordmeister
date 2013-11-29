describe "#lyrics", ->
  it "accesses constructed lyric", ->
    c = new Foo("lyric")
    c.lyrics.should.equal("lyric")