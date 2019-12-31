import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../core/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import Vibrant from 'node-vibrant';
import { Palette } from 'node-vibrant/lib/color';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss']
})
export class ShowDetailComponent implements OnInit {
  show: any;
  title: any;
  hex: any;
  isLoading = false;
  getData: any;
  id: any;
  message: string;
  private sub: any;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  public setTitle({ title }: { title: any }) {
    this.titleService.setTitle(title);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.isLoading = true;
      this.id = params.id;
      this.apiService
        .getShow({ showId: this.id })
        .pipe(
          finalize(() => {
            this.isLoading = false;
          })
        )
        .subscribe((show: any) => {
          Vibrant.from(show.image)
            .getPalette()
            .then(palette => {
              this.hex = palette.Vibrant.hex;
              this.isLoading = false;
            });
          this.setTitle({ title: this.title });
        });
    });
  }
}
