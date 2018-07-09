import {Injectable} from '@angular/core';
@Injectable()

export class TemperatureService{
    calculateTemp(celsius:number,fahrenheit:number){
        fahrenheit= (celsius * 9/5) + 32;
        return fahrenheit;
    }
}