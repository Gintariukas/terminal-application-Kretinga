import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDescpComponent } from './object-descp.component';

describe('ObjectDescpComponent', () => {
  let component: ObjectDescpComponent;
  let fixture: ComponentFixture<ObjectDescpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectDescpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDescpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
