const mockedAnswers = require('../static/mocks/stackoverflow.json');
const getAnswers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedAnswers);
    }, 1900);
  });
}

export default {
  getAnswers,
};
