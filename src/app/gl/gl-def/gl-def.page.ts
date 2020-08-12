import { Component, OnInit } from '@angular/core';
import { IUserReponsibility } from '../../auth/model/IUserReponsibility.model';
import { AuthorizeService } from '../../auth/service/authorize.service';

@Component({
  selector: 'app-gl-def',
  templateUrl: './gl-def.page.html',
  styleUrls: ['./gl-def.page.scss'],
})
export class GlDefPage implements OnInit {

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
