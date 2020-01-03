import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import * as algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  '7LOP7PA3QP',
  'ee94ab6f55a21150ac1ae1316dbdc467'
);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  get searchParameters() {
    return {
      query: this.query,
      hitsPerPage: 8
    };
  }

  public recordingsConfig = {
    indexName: environment.algoliaRecordingsIndex,
    routing: true,
    searchClient
  };

  public showsConfig = {
    indexName: environment.algoliaShowsIndex,
    routing: true,
    searchClient
  };

  public artistsConfig = {
    indexName: environment.algoliaArtistsIndex,
    routing: true,
    searchClient
  };

  private query = '';

  constructor() {}

  // tslint:disable-next-line:typedef
  onQuery({ $event }: { $event: any }) {
    this.query = $event.target.value;
  }

  ngOnInit() {}
}
