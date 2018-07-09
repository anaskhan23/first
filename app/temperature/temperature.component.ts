import { Component, OnInit } from '@angular/core';
import { TemperatureService } from  '../temperature.service'
@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css'],
  providers:[TemperatureService]
})
export class TemperatureComponent implements OnInit {
 celsius:number;
fahrenheit:number;

  temperature:TemperatureService;
    constructor(temperature:TemperatureService) {
      this.temperature=temperature;
    }
  calculateTemp(){
    this.fahrenheit=this.temperature.calculateTemp(this.celsius,this.fahrenheit);
    return this.fahrenheit;
  }


  ngOnInit() {
  }

}
