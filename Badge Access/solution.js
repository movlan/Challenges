const badgeAccess = (records) => {
  // initiate result array
  const result = [[], []];
  // result[0] --> all employees who didn't use their badges to exit
  // result[1] --> all employees who didn't use their badges to enter

  // crate track object { _name_: _status_ } _status_ : "in" or "out"
  const track = {};

  records.forEach((rec) => {
    // check if this record employee is in track
    if (track[rec[0]] === undefined) {
      // if no record in track then add record
      // if this employee is entering just track it
      if (rec[1] === "enter") {
        track[rec[0]] = "in";
      } else {
        // employee brake the rule did not use badge upon enter add name to result[1] if not exists
        if (!result[1].includes(rec[0])) {
          result[1].push(rec[0]);
        }
        // employee exited
        track[rec[0]] = "out";
      }
    } else {
      // we have record of employee check rules
      if (rec[1] === "enter" && track[rec[0]] === "out") {
        //just change record to out
        track[rec[0]] = "in";
      } else if (rec[1] === "enter" && track[rec[0]] === "in") {
        // broke rule add to result[0] if not exists
        if (!result[0].includes(rec[0])) {
          result[0].push(rec[0]);
        }
        // employee entered room
        track[rec[0]] = "in";
      } else if (rec[1] === "exit" && track[rec[0]] === "in") {
        // change track to out
        track[rec[0]] = "out";
      } else {
        // employee brake the rule did not use badge upon enter add name to result[1] if not exists
        if (!result[1].includes(rec[0])) {
          result[1].push(rec[0]);
        }
        // employee exited
        track[rec[0]] = "out";
      }
    }
  });

  // room should be empty check record if all out
  for (let key in track) {
    if (track[key] === "in") {
      if (!result[0].includes(key)) {
        result[0].push(key);
      }
    }
  }

  return result;
};

let badge_records_1 = [
  ["Martha", "exit"],
  ["Paul", "enter"],
  ["Martha", "enter"],
  ["Martha", "exit"],
  ["Jennifer", "enter"],
  ["Paul", "enter"],
  ["Curtis", "exit"],
  ["Curtis", "enter"],
  ["Paul", "exit"],
  ["Martha", "enter"],
  ["Martha", "exit"],
  ["Jennifer", "exit"],
  ["Paul", "enter"],
  ["Paul", "enter"],
  ["Martha", "exit"],
];

console.log(badgeAccess(badge_records_1)); // expected => [["Curtis", "Paul"], ["Martha", "Curtis"]]
