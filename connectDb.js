// Imports the firebase-admin module
const { initializeApp, getApps, cert } = require("firebase-admin/app")
const { getFirestore } = require("firebase-admin/firestore")
// Imports credentials
const credentials = require("./credentials.json")

// establishes connection to firebase
exports.connectToFirebase = () => {
  if (!getApps().length) {
    initializeApp({
      credential: cert(credentials),
    })
  }
  return getFirestore()
}
