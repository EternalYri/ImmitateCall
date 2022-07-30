import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CallService } from '../shared/call.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
  sec = 0;
  minute = 0;
  media: any;

  startTimer(event: any) {
    this.call.startDate(new Date())

    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        this.media = new MediaRecorder(stream)
        console.log(this.media)
      })

  let count = setInterval(()=>{
    ++this.sec
    if (this.sec>= 60) {
      this.sec = 0;
      this.minute++
    }
  }, 1000);
  }

  onEnd() {

    this.call.endDate(new Date())
  }
  constructor(private call: CallService) { }

  ngOnInit(): void {
  }

}
