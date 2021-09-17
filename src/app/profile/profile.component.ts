import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';
import { Profile } from '../blueprints/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  blogsthecount: number = 0
  categories: number = 0
  tags: number = 0
  blogs: any = []
  profile!: Profile;
  constructor(private apiserive:ServicesService) { }

  ngOnInit(): void {
    this.getblogs()
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getblogs(){
    this.apiserive.ProfileRequest()
    await this.sleep(1000)
    this.blogs = this.apiserive.blogs
    this.blogsthecount = this.blogs.length
    this.categories = this.apiserive.categorys.length
    this.tags = this.apiserive.tags.length
    this.profile = this.apiserive.profile
  }
}
