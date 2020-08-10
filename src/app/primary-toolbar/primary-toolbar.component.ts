import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-primary-toolbar',
  templateUrl: './primary-toolbar.component.html',
  styleUrls: ['./primary-toolbar.component.scss'],
})
export class PrimaryToolbarComponent implements OnInit {
 @Input() moduleTitle = 'Module title here';
  @Input() opTitle = 'Operating unit here';
  constructor() { }

  ngOnInit() {}

}
