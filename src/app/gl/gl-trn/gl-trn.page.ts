import { Component, OnInit } from '@angular/core';
import { IUserReponsibility } from '../../auth/model/IUserReponsibility.model';
import { AuthorizeService } from '../../auth/service/authorize.service';

@Component({
  selector: 'app-gl-trn',
  templateUrl: './gl-trn.page.html',
  styleUrls: ['./gl-trn.page.scss'],
})
export class GlTrnPage implements OnInit {
  userResp: IUserReponsibility;
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
