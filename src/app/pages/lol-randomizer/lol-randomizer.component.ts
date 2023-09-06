import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

interface ElementInterface{
  key: string;
  value: string;
}

@Component({
  selector: 'app-lol-randomizer',
  templateUrl: './lol-randomizer.component.html',
  styleUrls: ['./lol-randomizer.component.css']
})
export class LolRandomizerComponent implements OnInit {

  @ViewChild('selectedPosition', { static: false }) dropdownPosition?: ElementRef;
  selectedPosition: string = "all";

  selectedMode: string = "normal";

  positions: ElementInterface[] = [
    {key: "all", value: "All"},
    {key: "top", value: "Top"},
    {key: "bottom", value: "Bottom"},
    {key: "support", value: "Support"},
    {key: "middle", value: "Middle"},
    {key: "jungle", value: "Jungle"}
  ];
  gamemodes: ElementInterface[] = [
    {key: "normal", value: "Normal"},
    {key: "ranked",value: "Ranked"},
    {key: "aram", value: "ARAM"},
    {key: 'special', value:'Special'}
  ];

  randomizingPosition: boolean = false;
  randomizingGamemode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }

  randomizePosition(){
    let positionsNumber = this.positions.length-1;
    let randomNumber = Math.floor(Math.random() * positionsNumber+1);
    this.selectedPosition = this.positions[randomNumber].key;
    this.randomizingPosition = false;
  }
  randomizeGamemode(){
    let gamemodesNumber = this.gamemodes.length;
    let randomNumber = Math.floor(Math.random() * gamemodesNumber);
    this.selectedMode = this.gamemodes[randomNumber].key;
    this.randomizingGamemode = false;
  }

  randomize(element: string){
    if(element === 'position'){
      this.randomizingPosition = true;
      setTimeout(() => this.randomizePosition(),500);
    }
    if(element === 'gamemode'){
      this.randomizingGamemode = true;
      setTimeout(() => this.randomizeGamemode(),500)
    }
  }
}
