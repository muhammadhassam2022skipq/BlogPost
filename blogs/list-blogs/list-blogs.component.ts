import { Component, OnInit } from "@angular/core";
import { blog } from "../models/blogs";
import { BlogsService } from "../services/blogs.service";

@Component({
  selector: "app-list-blogs",
  templateUrl: "./list-blogs.component.html",
  styleUrls: ["./list-blogs.component.css"],
})
export class ListBlogsComponent implements OnInit {
  blogs: Array<blog> = [];
  constructor(private blogService: BlogsService) {}

  ngOnInit(): void {
  this.getBlogs();
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe(blogs=> {
        this.blogs= blogs
    })
  }
  deletedBlog(blog: blog): void {
    console.log("Deleted Blog: ",blog)
    this.blogService.deleteBlog(blog).subscribe(data=> {
      this.getBlogs()
    })
  }
}
