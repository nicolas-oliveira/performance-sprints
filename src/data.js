
// The first week begins in May 25 
const sprints = [ 1759, 984, 1095, 480, 747, 1219, 1224, 1217, 136, 967 ];

let data = {
  sprints: sprints,
  // Get te highest number historicaly and get the gain percent of it
  get percentOfHighest() {
    const highest = Math.max.apply(null, sprints); // Math.max(...sprints); // ES6
    return this.sprints.map(function(n) {
      return parseFloat((((n - highest) / highest) * 100).toFixed(2));
    });
  },
  // Get the gain of array with the last number, two by two
  // [120 130 140] => (130-120)/120 , (140-130)/130 => 0,083 , 0,076 => 8,3% , 7,6%
  get percentOfLast() {
    let calc = [0]; // Add inital value
    for(var i = 0; i < this.sprints.length; i++) {
      let percent = (this.sprints[i + 1] - this.sprints[i]) / this.sprints[i];
      calc.push(
        parseFloat((percent * 100).toFixed(2))
      );
    }
    calc = calc.slice(0,this.sprints.length); // Remove NaN element
    return calc;
  },
  // Get the number of sprints and create a string 'N°' for it
  get weeks() {
    return this.sprints.map(function(week, i) {
      return `${i+1}°`
    });
  }
};

console.log(data.percentOfLast)
console.log(data.percentOfHighest)
