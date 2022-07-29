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
    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        const mediaRecorder = new MediaRecorder(stream)});
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
