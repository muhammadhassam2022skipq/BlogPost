import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { blog } from "../models/blogs";

@Injectable()
export class BlogsService {
  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http
      .get<blog[]>("http://localhost:4000/dashboard/blogs/list")
      .pipe(map((res) => res));
  }
  postBlog(newBlog: blog) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:4000/dashboard/blogs/add", newBlog,{
        headers: headers,
      })
      .pipe(map((res) => res));
  }

  updateBlog(updatedBlog: blog) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http.put("http://localhost:4000/dashboard/blogs/edit/"+ updatedBlog._id, updatedBlog,{
      headers: headers,
    })
    .pipe(map((res) => res));
  }
  deleteBlog (deletedBlog: blog) {
    return this.http.delete("http://localhost:4000/dashboard/blogs/delete/"+ deletedBlog._id)
    .pipe(map((res) => res));

  }
}
