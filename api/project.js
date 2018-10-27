import axios from '../plugins/axios.js'

const getAll = async () => {
  let {data} = await axios.get('experience/projects');
  return data;
}

export default {
  getAll,
};
