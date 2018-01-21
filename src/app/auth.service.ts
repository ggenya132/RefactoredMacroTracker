import { Injectable } from '@angular/core';
import * as fireBase from 'firebase';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class AuthService {
  errorOccurred = new Subject();
  error;
  token = '';
  constructor() { }


  signUp(email: string, password: string) {
    console.log(email);
    console.log(password);
    fireBase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error));
  }

  logIn(email: string, password: string) {

    fireBase.auth().signInWithEmailAndPassword(email, password).then(res => {
      console.log(res);
       fireBase.auth().currentUser.getIdToken().then(
         token => this.token = token
       );
      return res;
    }).catch(error => {
      this.error = error;
      this.errorOccurred.next(this.error);
    }
    );
  }

  getToken() {
    fireBase.auth().currentUser.getIdToken().then(
      token => this.token = token
    );
    return this.token;
  }

  getUser() {
    return fireBase.auth().currentUser;
  }
}

