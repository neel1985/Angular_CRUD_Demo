import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoApp';
  msg: any;
  allData: Observable<any> | undefined;
  // response: any = [];
  @ViewChild('colleague') colleague!: ElementRef;
  @ViewChild('cubicleNum') cubicleNum!: ElementRef;
  @ViewChild('devcentre') devcentre!: ElementRef;
  
  constructor(private ds: DataService) {}

  ngOnInit() {
    /* this.ds.getData().subscribe({
      next: gData => {
        this.response = gData;
      },
      error: e => { console.log(e); }
    }) */
    this.readColleagues();
  }

  createColleague = () => {
    const id = 1/Math.random();
    const colleagueName = this.colleague.nativeElement.value;
    const cubicleNumber = this.cubicleNum.nativeElement.value;
    const devCentreId = this.devcentre.nativeElement.value;
    const newObj = {
      id: id,
      colleaguName: colleagueName,
      cubicleNum: cubicleNumber,
      devCentre: devCentreId
    };
    this.ds.putData(newObj).subscribe({
      next: newData => {
        this.msg = newData;
        this.readColleagues();
      },
      error: e => { console.log(e); }
    })
  }

  readColleagues = () => {
    this.allData = this.ds.getData();
  }

  updateColleague = (textString: any, colleagueId: any) => {
    const obj = {
      devCentre: textString.target.innerText
    };

    this.ds.patchData(colleagueId, obj).subscribe({
      next: uData => {
        console.log(uData);
        this.msg = uData;
      },
      error: e => { console.log(e); }
    })
  }

  delColleague = (colleagueId: number) => {
    this.ds.delData(colleagueId).subscribe({
      next: respData => {
        console.log()
        this.msg = respData;
      },
      error: e => { console.log(e); }
    })
  }
}
