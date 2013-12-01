@Chordmeister ||= {}
class @Chordmeister.Parser
  constructor: (@text) ->

  lines: ->
    return @lineArray if @lineArray?

    @lineArray = []
    lines = @text.split('\n')
    lines.forEach (l, i) =>
      @lineArray.push(new Chordmeister.ClassifiedLine(l))
    @lineArray

  chordLines: ->
    retVal = {}
    @lines().forEach (l, i) ->
      retVal[i] = l.text if l.type() == "CHORD"
    retVal

  lyricLines: ->
    retVal = {}
    @lines().forEach (l, i) ->
      retVal[i] = l.text if l.type() == "LYRIC"
    retVal

