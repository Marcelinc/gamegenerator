import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBannerComponent } from './game-banner.component';

describe('GameBannerComponent', () => {
  let component: GameBannerComponent;
  let fixture: ComponentFixture<GameBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameBannerComponent]
    });
    fixture = TestBed.createComponent(GameBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
