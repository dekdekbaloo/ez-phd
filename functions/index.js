/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const functions = require("firebase-functions");

admin.initializeApp(functions.config().firebase);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.addToHallOfFame = onRequest({ cors: true }, (request, response) => {
  logger.info("Add to hall of fame", { structuredData: true });
  if (request.method === "POST") {
    const now = new Date();
    admin
      .database()
      .ref(`hall-of-fame/${request.body.id}`)
      .update({ ...request.body, createdAt: now })
      .catch(logger.error);

    response.send("Hello from Firebase!");
  } else {
    response.sendStatus(404);
  }
});
