import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { finalize } from 'rxjs/operators';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent implements OnInit {
  isLoading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
