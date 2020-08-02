// Get all elements in DOM to render graph
const sprintCharts = document.getElementById('sprintCharts');
const gainCharts = document.getElementById('gainCharts');

// Create elements of graphs in canvas
let gtxSprint = sprintCharts.getContext('2d');
let gtxGain = gainCharts.getContext('2d');

// Data format for fill graph correctly
const datagtx =  {
  sprint: {
    labels: data.weeks, // data.js
    datasets: [{
      label: 'Sprints',
      backgroundColor: '#9d27bd',
      borderColor: '#9d27bd',
      data: data.sprints,
    }]
  },
  gain: {
    labels: data.weeks,
    datasets: [{
      label: 'Ganho',
      backgroundColor: '#ff2e31',
      data: data.percentOfHighest
    }]
  }
};

// Initialize instace of Chart
var chart = new Chart(gtxSprint, {
    type: 'line',
    data: datagtx.sprint,
    options: {}
});

var chart = new Chart(gtxGain, {
  type: 'bar',
  data: datagtx.gain,
  options: {}
});
