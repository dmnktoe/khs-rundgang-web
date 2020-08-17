import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '@app/core/services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  blogPosts = '';
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isLoading = true;
    this.apiService
      .getBlogPosts()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((blogPosts) => {
        this.blogPosts = blogPosts;
      });
  }
}
