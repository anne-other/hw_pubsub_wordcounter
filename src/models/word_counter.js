const WordCounter = function () {

};

WordCounter.prototype.countWords = function (string) {
  const words = string.split(' ');
  return words.length;
};

module.exports = WordCounter;
