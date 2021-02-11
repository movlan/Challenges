const isAvailable = (existingMeetings, newStart, newEnd) => {
  for (let i = 0; i < existingMeetings.length; i++) {
    // if newStart time before scheduled meeting start time

    if (newStart < existingMeetings[i][0]) {
      // return false if newEnd is bigger than starting time of the scheduled meeting

      if (newEnd > existingMeetings[i][0]) return false;
    } else {
      // newStart is after scheduled meeting start time
      // return false if newStart is before ending time of the scheduled meeting

      if (newStart < existingMeetings[i][1]) return false;
    }

    /* 

    *** OLD SOLUTION DIDN'T WORK PROPERLY ***
    
    //   if (newStart < existingMeetings[i][0] && newEnd > existingMeetings[i][0]) {
    //     return false;
    //   }

    //   // if newStart is after start of scheduled meeting check that
    //   // it is also after scheduled meeting end
    //   if (
    //     newStart > existingMeetings[i][0] ||
    //     newStart < existingMeetings[i][1]
    //   ) {
    //     return false;
    //   }
    
    */
  }

  // if we get here after iteration we can schedule return true
  return true;
};

const meetings = [
  [1230, 1300], // 12:30 PM to 1:00 PM
  [845, 900], // 8:45 AM to 9:00 AM
  [1300, 1500], // 1:00 PM to 3:00 PM
];

// Expected output:

console.log(isAvailable(meetings, 845, 849)); // => false
console.log(isAvailable(meetings, 900, 1230)); // => true
console.log(isAvailable(meetings, 850, 1240)); // => false
console.log(isAvailable(meetings, 1200, 1300)); // => false
console.log(isAvailable(meetings, 700, 1600)); // => false
console.log(isAvailable(meetings, 800, 845)); // => true
console.log(isAvailable(meetings, 1500, 1800)); // => true
console.log(isAvailable(meetings, 845, 859)); // => false
console.log(isAvailable(meetings, 846, 900)); // => false
console.log(isAvailable(meetings, 846, 859)); // => false
console.log(isAvailable(meetings, 845, 900)); // => false
console.log(isAvailable(meetings, 2359, 2400)); // => true
console.log(isAvailable(meetings, 930, 1600)); // => false
console.log(isAvailable(meetings, 800, 850)); // => false
console.log(isAvailable(meetings, 1400, 1600)); // => false
console.log(isAvailable(meetings, 1300, 1501)); // => false
