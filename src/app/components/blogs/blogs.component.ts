import { BlogService } from './../../services/blog.service';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { Component, OnInit } from '@angular/core';
import { BlogInterface } from '../../models/blog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [BlogItemComponent, CommonModule, FormsModule,LoadingComponent],
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  constructor(private blogService: BlogService) {}

  blogs: BlogInterface[] = [];
  originalBlogs: BlogInterface[] = [];
  searchResult: BlogInterface[] = [];
  searchValue: string = '';
  pageSize: number = 6;
  currentPage: number = 1;
  isLoading: boolean = true;
  error: string = "can't fetch blogs";

  ngOnInit(): void {
    this.fetchBlogs();
  }

  fetchBlogs(): void {
    this.blogService.getAllBlogs().subscribe({
      next: (res) => {
        this.originalBlogs = res;
        this.blogs = this.originalBlogs.slice(0, this.pageSize);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
    this.loadBlogs();
  }

  search(): void {
    if (!this.searchValue) {
      this.searchResult = [];
      return;
    }

    this.searchResult = this.originalBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(this.searchValue.toLowerCase())
    );
  }

  pagination(page: number): void {
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    if (page > 1) {
      this.blogs = this.originalBlogs.slice(startIndex, endIndex);
    } else {
      this.blogs = this.originalBlogs.slice(0, this.pageSize);
    }
  }

  loadBlogs(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;

    this.blogs = this.blogs.concat(
      this.originalBlogs.slice(startIndex, endIndex)
    );
  }

  loadMore(): void {
    this.currentPage++;
    this.loadBlogs();
  }
}
