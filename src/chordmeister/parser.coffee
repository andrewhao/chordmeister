`import ClassifiedLine from 'chordmeister/classified_line'`
class Parser
  constructor: (@text) ->

  lines: ->
    return @lineArray if @lineArray?

    @lineArray = []
    lines = @text.split('\n')
    lines.forEach (l, i) =>
      @lineArray.push(new ClassifiedLine(l))
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

  lyricText: ->
    text = []
    for num, line of @lyricLines()
      text.push(line)
    text.join('\n')

`export default = Parser`
