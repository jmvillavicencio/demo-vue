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
    this.$store.dispatch('stackoverflow/fetchAnswers');
  },
  mounted() {
    this.buildChart();
  },
  computed: {
    ...mapGetters({
      answersList: 'stackoverflow/answers',
    }),
  },
  methods: {
    buildChart() {
      this.renderChart({
        labels: Object.keys(this.answersList).map(e => moment(e, 'x').format('DD-MM-YYYY')),
        datasets: [
          {
            label: 'Answers in StackOverflow',
            backgroundColor: '#FF6D00',
            data: Object.values(this.answersList),
          },
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
  },
  watch: {
    answersList() {
      this.buildChart();
    },
  },
};
