import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  environment.algoliaAppId,
  environment.algoliaSearchApiKey
);

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  get searchParameters() {
    return {
      query: this.query,
      hitsPerPage: 5,
    };
  }

  public algoliaRecordingsConfig = {
    indexName: environment.algoliaRecordingsIndex,
    routing: true,
    searchClient,
  };

  public algoliaShowsConfig = {
    indexName: environment.algoliaShowsIndex,
    routing: true,
    searchClient,
  };

  public algoliaArtistsConfig = {
    indexName: environment.algoliaArtistsIndex,
    routing: true,
    searchClient,
  };

  private query = '';

  constructor() {}

  // tslint:disable-next-line:typedef
  onQuery({ $event }: { $event: any }) {
    this.query = $event.target.value;
  }

  ngOnInit() {}
}
