import { Component, OnInit, OnDestroy } from '@angular/core';
import { IAuthent } from '../model/IAuthent.model';

import { Subscription } from 'rxjs';
import { AuthentService } from '../service/authent.service';
import { AuthorizeService } from '../service/authorize.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  userResp: IAuthent;
  authentSub: Subscription;
  userResponsibility;
  constructor(
    private authentService: AuthentService,
    private authService: AuthorizeService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}
  onPasswordEntered() {
    this.loadingCtrl
      .create({
        message: 'Fetching user responsibilities, please wait ...',
      })
      .then((loadingElement) => {
        loadingElement.present();
        this.authentSub = this.authentService
          .authenticateUser('tarek', 'password')
          .subscribe((respData) => {
            console.log('data: ', respData);
            this.userResp = respData;
            loadingElement.dismiss();
          });
      });
  }
  onLogin() {
    this.authService.getUserReponsibility(1).subscribe((resData) => {
      console.log(resData);
      this.userResponsibility = resData;
      this.router.navigateByUrl('/home');
    });
  }
  ngOnDestroy(): void {
    if (this.authentSub) {
      this.authentSub.unsubscribe();
    }
  }
}
