import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptHackComponent } from './script-hack.component';

describe('ScriptHackComponent', () => {
  let component: ScriptHackComponent;
  let fixture: ComponentFixture<ScriptHackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScriptHackComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptHackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
