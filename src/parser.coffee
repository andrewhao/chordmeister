class @Parser
  constructor: (@text) ->
    @classified_lines = []

  lines: ->
    @text.split('\n')

  parse: ->
    @classified_lines = []
    @lines().forEach (l, i) =>
      @classified_lines.push new ClassifiedLine(l)
    @classified_lines

  chordLines: ->
    retVal = {}
    @classified_lines.forEach (l, i) ->
      retVal[i] = l.text if l.type() == "CHORD"
    retVal

  lyricLines: ->
    retVal = {}
    @classified_lines.forEach (l, i) ->
      retVal[i] = l.text if l.type() == "LYRIC"
    retVal