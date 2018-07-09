import {Injectable} from '@angular/core';
@Injectable()

export class RectangleService{
    calculateArea(length:number,breadth:number){
        return length*breadth;
    }
}