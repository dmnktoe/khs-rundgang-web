import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSeperatorComponent } from './text-seperator.component';

describe('TextSeperatorComponent', () => {
  let component: TextSeperatorComponent;
  let fixture: ComponentFixture<TextSeperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextSeperatorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSeperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
