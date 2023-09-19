const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { credential } = require("firebase-admin");

const serviceAccount = require("./the-radja-kuphie-firebase-adminsdk-fioas-55c48dc1f5.json");

initializeApp({
  credential: credential.cert(serviceAccount),
});

module.exports = {
  getAuth,
};
