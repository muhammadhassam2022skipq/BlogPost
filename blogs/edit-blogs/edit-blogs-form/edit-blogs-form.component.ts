import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Form } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { blog} from "../../models/blogs";
import { BlogsService } from "../../services/blogs.service";

@Component({
  selector: "app-edit-blogs-form",
  templateUrl: "./edit-blogs-form.component.html",
  styleUrls: ["./edit-blogs-form.component.css"],
})
export class EditBlogsFormComponent implements OnInit {
  // @ViewChild("blogPost", { static: false }) blogPost!: ElementRef;
  @Output("updatedBlog") updatedBlog: EventEmitter<blog> =
    new EventEmitter<blog>();
  currentBlog!: blog;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private blogService: BlogsService
  ) {}

  ngOnInit(): void {

  }
  onBlogUpdate(form:any) {
 
  // this.currentBlog._id= form.value._id;
    
    const  updateBlogg : blog = {
    _id : this.activatedRoute.snapshot.params["id"],
    blogPost: form.value.blogPost
    }
    this.updatedBlog.emit(updateBlogg);
    console.log("updateBlogg: ",updateBlogg)
  }
}
