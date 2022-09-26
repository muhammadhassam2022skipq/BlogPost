import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blog } from '../models/blogs';
import { BlogsService } from '../services/blogs.service';


@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent implements OnInit {


  constructor(
    private blogService : BlogsService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  addedBlog(blog:blog): void {

    this.blogService.postBlog(blog).subscribe(data => {
      console.log("Data ",blog)
    })
    console.log('this.blogService.addBlog(blog)', blog)
    this.router.navigate(['/dashboard/blogs/list']);
  }

}
