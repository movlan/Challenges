/**
 * @param {string[]} emails
 * @return {number}
 */
let numUniqueEmails = (emails) => {
  let result = 0;
  const uniqueEmails = [];

  emails.forEach((email) => {
    email = email.replace(/\+.+@/gi, "@").split("@");
    email[0] = email[0].replace(/\./gi, "");
    const uniqueEmail = email.join("@");

    if (!uniqueEmails.includes(uniqueEmail)) {
      uniqueEmails.push(uniqueEmail);
      result++;
    }
  });

  return result;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);
