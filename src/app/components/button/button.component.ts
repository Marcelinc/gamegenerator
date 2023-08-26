import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() content: string = '';
  @Output() btnClick = new EventEmitter();
  @Input() randomizing: boolean = false;

  constructor(){}

  ngOnInit(): void {
    
  }

  onClick(){
    this.btnClick.emit();
  }
}
