const admin = require("firebase-admin");
const settings = require("./settings");

const serviceAccount = require(settings.googleApplicationCredentials);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "gs://social-app-89067.appspot.com/",
});

module.exports = {
  messaging: admin.messaging(),
};
