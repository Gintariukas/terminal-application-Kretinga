import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledModeComponent } from './disabled-mode.component';

describe('DisabledModeComponent', () => {
  let component: DisabledModeComponent;
  let fixture: ComponentFixture<DisabledModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
