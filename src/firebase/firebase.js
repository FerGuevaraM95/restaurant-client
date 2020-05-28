import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

import { firebaseConfig } from './config';

class Firebase {
  constructor() {
    // if(!app.apps.length) {
      //   app.initializeApp(firebaseConfig);
      // }
      app.initializeApp(firebaseConfig);
      this.db = app.firestore();
      this.storage = app.storage();
  };
};

export const firebase = new Firebase();
