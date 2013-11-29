class @RawSong
  constructor: (@text) ->

  parser: ->
    @p = new Parser(@text)
    @p.parse()
    @p

  chordLines: ->
    @parser().chordLines()

  lyricLines: ->
    @parser().lyricLines()

