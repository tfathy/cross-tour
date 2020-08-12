import { Component, OnInit } from '@angular/core';
import { IUserReponsibility } from '../../../auth/model/IUserReponsibility.model';
import { AuthorizeService } from '../../../auth/service/authorize.service';

@Component({
  selector: 'app-gl-currency',
  templateUrl: './gl-currency.page.html',
  styleUrls: ['./gl-currency.page.scss'],
})
export class GlCurrencyPage implements OnInit {
  userResp: IUserReponsibility;
  curCode;
  descAr;
  descEn;
  symbole;
  prescioin;
  startDate;
  endDate;
  enabled;
  status;
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
  onSavePress(f){
    console.log(f);
  }
  segmentChanged(e){
    
  }
}
