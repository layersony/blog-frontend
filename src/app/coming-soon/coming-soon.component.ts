import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {

  showmail:boolean = false;
  notmessagebtn:string = 'Notify Me'

  constructor() { }

  ngOnInit(): void {
  }

  toshowmail(){
    this.showmail = !this.showmail
    if (this.showmail){
      this.notmessagebtn = 'Hide Me'
    }else{
      this.notmessagebtn = 'Notify Me'
    }
  }
}
