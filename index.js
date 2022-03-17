const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }

//   console.log('It worked! Returned IP: ', ip);
// });

// fetchCoordsByIP('174.88.8.253', (error, coordinates) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:', coordinates);
// });

const coordinates = { latitude: '43.6655', longitude: '-79.4204' };

// fetchISSFlyOverTimes(coordinates, (error, passTimes) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:', passTimes);
// });

const printPassTimes = (passTimes) => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}; 


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  printPassTimes(passTimes);
});