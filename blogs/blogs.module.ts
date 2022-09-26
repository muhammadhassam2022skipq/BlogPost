import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { AddBlogsFormComponent } from './add-blogs/add-blogs-form/add-blogs-form.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { ListBlogsContentComponent } from './list-blogs/list-blogs-content/list-blogs-content.component';
import { EditBlogsComponent } from './edit-blogs/edit-blogs.component';
import { EditBlogsFormComponent } from './edit-blogs/edit-blogs-form/edit-blogs-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogsService } from './services/blogs.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddBlogsComponent,
    AddBlogsFormComponent,
    ListBlogsComponent,
    ListBlogsContentComponent,
    EditBlogsComponent,
    EditBlogsFormComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    BlogsService
  ]
})
export class BlogsModule { }
