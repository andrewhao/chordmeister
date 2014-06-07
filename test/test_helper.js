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

console.log("here");

require(specs, function(require) {
  console.log("in the spec require block");
  mocha.setup('bdd');
  expect = chai.expect;
  // Why? Some async loading condition? Is there a cb I should be hooking into?
  setTimeout(function() {
    console.log("almost there")
    mocha.run();
  }, 1000);
})
