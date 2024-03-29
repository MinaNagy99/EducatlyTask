import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogInterface } from '../models/blog'; // Assuming you have a BlogInterface defined

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {
    this.blogs = [] as BlogInterface[];
  }

  baseUrl: string = 'https://dev.to/api/articles';
  blogs: BlogInterface[];
  getAllBlogs(): Observable<BlogInterface[]> {
    return this.http.get<BlogInterface[]>(`${this.baseUrl}`);
  }

}
