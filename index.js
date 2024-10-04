const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// Assume batteryBatches is already defined as an array of battery counts

// Use reduce to sum all the battery counts
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries);  // Output: 55
