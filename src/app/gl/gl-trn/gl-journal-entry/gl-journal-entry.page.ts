import { Component, OnInit } from '@angular/core';
import { IUserReponsibility } from '../../../auth/model/IUserReponsibility.model';
import { AuthorizeService } from '../../../auth/service/authorize.service';

@Component({
  selector: 'app-gl-journal-entry',
  templateUrl: './gl-journal-entry.page.html',
  styleUrls: ['./gl-journal-entry.page.scss'],
})
export class GlJournalEntryPage implements OnInit {

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
