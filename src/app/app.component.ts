import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'card-love';
  public isOpen : boolean;
  constructor(){
    this.isOpen = false;
  }
  public open() : void{
    console.log('is open');
    this.isOpen = true;
  }
  public close() : void{
    console.log('is close');
    this.isOpen = false;
  }
}
