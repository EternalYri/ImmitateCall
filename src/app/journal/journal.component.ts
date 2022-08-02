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

  onShow(event: any) {
    let arr: any = [];
      arr[0] = this.show.startDate;
      arr[1] = this.show.time;
      arr[2] = this.show.endDate;
      this.memoryArr.push(arr)
      localStorage.setItem('journal', JSON.stringify(this.memoryArr))
    }

    onClear(id: number) {
      this.memoryArr.splice(id, 1)
      localStorage.setItem('journal', this.memoryArr)
    }

  ngOnInit() {
    let inject: any = localStorage.getItem('journal');
    this.memoryArr = JSON.parse(inject);
  }

}
