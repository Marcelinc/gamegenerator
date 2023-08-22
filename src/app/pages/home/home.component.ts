import { Component, OnInit } from '@angular/core';
import { GameInterface } from 'src/app/data/Interfaces/GameInterface';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  gamesList?: GameInterface[];

  constructor(private gameService: GameService) {
    this.gameService.getGames().subscribe(games => this.gamesList = games);
  }

  ngOnInit(): void {
    
  }
}
