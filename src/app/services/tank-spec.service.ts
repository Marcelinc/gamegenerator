import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TankSpecInterface } from '../data/TankSpecInterface';
import { TANKCLASSES } from '../data/tank-classes';
import { TANKNATIONS } from '../data/tank-nations';
import { TANKTIERS } from '../data/tank-tiers';

@Injectable({
  providedIn: 'root'
})
export class TankSpecService {

  constructor() { }

  getTankClasses():Observable<TankSpecInterface[]> {
    return of(TANKCLASSES);
  }

  getTankNations():Observable<TankSpecInterface[]> {
    return of(TANKNATIONS);
  }

  getTankTiers():Observable<TankSpecInterface[]> {
    return of(TANKTIERS);
  }
}
