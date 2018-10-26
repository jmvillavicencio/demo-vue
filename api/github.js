const mockedCommits = require('../static/mocks/githubCommits.json');
const mockedRepos = require('../static/mocks/githubRepos.json');

const getCommits = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedCommits);
    }, 7100);
  });
}

const getRepos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedRepos);
    }, 700);
  });
}

export default {
  getCommits,
  getRepos,
};
