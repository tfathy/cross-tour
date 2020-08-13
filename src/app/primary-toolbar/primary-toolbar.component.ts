import { Component, OnInit,  Input } from '@angular/core';
import { IUserReponsibility } from '../auth/model/IUserReponsibility.model';
import { AuthorizeService } from '../auth/service/authorize.service';

@Component({
  selector: 'app-primary-toolbar',
  templateUrl: './primary-toolbar.component.html',
  styleUrls: ['./primary-toolbar.component.scss'],
})
export class PrimaryToolbarComponent implements OnInit {
 @Input() moduleTitle = 'Module title here';
  @Input() opTitle = 'Operating unit here';
  @Input() showHomeButton = false;
  @Input() showMainMenuButton = false;
  @Input() showBackButton = false;
  @Input() backUrl: string;

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
