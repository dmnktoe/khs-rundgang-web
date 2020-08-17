import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-licenses',
  templateUrl: './licenses.component.html',
  styleUrls: ['./licenses.component.scss'],
})
export class LicensesComponent implements OnInit {
  isLoading = false;
  licenses: Observable<string>;

  constructor(private http: HttpClient) {
    this.licenses = http.get('https://radio-rasclat.com/3rdpartylicenses.txt', {
      responseType: 'text',
    });
  }

  ngOnInit() {}
}
