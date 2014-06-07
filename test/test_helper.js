// Configure and set up the tests.
require.config({
  baseUrl: "../build/"
})

var specs = [
  'chordmeister/chord_spec.js',
  'chordmeister/song_spec.js',
  'chordmeister/parser_spec.js',
  'chordmeister/classified_line_spec.js',
];

require(specs, function(require) {
  mocha.setup('bdd');
  expect = chai.expect;
  // Why? Some async loading condition? Is there a cb I should be hooking into?
  setTimeout(function() {
    mocha.run();
  }, 100);
})
