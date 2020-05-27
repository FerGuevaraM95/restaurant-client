import app from 'firebase/app';
import { firebaseConfig } from './config';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    // if(!app.apps.length) {
    //   app.initializeApp(firebaseConfig);
    // }
  };
};

export const firebase = new Firebase();
