const classroomIntervals = (...intervals) => {
  const classrooms = [];
  for (let interval of intervals) {
    if (classrooms.length === 0) {
      classrooms.push([interval]);
    } else {
      for (let classroom of classrooms) {
        for (let timeSlot of classroom) {
          if (interval[1] < timeSlot[0] || interval[0] > timeSlot[1]) {
              console.log(interval, timeSlot);
          //     classroom.push(interval);
          //   } else {
          //     classrooms.push([interval]);
          //   }
        }
      }
    }
  }
};

console.log(classroomIntervals([30, 75], [0, 50], [60, 150]));
