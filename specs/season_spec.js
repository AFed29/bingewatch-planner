const assert = require('assert');
const Season = require('../season.js');

describe('Season', function () {

  let season;

  beforeEach( function () {
    season = new Season(1, 200);
  });

  it('should have a season number', function () {
    const actual = season.number;
    assert.strictEqual(actual, 1)
  });

  it('should have a runtime', function () {
    const actual = season.runtime;
    assert.strictEqual(actual, 200);
  });



});
