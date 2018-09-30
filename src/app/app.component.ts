import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase' ;


const config = {
  apiKey: "AIzaSyD6RYfTcwCwff6U3Tn1fGIPLlNL_UAp8cQ",
  authDomain: "diarymuaz.firebaseapp.com",
  databaseURL: "https://diarymuaz.firebaseio.com",
  projectId: "diarymuaz",
  storageBucket: "diarymuaz.appspot.com",
  messagingSenderId: "14375745897"
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
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
