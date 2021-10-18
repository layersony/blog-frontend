import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service'

import { Router } from '@angular/router'
@Component({
  selector: 'app-blogsection',
  templateUrl: './blogsection.component.html',
  styleUrls: ['./blogsection.component.scss']
})
export class BlogsectionComponent implements OnInit {

  blogs: any = []

  totallength:any;
  page:number = 1;

  constructor(private blogservice:ServicesService, private router:Router) { }

  ngOnInit(): void {
    this.getblogs()
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getblogs(){
    await this.sleep(1000)
    this.blogs = this.blogservice.blogs
    this.totallength = this.blogs.length
  }

  // navigate to full blog
  gotoURL(id:number){
    this.router.navigate(['/blog', id])
  }
}
