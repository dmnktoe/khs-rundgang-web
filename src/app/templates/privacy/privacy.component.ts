import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
