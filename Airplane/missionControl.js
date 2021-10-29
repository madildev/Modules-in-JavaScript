// Imported the all properties
import {availableAirplanes, flightRequirements, meetsStaffRequirements} from './airplane';
// Program to display fuelCapacity
function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}
// Call the displayFuelCapacity
displayFuelCapacity();
// Function to Display Staff Status
function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}
// call the diplayStaffStatus
displayStaffStatus();