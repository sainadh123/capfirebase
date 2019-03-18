import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit() {

    // Initialize Firebase

    const config = {
      apiKey: "AIzaSyAurIhbL4GPAX8F25Rr6EAHgjn6wcvCCFE",
      authDomain: "nodeangular-bd232.firebaseapp.com",
      databaseURL: "https://nodeangular-bd232.firebaseio.com",
      projectId: "nodeangular-bd232",
      storageBucket: "nodeangular-bd232.appspot.com",
      messagingSenderId: "709434773700"
    };
    firebase.initializeApp(config);
  } //oninit
}
