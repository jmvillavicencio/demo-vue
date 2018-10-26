import { mapGetters, mapActions } from 'vuex';
import { Doughnut } from 'vue-chartjs';
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
  extends: Doughnut,
  data() {
    return {
      colors: ['#FDD835', '#64DD17', '#6A1B9A', '#03A9F4', '#C62828', '#26A69A', '#43A047', '#FFB300', '#C2185B',  '#5E35B1'],
    };
  },
  beforeMount() {
    this.$store.dispatch('github/fetchRepos');
  },
  mounted() {
    this.buildChart();
  },
  computed: {
    ...mapGetters({
      reposList: 'github/repos',
    }),
    labels() {
      return Object.keys(this.reposList);
    },
    data() {
      return Object.values(this.reposList);
    },
    backgroundColors() {
      return this.labels.map((e, i) => this.colors[i] || this.colors[0]);
    },
  },
  methods: {
    buildChart() {
      this.renderChart({
        labels: this.labels,
        datasets: [
          {
            backgroundColor: this.backgroundColors,
            data: this.data,
          },
        ]
      }, {responsive: true, maintainAspectRatio: false});
    },
  },
  watch: {
    reposList() {
      this.buildChart();
    },
  },
};
