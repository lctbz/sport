import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAlU7lsvj209hgVszwxXiD8uaP9OPx7PwQ",
  authDomain: "sport-e1e14.firebaseapp.com",
  databaseURL: "https://sport-e1e14.firebaseio.com",
  projectId: "sport-e1e14",
  storageBucket: "sport-e1e14.appspot.com",
  messagingSenderId: "926244713914"
};
firebase.initializeApp(config);

var database = firebase.database();

export class FirebaseService {

  writeData() {
    database.ref().push(
      {
        "Cadence": 154,
        "Calories": 699,
        "Date": "10/05/2018",
        "Distance": 9.22,
        "FCM": 157,
        "Foulée": 1.15,
        "Record": {
          "1km": "5:20.0",
          "5km": "0:28:17"
        },
        "Temps": "0:52:00",
        "Type": "Running"
      }
    )
  }

  readData() {
    return firebase.database().ref().once('value').then(function (snapshot) {
      console.log(snapshot.val());
    })
  }
}