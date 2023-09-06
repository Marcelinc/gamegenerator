import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolRandomizerComponent } from './lol-randomizer.component';

describe('LolRandomizerComponent', () => {
  let component: LolRandomizerComponent;
  let fixture: ComponentFixture<LolRandomizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LolRandomizerComponent]
    });
    fixture = TestBed.createComponent(LolRandomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
