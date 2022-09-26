import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCourseComponent } from '../courses/edit-course/edit-course.component';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { EditBlogsComponent } from './edit-blogs/edit-blogs.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';

const routes: Routes = [
  {
    path: '', component: ListBlogsComponent,
   
  },
  {
    path: 'add', component: AddBlogsComponent
  },
  {
    path: 'list', component: ListBlogsComponent
  },
  {path: 'edit', children: [
    {path: ':id', component: EditBlogsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
