import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../api/services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: any = []
  tags: any = []

  constructor(private blogservice:ServicesService) { }

  ngOnInit(): void {
    this.getcatags()
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getcatags(){
    await this.sleep(1000)
    this.category = this.blogservice.categorys
    this.tags = this.blogservice.tags
  }
}
