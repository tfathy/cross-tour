import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlPage } from './gl.page';

describe('GlPage', () => {
  let component: GlPage;
  let fixture: ComponentFixture<GlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
