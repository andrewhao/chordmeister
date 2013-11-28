# A class enscapulating the raw text of a song
class Song
  constructor: (@lines)
  lyrics: ->
    console.log "outputting lyrics"

  chords: ->
    console.log "outputting chords"
