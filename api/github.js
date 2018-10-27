import axios from '../plugins/axios.js'

const getCommits = async () => {
  let {data} = await axios.get('github/commit/totalByDate');
  return data;
}

const getRepos = async () => {
  let {data} = await axios.get('github/repo/allParticipations');
  return data;
}

export default {
  getCommits,
  getRepos,
};
