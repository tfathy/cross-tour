import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlTrnPage } from './gl-trn.page';

describe('GlTrnPage', () => {
  let component: GlTrnPage;
  let fixture: ComponentFixture<GlTrnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlTrnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlTrnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
