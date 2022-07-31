import { Component, OnInit } from '@angular/core';
import { CallService } from '../shared/call.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {

  constructor(private show: CallService) { }

  memoryArr: any =[];
  startDate: any;

  onShow() {
    let arr: any = [];
      arr[0] = this.show.startDate;
      arr[1] = this.show.time;
      arr[2] = this.show.endDate;
      this.memoryArr.push(arr)
      console.log(this.memoryArr)
      localStorage.setItem('journal', JSON.stringify(this.memoryArr))
    }

    onClear() {
      localStorage.removeItem('journal')
    }

  ngOnInit() {
    let inject: any = localStorage.getItem('journal')
    if (JSON.parse(inject) !==null) {
      this.memoryArr = JSON.parse(inject);
    } else this.memoryArr = []

  }

}
