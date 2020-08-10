import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlJournalEntryPage } from './gl-journal-entry.page';

describe('GlJournalEntryPage', () => {
  let component: GlJournalEntryPage;
  let fixture: ComponentFixture<GlJournalEntryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlJournalEntryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GlJournalEntryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
