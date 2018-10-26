import { mapGetters, mapActions } from 'vuex';
import { Line } from 'vue-chartjs';
import moment from 'moment';

let seed = Date.now();
function randomScalingFactor() {
  function rand(min, max) {
		min = min === undefined ? 0 : min;
		max = max === undefined ? 1 : max;
		seed = (seed * 9301 + 49297) % 233280;
		return min + (seed / 233280) * (max - min);
	};
	return Math.round(rand(10, 100));
}
export default {
  extends: Line,
  beforeMount() {
    this.$store.dispatch('github/fetchCommits');
  },
  mounted() {
    this.buildChart();
  },
  computed: {
    ...mapGetters({
      commitsList: 'github/commits',
    }),
  },
  methods: {
    buildChart() {
      this.renderChart({
        labels: Object.keys(this.commitsList).map(e => moment(e, 'x').format('DD-MM-YYYY')),
        datasets: [
          {
            label: 'Commits in github',
            backgroundColor: '#212121',
            data: Object.values(this.commitsList),
          },
        ]
      }, {responsive: true, maintainAspectRatio: false});
    },
  },
  watch: {
    commitsList() {
      this.buildChart();
    },
  },
};
