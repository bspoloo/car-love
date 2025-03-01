import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LetterComponent } from "./components/letter/letter.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, LetterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'card-love';
  public isOpen : boolean;
  public isChanged : boolean;
  constructor(){
    this.isOpen = false;
    this.isChanged = false;
  }
  public open() : void{
    this.changeState();
    this.isOpen = true;
  }
  public close() : void{
    console.log('is close');
    this.isOpen = false;
  }
  public changeState() : void{
    setInterval(() => {
      this.isChanged = true;
    }, 7000);
  }
}
