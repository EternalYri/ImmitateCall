import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
  sec = 0;
  minute = 0;

  startTimer(event: any) {
  let count = setInterval(()=>{
    ++this.sec
    if (this.sec>= 60) {
      this.sec = 0;
      this.minute++
    }
  }, 1000);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
