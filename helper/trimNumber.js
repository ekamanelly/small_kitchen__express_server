module.exports.trimNumber = function (number, precision) {
  var array = number.toString();
  // console.log(number);
  if (array.includes(".")) {
    arrayWithPeriod = number.toString().split(".");
    arrayWithPeriod.push(arrayWithPeriod.pop().substring(0, precision));
    var trimmedNumber = arrayWithPeriod.join(".");
    return Number(trimmedNumber);
  } else {
    return Number(number);
  }
};
