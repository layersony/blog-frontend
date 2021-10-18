import { Component, OnInit } from '@angular/core';
import { Blog } from '../blueprints/blog';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { ServicesService } from '../api/services.service';
import { SavelocalService } from '../api/savelocal.service';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.scss']
})

export class BlogdetailsComponent implements OnInit {

  blog!:Blog;
  thenew!: any;


  constructor(private service:ServicesService, private route:ActivatedRoute, private localstorageservice:SavelocalService) { }

  ngOnInit(): void{
    let id = this.route.snapshot.paramMap.get('id')
    this.service.blogzz(id).subscribe(data=>{
      this.blog = data
    })
  }
}
