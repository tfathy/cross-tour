import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { AuthorizeService } from '../auth/service/authorize.service';
import { IUserApp } from '../auth/model/IUserApp.model';
import { IUserReponsibility } from '../auth/model/IUserReponsibility.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  userResp: IUserReponsibility;
  userApps: IUserApp[] = [];
  constructor(private authorizeService: AuthorizeService) { }

  ngOnInit() {
    this.authorizeService.getUserReponsibility(1).subscribe(
      data => {
        if (data) {
          this.userResp = data;
        }
        console.log('userApps = ', this.userResp);
      }
    );
  }

}
