const Mailchimp = require('mailchimp-api-v3');

module.exports = strapi => {
  return {
    async initialize() {
      const { token } = strapi.config.hook.mailchimp
      strapi.services.mailchimp = new Mailchimp(token) 
    },
  };
}