import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent{
  counter : number = 0;
  interval : any;
  @Output() emitter = new EventEmitter<number>();

  startCounter(){
    this.interval = setInterval(() => {
      this.counter++;
      this.emitter.emit(this.counter);
    }, 1000);
  }

  stopCounter(){
    clearInterval(this.interval);
  }
}
