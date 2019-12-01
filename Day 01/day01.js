const moduleMasses = require("./input.json");

const calculateFuelRequiredForMass = mass => {
  return Math.floor(mass / 3) - 2;
};

let total = 0;
moduleMasses.forEach(mass => {
  total += calculateFuelRequiredForMass(mass);
});
console.log(total);

const getFuel = moduleMasses
  .map(mass => {
    let acc = 0;
    let current = calculateFuelRequiredForMass(mass);
    while (current > 0) {
      acc += current;
      current = calculateFuelRequiredForMass(current);
    }
    return acc;
  })
  .reduce((acc, mass) => acc + mass);

console.log(getFuel);
