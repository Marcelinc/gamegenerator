import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TankSpecInterface } from 'src/app/data/TankSpecInterface';

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

  constructor() {}

  ngOnInit(): void {
    
  }

  randomize(): void {
    this.randomizer.emit(this.content);
  }
}
