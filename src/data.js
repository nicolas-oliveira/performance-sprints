
// The first week begins in May 25 
const sprints = [ 1759, 984, 1095, 480, 747, 1219, 1224, 1217, 136, 967 ];

let data = {
  sprints: sprints,
  // Get te highest number historicaly and get the gain percent of it
  get percentOfHighest() {
    const highest = Math.max.apply(null, sprints); // Math.max(...sprints); // ES6
    return this.sprints.map(function(n) {
      return (((n - highest) / highest) * 100).toFixed(2);
    });
  },
  // Get the gain of array with the last number, two by two
  // [120 130 140] => (130-120)/120 , (140-130)/130 => 0,083 , 0,076 => 8,3% , 7,6%
  get percentOfLast() {
    return this.sprints.map(function(n){
      
    })
  },
  // Get the number of sprints and create a string 'N°' for it
  get weeks() {
    return this.sprints.map(function(week, i) {
      return `${i+1}°`
    });
  }
};

console.log(data.percentOfHighest)