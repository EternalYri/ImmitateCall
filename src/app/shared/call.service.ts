import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CallService{

  memoryCall = []
  startDate(date: any) {
    const Date = date;
    console.log(Date)
  }

  endDate(date: any) {
    const EndDate = date
    console.log(EndDate)
  }

}
