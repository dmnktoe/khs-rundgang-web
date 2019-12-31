import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getArtists() {
    return this.httpClient.get(environment.serverUrl + 'artists').pipe(
      map((body: any) => body),
      catchError(() =>
        of(
          'Es ist ein Fehler aufgetreten. Die Artists konnten nicht geladen werden.'
        )
      )
    );
  }

  getArtist({ artistId }: { artistId: any }) {
    return this.httpClient
      .get(environment.serverUrl + '/artists/artist/' + artistId)
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Der Interpret konnte nicht geladen werden.'
          )
        )
      );
  }

  getGenres() {
    return this.httpClient.get(environment.serverUrl + 'genres').pipe(
      map((body: any) => body),
      catchError(() =>
        of(
          'Es ist ein Fehler aufgetreten. Die Genres konnten nicht geladen werden.'
        )
      )
    );
  }

  getRecordings() {
    return this.httpClient.get(environment.serverUrl + '/recordings').pipe(
      map((body: any) => body),
      catchError(() =>
        of(
          'Es ist ein Fehler aufgetreten. Die Recordings konnten nicht geladen werden.'
        )
      )
    );
  }

  getShows() {
    return this.httpClient.get(environment.serverUrl + '/shows').pipe(
      map((body: any) => body),
      catchError(() =>
        of(
          'Es ist ein Fehler aufgetreten. Die Shows konnten nicht geladen werden.'
        )
      )
    );
  }

  getShow({ showId }: { showId: any }) {
    return this.httpClient
      .get(environment.serverUrl + '/shows/show/' + showId)
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Show konnte nicht geladen werden.'
          )
        )
      );
  }

  getSchedule() {
    return this.httpClient
      .cache()
      .get('/meta/schedule')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Show konnte nicht geladen werden.'
          )
        )
      );
  }
}
