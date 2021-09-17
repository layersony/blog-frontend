import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { Blog } from '../blueprints/blog'
import { Category } from '../blueprints/category'
import { Profile } from '../blueprints/profile'
import { Tags } from '../blueprints/tags'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  blogs: any=[];
  singleblog:any = [];

  categorys: any=[];
  singlecategory:any=[];

  tags: any=[];
  singletags:any=[]

  profile: Profile;

  constructor(private http:HttpClient) { 
    this.profile = new Profile('', '', '', '', '');
  }
  
  blogRequest(){   
    let promise = new Promise((resolve, reject)=>{
      this.http.get<any>(environment.apiUrl+'allblogs/').toPromise().then(response=>{
        for (let i = 0; i < response.length; i++){
          this.singleblog = new Blog(response[i].url, response[i].image, response[i].title, response[i].description, response[i].author_name, response[i].blog_category, response[i].SubCategory, response[i].tagnames, response[i].updated_at, response[i].created_at)
          this.blogs.push(this.singleblog)
        }
        resolve('success')
      }, error =>{
        console.log('This an Error')
        console.log(error)
        reject(error)
      })
    })
    return promise;
  }

  CateforyRequest(){
    let promise = new Promise((resolve, reject)=>{
      this.http.get<any>(environment.apiUrl+'allcategorys').toPromise().then(response=>{
        for (let i = 0; i < response.length; i++){
          this.singlecategory = new Category(response[i].categoryName, response[i].subcat)
          this.categorys.push(this.singlecategory)
        }
        resolve('success')
      }, error =>{
        console.log('This an Error')
        console.log(error)
        reject(error)
      })
    })
    
    return promise;
  }

  ProfileRequest(){
    interface APIRequest{
      user_name: string;
      git_url: string;
      porfolio_url:string;
      phone:string;
      email:string;
    }
    let promise = new Promise((resolve, reject)=>{
      this.http.get<APIRequest>(environment.apiUrl+'userprofile/').toPromise().then(response=>{
        this.profile.user_name = response.user_name
        this.profile.git_url = response.git_url
        this.profile.porfolio_url = response.porfolio_url
        this.profile.phone = response.phone
        this.profile.email = response.email
        
        resolve('Promised Fullfilled')
      },err=>{
        reject(err)
      })
    })
    return promise;
  }

  TagRequest(){
    let promise = new Promise((resolve, reject)=>{
      this.http.get<any>(environment.apiUrl+'alltags').toPromise().then(response=>{
        for (let i = 0; i < response.length; i++){
          this.singletags = new Tags(response[i].tagname, response[i].fontsize)
          this.tags.push(this.singletags)
        }
        resolve('success')
      }, error =>{
        console.log('This an Error')
        console.log(error)
        reject(error)
      })
    })
    
    return promise;
  }
}

