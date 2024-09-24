console.log(__filename);
console.log(__dirname);

var firstName = "Mustafa";
var log = function (name) {
  console.log(name);
};

exports = {
  firstName,
  log,
};
