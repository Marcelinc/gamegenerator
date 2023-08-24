import { Component, OnInit, Input } from '@angular/core';
import { GameInterface } from 'src/app/data/Interfaces/GameInterface';

@Component({
  selector: 'app-game-banner',
  templateUrl: './game-banner.component.html',
  styleUrls: ['./game-banner.component.css']
})
export class GameBannerComponent implements OnInit {
  @Input() game?: GameInterface;
  urlAddress: string = '#';

  constructor() {
  }

  ngOnInit(): void {
    this.urlAddress = '/'+this.game?.shortcut;
  }
}
