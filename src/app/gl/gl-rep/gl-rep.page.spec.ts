import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlRepPage } from './gl-rep.page';

describe('GlRepPage', () => {
  let component: GlRepPage;
  let fixture: ComponentFixture<GlRepPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlRepPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlRepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
