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
      type: 'bar',
      label: 'Ganho relativo ao anterior',
      backgroundColor: '#ff2e31',
      data: data.percentOfLast
    },{
      type: 'bar',
      label: 'Ganho comparado com o maior',
      backgroundColor: '#ff2e',
      data: data.percentOfHighest
    }]
  },
};

// Initialize instace of Chart
var chart = new Chart(gtxSprint, {
    type: 'line',
    data: datagtx.sprint,
    options: {
      title: {
        display: true,
        text: "Rendimento em minutos por semana"
      },

    }
});

var chart = new Chart(gtxGain, {
  type: 'bar',
  data: datagtx.gain,
  options: {
    title: {
      display: true,
      text: "Ganho de rendimento relativo"
    },
  }
});
