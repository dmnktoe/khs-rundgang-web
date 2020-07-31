import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDayListComponent } from './schedule-day-list.component';

describe('ScheduleListComponent', () => {
  let component: ScheduleDayListComponent;
  let fixture: ComponentFixture<ScheduleDayListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScheduleDayListComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
