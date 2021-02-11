# Manage calendars

## Instructions

We are writing a tool to help users manage their calendars. Given an unordered list of times of day when someone is busy, write a function that tells us whether they're available during a specified period of time.

Each time is expressed as an integer using 24-hour notation, such as 1200 (12:00), 1530 (15:30), or 800 (8:00).

## Example

Sample input: `meetings = [ [1230, 1300], // 12:30 PM to 1:00 PM [845, 900], // 8:45 AM to 9:00 AM [1300, 1500] // 1:00 PM to 3:00 PM ]`

Expected output: `isAvailable(meetings, 915, 1215) => true`\
`isAvailable(meetings, 900, 1230) => true`\
`isAvailable(meetings, 850, 1240) => false`\
`isAvailable(meetings, 1200, 1300) => false`\
`isAvailable(meetings, 700, 1600) => false`\
`isAvailable(meetings, 800, 845) => true`\
`isAvailable(meetings, 1500, 1800) => true`\
`sAvailable(meetings, 845, 859) => false`\
`sAvailable(meetings, 846, 900) => false`\
`sAvailable(meetings, 846, 859) => false`\
`sAvailable(meetings, 845, 900) => false`\
`sAvailable(meetings, 2359, 2400) => true`\
`sAvailable(meetings, 930, 1600) => false`\
`sAvailable(meetings, 800, 850) => false`\
`sAvailable(meetings, 1400, 1600) => false`\
`isAvailable(meetings, 1300, 1501) => false`\
`n = number of meetings`\
`r = minutes in range of meetings`
