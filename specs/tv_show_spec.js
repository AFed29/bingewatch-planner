const assert = require('assert');
const TvShow = require('../tv_show.js');
const Season = require('../season.js');

describe('TV Show', function () {

  let season1, season2, season3, season4, season5;
  let season6, season7, season8, season9;

  let seasons;

  let tvShow;


  beforeEach( function () {
    season1 = new Season(1, 200);
    season2 = new Season(2, 260);
    season3 = new Season(3, 260);
    season4 = new Season(4, 260);
    season5 = new Season(5, 260);
    season6 = new Season(6, 260);
    season7 = new Season(7, 200);
    season8 = new Season(8, 160);
    season9 = new Season(9, 160);

    seasons = [
      season1,
      season2,
      season3,
      season4,
      season5,
      season6,
      season7,
      season8,
      season9
    ];

    tvShow = new TvShow('Archer', seasons);
  });

  it('should have a name', function () {
    const actual = tvShow.name;
    assert.strictEqual(actual, 'Archer');
  });

  it('should contain seasons', function () {
    const actual = tvShow.seasons;
    assert.strictEqual(actual, seasons);
  });

  it('should be able to return the total runtime', function () {
    const actual = tvShow.getTotalRuntime();
    assert.strictEqual(actual, 2020);
  });

});
