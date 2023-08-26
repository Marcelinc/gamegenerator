import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TankSpecInterface } from 'src/app/data/Interfaces/TankSpecInterface';

@Component({
  selector: 'app-generator-field',
  templateUrl: './generator-field.component.html',
  styleUrls: ['./generator-field.component.css']
})
export class GeneratorFieldComponent implements OnInit {
  @Input() fieldTitle: string = 'Generator Field';
  @Input() contentType: string = '';
  @Input() content: TankSpecInterface | null = null;
  @Output() randomizer = new EventEmitter();
  @Input() randomizing: boolean = false;

  constructor() {}

  ngOnInit(): void {
    
  }

  randomize(): void {
    console.log('Generator Field: '+this.randomizing)
    this.randomizer.emit(this.contentType);
  }
}
