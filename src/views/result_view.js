const ResultView = function () {

}

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `You have input ${result} words.`;
};

module.exports = ResultView;
