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
    let all = new Date();
    let res = [all.getHours(), all.getMinutes(), all.getSeconds()]. join(":")
    this.call.startCall(res)


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
    this.call.timeCall(document.getElementsByClassName('show__time')[0].textContent);
    let all = new Date()
    let res = [all.getHours(), all.getMinutes(), all.getSeconds()]. join(":")
    this.call.endCall(res)
    this.media.endStream()
  }
  constructor(private call: CallService) { }

  ngOnInit(): void {
  }

}
