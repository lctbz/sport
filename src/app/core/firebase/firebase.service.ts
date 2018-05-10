import * as firebase from 'firebase';
import { Config } from './config';

var configdata: Config;

var config = {
  apiKey: configdata.apiKey,
  authDomain: configdata.authDomain,
  databaseURL: configdata.databaseURL,
  projectId: configdata.projectId,
  storageBucket: configdata.storageBucket,
  messagingSenderId: configdata.messagingSenderId
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