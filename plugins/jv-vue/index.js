import Vue from 'vue';
import jvList from './components/JvList';
import jvListTile from './components/JvListTile';
import jvListTileTitle from './components/JvListTileTitle';
import jvListTileIcon from './components/JvListTileIcon';
import jvJobCard from './components/JvJobCard';
import jvJobsTabItemCard from './components/JvJobsTabItemCard';

const JV = {
  install(Vue, options) {
    Vue.component(jvList.name, jvList);
    Vue.component(jvListTile.name, jvListTile);
    Vue.component(jvListTileTitle.name, jvListTileTitle);
    Vue.component(jvListTileIcon.name, jvListTileIcon);
    Vue.component(jvJobCard.name, jvJobCard);
    Vue.component(jvJobsTabItemCard.name, jvJobsTabItemCard);
  },
};

export default JV;
