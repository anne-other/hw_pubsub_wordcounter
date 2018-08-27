const PubSub = require('../helpers/pub_sub.js');

const InputView = function () {

};

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (event) => {
    event.preventDefault();
    const textSubmitted = event.target.text.value;
    PubSub.publish('InputView:text-submitted', textSubmitted);
  });
};

module.exports = InputView;
