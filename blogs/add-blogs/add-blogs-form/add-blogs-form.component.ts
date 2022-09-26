
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { blog } from '../../models/blogs';

@Component({
  selector: 'app-add-blogs-form',
  templateUrl: './add-blogs-form.component.html',
  styleUrls: ['./add-blogs-form.component.css']
})
export class AddBlogsFormComponent implements OnInit {
  @Output('addedBlog') addedBlog: EventEmitter<blog> = new EventEmitter<blog>();
  @ViewChild('blogPost', {static: false}) blogPost!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  onBlogPost(): void {
  const blogs = new blog ();
  blogs.blogPost= this.blogPost.nativeElement.value;
  this.addedBlog.emit(blogs);
  console.log(blogs)
  }
}
