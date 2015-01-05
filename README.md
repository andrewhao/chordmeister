chordmeister
============

[![Build Status](https://travis-ci.org/andrewhao/chordmeister.png?branch=master)](https://travis-ci.org/andrewhao/chordmeister)
[![Code Climate](https://codeclimate.com/github/andrewhao/chordmeister.png)](https://codeclimate.com/github/andrewhao/chordmeister)

AMD library to take guitar chord text from the Internet (e.g. from [Ultimate Guitar](http://www.ultimate-guitar.com/)) and allow you to manipulate them like objects.

## Installation

    $ npm install
    $ npm install -g grunt-cli
    $ npm install -g bower
    $ bower install

## Generating a build

    $ grunt

Source files will appear in `builds/chordmeister.js`

## Usage

```javascript

songText = "
A                 E                 F#m             D
  Anger he smiles towering in shiny metallic purple armor
A                 E
  Green Jealousy, envy waits behind him
F#m               D
  Her fiery green gown sneers at the grassy ground
"

require(["chordmeister/parser"], function(parser) {
    Parser = parser.default;
    p = new Parser(songText);
    p.chordLines()[0].text // "A                 E                 F#m             D"
    p.lyricLines()[0].text // "Anger he smiles towering in shiny metallic purple armor"
}

song = new SongGenerator(songText);
song.lines # => [<Line>, <Line>]
line = song.lines[0]
line.phrases # => [<Phrase>, <Phrase>]


line = new Line("Oh say can you see", "A      G      ")
line.phrases
line.phrases # => [<Phrase>, <Phrase>]

phrase = line.phrases[0]
phrase.lyric // "Oh say"
phrase.chord // "A"

```

## Phrases

Phrases are corresopnding chords and lyrics that belong together in the
flow of the song.

```
A
Anger he smiles
```

```
E
towering in shiny
```

```
lyrics
chords

lines that are chords
lines that are lyrics

phrase: words that correspond to a single chord
line: collection of phrases to express musical/lyrical idea
song: collection of lines
```

```js
// lines => ["oh say can you see", "by the dawn's early light"]
// chords => ["a    b", "g     a"]
// lines = [
// {"lyric": "oh say can you see",
    "chords": "a     b"}
p = new PhraseGenerator(lines, chords)
lines = p.lines() // a collection of Phrase obj
line = lines[0]
line.phrases
// [{"chord": "A"
//   "lyric": "Anger he smiles"}, ...]
```

## Testing

    $ grunt test

