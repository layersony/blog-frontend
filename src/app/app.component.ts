import { Component } from '@angular/core';
import { ServicesService } from './api/services.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'blog';
  constructor(private service:ServicesService){}

  ngOnInit(): void {
    this.service.ProfileRequest()
    this.service.CateforyRequest()
    this.service.TagRequest()
    this.service.blogRequest()
  }
}
