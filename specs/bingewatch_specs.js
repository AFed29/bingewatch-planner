const assert = require('assert');
const Bingewatch = require('../bingewatch.js');
const TvShow = require('../tv_show.js');
const Season = require('../season.js');

describe('Bingewatch', function () {

  let season1, season2, season3, season4, season5;
  let season6, season7, season8, season9;

  let seasons;

  let archer;

  let bingewatch;

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

    archer = new TvShow('Archer', seasons);

    bingewatch = new Bingewatch(archer, 6);
  });

  it('should be able to calculate the number of days to bingewatch given hours per day watched', function () {
    const actual = bingewatch.numberOfDaysToWatch();
    assert.strictEqual(actual, 5.611111111111111);
  });
});
