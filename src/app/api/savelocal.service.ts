import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'local_blog';

@Injectable({
  providedIn: 'root'
})
export class SavelocalService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(blog: any): void {
    // INSERT UPDATED ARRAY TO LOCAL STORAGE
    this.storage.set(STORAGE_KEY, blog);
    console.log(this.storage.get(STORAGE_KEY) || 'LOCAL STORAGE IS EMPTY')
  }

  public getOnLocalStorage(): void {
    // Get array of blog from local storage
    const currentBlog = this.storage.get(STORAGE_KEY) || [];
    console.log(currentBlog)
  }
}