import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss'],
})
export class ChangelogComponent implements OnInit {
  isLoading = false;
  version: string = environment.version;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
