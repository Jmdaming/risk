import { Injectable } from '@angular/core';

@Injectable()
export class ProductCountService {

  private _productCountData: number[];
  private _productCountAxisData: string[];

  constructor() {
    this.productCountData = [Math.round(Math.random() * 40000), Math.round(Math.random() * 40000),
      Math.round(Math.random() * 40000), Math.round(Math.random() * 40000),
      Math.round(Math.random() * 40000), Math.round(Math.random() * 40000),
      Math.round(Math.random() * 40000)];
    const todayDate = new Date(Date.now());
    this.productCountAxisData = [this.subtractDaysFromDate(todayDate, 7),
                                  this.subtractDaysFromDate(todayDate, 6),
                                  this.subtractDaysFromDate(todayDate, 5),
                                  this.subtractDaysFromDate(todayDate, 4),
                                  this.subtractDaysFromDate(todayDate, 3),
                                  this.subtractDaysFromDate(todayDate, 2),
                                  this.subtractDaysFromDate(todayDate, 1)];
  }

  get productCountAxisData() {
    return this._productCountAxisData;
  }

  set productCountAxisData(value) {
    this._productCountAxisData = value;
  }

  get productCountData() {
    return this._productCountData;
  }

  set productCountData(value) {
    this._productCountData = value;
  }

  subtractDaysFromDate(date: Date, daysToSubtract: number) {
    let tempDate: Date = new Date();
    tempDate.setDate(date.getDate() - daysToSubtract);
    console.log(tempDate.toDateString());
    return tempDate.toISOString().substring(0, 10);
  }

}
