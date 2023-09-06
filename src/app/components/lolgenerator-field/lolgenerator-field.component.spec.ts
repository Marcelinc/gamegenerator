import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolgeneratorFieldComponent } from './lolgenerator-field.component';

describe('LolgeneratorFieldComponent', () => {
  let component: LolgeneratorFieldComponent;
  let fixture: ComponentFixture<LolgeneratorFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LolgeneratorFieldComponent]
    });
    fixture = TestBed.createComponent(LolgeneratorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
