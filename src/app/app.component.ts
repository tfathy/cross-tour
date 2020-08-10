import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IUserApp } from './auth/model/IUserApp.model';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {
  userAccessedApplications: IUserApp[] = [];
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
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
   }
   ngAfterViewInit(): void {
     console.log('ngAfterViewInit');
   }
 
   ngOnInit() {
     console.log('ngOnInit');
   }
}
