import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { blog } from "../../models/blogs";

@Component({
  selector: "app-list-blogs-content",
  templateUrl: "./list-blogs-content.component.html",
  styleUrls: ["./list-blogs-content.component.css"],
})
export class ListBlogsContentComponent implements OnInit {
  @Input("blog") blog: blog = new blog();
  @Output("deletedBlog") deletedBlog: EventEmitter<blog> = new EventEmitter();
  // @Output("updatedBlog") updatedBlog: EventEmitter<blog> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onBlogDeletion(blog: blog) {
    this.deletedBlog.emit(blog);
  }
  // onEdition(blog:blog) {
    
  // this.updatedBlog.emit(blog);
  // }
}
