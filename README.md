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
```

## Testing

    $ grunt test

