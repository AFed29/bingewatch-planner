const Bingewatch = function (tvShow, hoursPerDay) {
  this.tvShow = tvShow;
  this.hoursPerDay = hoursPerDay;
}

Bingewatch.prototype.numberOfDaysToWatch = function () {
  const numberOfDaysToWatch = (this.tvShow.getTotalRuntime()) / (this.hoursPerDay * 60);
  return numberOfDaysToWatch;
};

module.exports = Bingewatch;
