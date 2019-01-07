import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase' ;

// import { config } from './firebaseConfig';

export const config = {
  production : false,
    firebase: {
    apiKey: "--insert your api key -----",
    authDomain: "insert from firebase config",
    databaseURL: "insert your own database URL",
    projectId: "your project ID",
    storageBucket: "insert the ID",
    messagingSenderId: "insert your own messaging id"
    }
  };
  

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})


export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp(config.firebase);
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
