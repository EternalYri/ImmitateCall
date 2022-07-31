import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CallService{

  startDate: any;
  endDate: any;
  time: any;

  startCall(date: any) {
    this.startDate = date;
  }

  endCall(date: any) {
    this.endDate = date;
  }

  timeCall(date: any) {
    this.time = date;
  }

}
