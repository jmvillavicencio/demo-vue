import axios from '../plugins/axios.js'

const getAnswers = async () => {
  let {data} = await axios.get('stackoverflow/totalAnswersByDate');
  return data;
};

export default {
  getAnswers,
};
