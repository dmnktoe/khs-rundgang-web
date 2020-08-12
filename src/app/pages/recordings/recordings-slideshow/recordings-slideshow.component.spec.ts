import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingsSlideshowComponent } from './recordings-slideshow.component';

describe('RecordingsSlideshowComponent', () => {
  let component: RecordingsSlideshowComponent;
  let fixture: ComponentFixture<RecordingsSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecordingsSlideshowComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordingsSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
