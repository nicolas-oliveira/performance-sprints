const sprintCharts = document.getElementById('sprintCharts');
const gainCharts = document.getElementById('gainCharts');

let gtxSprint = sprintCharts.getContext('2d');
let gtxGain = gainCharts.getContext('2d');

const labels = ['1°', '2°', '3°', '4°', '5°', '6°', '7°', '8°'];

const dataOfGtxSprint =  {
  labels: labels,
  datasets: [{
      label: 'Sprints',
      backgroundColor: '#9d27bd',
      borderColor: '#9d27bd',
      data: [1759, 984, 1095, 480, 747, 1219, 1224, 1217]
  }]
};

const dataOfGtx = {
  labels: labels,
  datasets: [{
    label: 'Ganho %',
    backgroundColor: '#ff2e31',
    data: [0, -44, 11, -56, 55, 63, 0.41, 0.57]
  }]
};

var chart = new Chart(gtxSprint, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: dataOfGtxSprint,

    // Configuration options go here
    options: {}
});

var chart = new Chart(gtxGain, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: dataOfGtx,

  // Configuration options go here
  options: {}
});

const colors = {
  inactive: '#25282a',
  hover: '#2d3033',
  active: '#414346',
}

const tabs = [
  { tab: 'tabSprint', chart: 'sprintCharts' },
  { tab: 'tabGain', chart: 'gainCharts' }
];


const tabSprint = document.getElementById('tabSprint');
const tabGain = document.getElementById('tabGain');

tabSprint.style.backgroundColor = colors.active;

tabs.map((e) => {
  eval(e.tab).addEventListener('click', () => {
      eval(e.tab).style.backgroundColor = colors.active;
      eval(e.chart).style.display = 'block';
    tabs.filter((el) => {
      if(e != el) {
        eval(el.tab).style.backgroundColor = colors.inactive;
        eval(el.chart).style.display = 'none';
      }
    });
  });
});

tabs.map((e) => {
  eval(e.tab).addEventListener('mouseover', () => {
    if(eval(e.chart).style.display === 'none')
    eval(e.tab).style.backgroundColor = colors.hover;
  });
  eval(e.tab).addEventListener('mouseleave', () => {
    if(eval(e.chart).style.display === 'none')
    eval(e.tab).style.backgroundColor = colors.inactive;
  });
});

