import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const getProducts = functions.https.onRequest((_, response) => {
  const promise = admin
    .firestore()
    .collection("products")
    .get();

  promise
    .then(snapshot => {
      const data = snapshot;
      response.send(data);
    })
    .catch(error => {
      console.log(error);
    });
});
