const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function () {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:text-submitted', (event) => {
    const textSubmitted = event.detail;
    const result = this.countWords(textSubmitted);
    PubSub.publish('WordCounter:result', result);
  })
};

WordCounter.prototype.countWords = function (string) {
  const words = string.split(' ');
  return words.length;
};

module.exports = WordCounter;
