import { Injectable } from "@angular/core";

@Injectable()
export class CounterUserService{
    
    counterActiveToInactive : number = 0;
    counterInactiveToActive : number = 0;

    incrementActiveToInactive(){
        this.counterActiveToInactive++;
        console.log(`Active to Inactive: ${this.counterActiveToInactive}`);
    }

    incrementInactiveToActive(){
        this.counterInactiveToActive++;
        console.log(`Inactive to Active: ${this.counterInactiveToActive}`);
    }
}