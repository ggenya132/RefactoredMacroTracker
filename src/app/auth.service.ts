import { Injectable } from '@angular/core';
import * as fireBase from 'firebase';
@Injectable()
export class AuthService {

  constructor() { }


  signUp(email: string, password: string) {
    console.log(email);
    console.log(password);
    fireBase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error));
  }
}
