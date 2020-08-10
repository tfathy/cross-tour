import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlDefPage } from './gl-def.page';

describe('GlDefPage', () => {
  let component: GlDefPage;
  let fixture: ComponentFixture<GlDefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlDefPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlDefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
