import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopSectionComponent } from './components/top-section/top-section.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BackgroundPatternComponent } from './components/background-pattern/background-pattern.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopSectionComponent,
    BlogsComponent,
    BackgroundPatternComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'educaltyTask';
}
