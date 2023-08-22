import { Component, OnInit } from '@angular/core';
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
  
  constructor(private tankSpecService: TankSpecService) {}

  ngOnInit(): void {
    this.tankSpecService.getTankTiers().subscribe(tiers => this.tankTiers = tiers);
    this.tankSpecService.getTankClasses().subscribe(classes => this.tankClasses = classes);
    this.tankSpecService.getTankNations().subscribe(nations => this.tankNations = nations);
  }

  randomizeNation(){
    let length = this.tankNations.length;
    let id = Math.floor(Math.random()*length);
    const nation = this.tankNations[id];
    this.actualNation = nation;
    console.log('randomizenation:', nation);
  }

  randomizeTier(){
    let length = this.tankTiers.length;
    let id = Math.floor(Math.random()*length);
    const tier = this.tankTiers[id];
    this.actualTier = tier;
    console.log('randomizetier: ',tier);
  }

  randomizeClass(){
    let length = this.tankClasses.length;
    let id = Math.floor(Math.random()*length);
    const tankClass = this.tankClasses[id];
    this.actualClass = tankClass;
    console.log('randomizeclass: ',tankClass);
  }

}
