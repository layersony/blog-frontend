import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service'

@Component({
  selector: 'app-blogsection',
  templateUrl: './blogsection.component.html',
  styleUrls: ['./blogsection.component.scss']
})
export class BlogsectionComponent implements OnInit {

  blogs: any = []

  constructor(private blogservice:ServicesService) { }

  ngOnInit(): void {
    this.getblogs()
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getblogs(){
    this.blogservice.blogRequest()
    await this.sleep(1000)
    this.blogs = this.blogservice.blogs
  }
}
