const TvShow = function (name, seasons) {
  this.name = name;
  this.seasons = seasons;
}

TvShow.prototype.getTotalRuntime = function () {
  let total = 0;
  for (const season of this.seasons) {
    total += season.runtime;
  }
  return total;
};

module.exports = TvShow;
