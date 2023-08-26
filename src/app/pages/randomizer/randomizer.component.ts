import { Component, OnInit, Input } from '@angular/core';
import { TankSpecInterface } from 'src/app/data/Interfaces/TankSpecInterface';
import { TankSpecService } from 'src/app/services/tank-spec.service';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {
  tankTiers: TankSpecInterface[] = [];
  tankNations:TankSpecInterface[] = [];
  tankClasses:TankSpecInterface[] = [];

  actualTier: TankSpecInterface | null = null;
  actualNation: TankSpecInterface | null = null;
  actualClass:TankSpecInterface | null = null;

  randomizingClass: boolean = false;
  randomizingTier: boolean = false;
  randomizingNation: boolean = false;
  
  constructor(private tankSpecService: TankSpecService) {}

  ngOnInit(): void {
    this.tankSpecService.getTankTiers().subscribe(tiers => this.tankTiers = tiers);
    this.tankSpecService.getTankClasses().subscribe(classes => this.tankClasses = classes);
    this.tankSpecService.getTankNations().subscribe(nations => this.tankNations = nations);
  }

  randomizeNation(): void{
    this.randomizingNation = true;
    let length = this.tankNations.length;
    let id = Math.floor(Math.random()*length);
    const nation = this.tankNations[id];
    this.actualNation = nation;
    console.log('randomizenation:', nation);
    this.randomizingNation = false;
  }

  randomizeTier(): void{
    this.randomizingTier = true;
    let length = this.tankTiers.length;
    let id = Math.floor(Math.random()*length);
    const tier = this.tankTiers[id];
    this.actualTier = tier;
    console.log('randomizetier: ',tier);
    this.randomizingTier = false;
  }

  randomizeClass(): void{
    let length = this.tankClasses.length;
    let id = Math.floor(Math.random()*length);
    const tankClass = this.tankClasses[id];
    this.actualClass = tankClass;
    console.log('randomizeclass: ',tankClass);
    this.randomizingClass = false;
  }

  randomize(type: string): void{
    if(type === 'class'){
      this.randomizingClass = true;
      setTimeout(() => this.randomizeClass(),500);
    } else if(type === 'tier'){
      this.randomizingTier = true;
      setTimeout(() => this.randomizeTier(),500);
    } else if(type === 'nation'){
      this.randomizingNation = true;
      setTimeout(() => this.randomizeNation(),500);
    }
  }
}
