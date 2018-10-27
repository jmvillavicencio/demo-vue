import axios from '../plugins/axios.js'

const ping = async () => {
  try {
    let { data } = await axios.get('ping');
    return !!data;
  } catch (e) {
    return false;
  }
}
export default {
  ping,
};
