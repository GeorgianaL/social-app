const admin = require("firebase-admin");
const settings = require("./settings");

const serviceAccount = require(settings.googleApplicationCredentials);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "your-database-url-here",
});

module.exports = {
  messaging: admin.messaging(),
};
