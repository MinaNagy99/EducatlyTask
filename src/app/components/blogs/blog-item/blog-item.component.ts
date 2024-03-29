import { Component, Input, input } from '@angular/core';
import { BlogInterface } from '../../../models/blog';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.css',
})
export class BlogItemComponent {
  constructor() {
    this.blog = {} as BlogInterface; // Initialize blogData
  }
  @Input() blog: BlogInterface;
  ngOnInit() {
    if (this.blog && this.blog.created_at) {
      this.blog.created_at =this.formatDate(new Date(this.blog.created_at))
      ;
    }
  }
  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }
}
