// Created an Array of the availableAirplanes
let availableAirplanes = [{
 name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
}, 
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants']
}];
// A property of Flight Requirements
let flightRequirements = {
  requiredStaff: 4,
};
// A function to find if plane meets Staff Requirements
function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};
// Export the modules to the other files
export { availableAirplanes, flightRequirements, meetsStaffRequirements};