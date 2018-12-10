import { Component, OnInit } from '@angular/core';
import { PriceService, Price } from '../services/price.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public dolar: Price = {d:Date.now().toString(), v:1};
  public dolarinput: number = 0;
  public argentinosinput: number = 0;

  constructor(private price:PriceService) { }

  ngOnInit() {
    this.getDolar();
  }

  getDolar(){
    this.price.getLastPrice().subscribe(observer=>{
      this.dolar = observer;
    });
  }

  setExchangeRate(newRate:number){
    this.dolar = {
      v: newRate,
      d: Date.now().toString()
    }
  }

}

