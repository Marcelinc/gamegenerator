import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GameInterface } from '../data/Interfaces/GameInterface';
import { GAMES } from '../data/games';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(): Observable<GameInterface[]>{
    return of(GAMES);
  }
}
