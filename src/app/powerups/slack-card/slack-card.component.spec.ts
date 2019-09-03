import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlackCardComponent } from './slack-card.component';

describe('SlackCardComponent', () => {
  let component: SlackCardComponent;
  let fixture: ComponentFixture<SlackCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlackCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
