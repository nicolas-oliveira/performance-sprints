const tabClass = document.querySelector('.tabs');

const colors = {
  inactive: '#25282a',
  hover: '#2d3033',
  active: '#414346',
}

const tabs = [
  { tab: 'tabSprint', chart: 'sprintCharts', name: 'Sprints' },
  { tab: 'tabGain', chart: 'gainCharts', name: 'Ganho' },
];

// Create tabs elements
tabs.map((e) => {
  const newTab = document.createElement('p');
  newTab.innerText = e.name;
  newTab.setAttribute('id', e.tab);
  tabClass.appendChild(newTab);
});

// Get DOM elements
const tabSprint = document.getElementById('tabSprint');
const tabGain = document.getElementById('tabGain');

// Create events in each element of tabs array
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

// Initialize the tabs: The first interation with [0] array
tabSprint.style.backgroundColor = colors.active;

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
