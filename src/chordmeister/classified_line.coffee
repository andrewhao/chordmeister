class ClassifiedLine
  constructor: (@text) ->
    @debug = false

  type: ->
    if @isChord()
      "CHORD"
    else if @isHeading()
      "HEADING"
    else if @isBlank()
      "SPACER"
    else
      "LYRIC"

  isChord: ->
    tokens = @text.replace(/\s+/gi, " ").split(" ")
    retVal = true
    tokens.forEach (word) =>
      isChord = word.match(@chordRegex)
      console.log "word #{word} is #{if isChord? then "definitely" else "not"} a chord" if @debug
      if !isChord
        retVal = false
        return
    retVal

  isHeading: ->
    @text.match(@headingRegex)

  isBlank: ->
    @text.match(@blankRegex)


  blankRegex: /^[\s]*$/gi

  headingRegex: /^chorus|verse|bridge/gi

  # Thanks to https://github.com/jessegavin/jQuery-Chord-Transposer/blob/master/jquery.transposer.js
  chordRegex: /^[A-G][b\#]?(2|5|6|7|9|11|13|6\/9|7\-5|7\-9|7\#5|7\#9|7\+5|7\+9|7b5|7b9|7sus2|7sus4|add2|add4|add9|aug|dim|dim7|m\/maj7|m6|m7|m7b5|m9|m11|m13|maj7|maj9|maj11|maj13|mb5|m|sus|sus2|sus4)*(\/[A-G][b\#]*)*$/

`export default = ClassifiedLine`
