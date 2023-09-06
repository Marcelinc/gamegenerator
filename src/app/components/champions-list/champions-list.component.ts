import { Component } from '@angular/core';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.css']
})
export class ChampionsListComponent {
  
  displayedContent: boolean = false;
  
  toggleContent(){
    this.displayedContent = !this.displayedContent;
  }
}
