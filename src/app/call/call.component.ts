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
  media!: MediaRecorder;
  count: any;
  voice: any = [];
  audio: any;

  startCall(event: any) {
    let all = new Date();
    let res = [all.getHours(), all.getMinutes(), all.getSeconds()]. join(":")
    this.call.startCall(res)


    navigator.mediaDevices.getUserMedia({ audio: true})
    .then(stream => {
        this.media = new MediaRecorder(stream)
        this.media.start();
      })

  this.count = setInterval(()=>{
    ++this.sec
    if (this.sec>= 60) {
      this.sec = 0;
      this.minute++
    }
  }, 1000);
  }

  onEnd(event: any) {
    this.call.timeCall(document.getElementsByClassName('show__time')[0].textContent);
    let all = new Date()
    let res = [all.getHours(), all.getMinutes(), all.getSeconds()]. join(":")
    this.call.endCall(res)
    clearInterval(this.count)
    this.media.stop();
    this.media.ondataavailable = (play)=> {
      const blobUrl = window.URL.createObjectURL(play.data);
      this.audio = new Audio(blobUrl)
      this.audio.play();
      this.voice.push(play.data)
    }
  }
  constructor(private call: CallService) { }

  ngOnInit(): void {
  }

}
