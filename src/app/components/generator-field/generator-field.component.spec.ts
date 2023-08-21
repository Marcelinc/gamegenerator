import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorFieldComponent } from './generator-field.component';

describe('GeneratorFieldComponent', () => {
  let component: GeneratorFieldComponent;
  let fixture: ComponentFixture<GeneratorFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratorFieldComponent]
    });
    fixture = TestBed.createComponent(GeneratorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
