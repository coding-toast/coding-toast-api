module.exports = {
  timeout: 3000,
  load: {
    before: [],
    order: [
      "Define the hooks' load order by putting their names in this array in the right order",
    ],
    after: [],
  },
  mailchimp: {
    enabled: true,
    token: "b0cea36fd07952375b7c8e4b4413fe5d-us10",
  },
};
