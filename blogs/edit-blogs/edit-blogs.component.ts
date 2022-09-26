import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { blog } from '../models/blogs';
import { BlogsService } from '../services/blogs.service';

@Component({
  selector: 'app-edit-blogs',
  templateUrl: './edit-blogs.component.html',
  styleUrls: ['./edit-blogs.component.css']
})
export class EditBlogsComponent implements OnInit {
  routeSub: any;

  constructor(
    private blogService : BlogsService,
    private router: Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this. activatedRoute.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
    });
  }
  updatedBlog(blogs: blog) :void {
      this.blogService.updateBlog(blogs).subscribe(data => {
        console.log ("RECEIVED EDITED: ",blogs._id)
      })


    this.router.navigate(["/dashboard/blogs/list"]);
  }

}

