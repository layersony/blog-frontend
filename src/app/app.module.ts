import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogsectionComponent } from './blogsection/blogsection.component';
import { ProfileComponent } from './profile/profile.component'
import { TruncatePipe } from './extras/truncate.pipe';

// new imports
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { SavelocalService } from './api/savelocal.service';

import {NgxPaginationModule} from 'ngx-pagination';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogsectionComponent,
    TruncatePipe,
    ProfileComponent,
    CategoryComponent,
    BlogdetailsComponent,
    ProjectsComponent,
    NotFoundComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CKEditorModule,
    StorageServiceModule,
    NgxPaginationModule,
  ],
  providers: [SavelocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
