import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { withCache } from '@ngneat/cashew';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getArtists() {
    return this.httpClient
      .get(environment.serverUrl + '/artists', withCache())
      .pipe(
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
      .get(environment.serverUrl + '/artists/artist/' + artistId, withCache())
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Der Interpret konnte nicht geladen werden.'
          )
        )
      );
  }

  getBlogPosts() {
    return this.httpClient.get('assets/data/blog.json', withCache()).pipe(
      map((body: any) => body),
      catchError(() =>
        of(
          'Es ist ein Fehler aufgetreten. Die Artists konnten nicht geladen werden.'
        )
      )
    );
  }

  getGenres() {
    return this.httpClient
      .get(environment.serverUrl + '/genres', withCache())
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Genres konnten nicht geladen werden.'
          )
        )
      );
  }

  getRecordings() {
    return this.httpClient
      .get(environment.serverUrl + '/recordings', withCache())
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Recordings konnten nicht geladen werden.'
          )
        )
      );
  }

  getRecording({ recordingId }: { recordingId: any }) {
    return this.httpClient
      .get(
        environment.serverUrl + '/recordings/recording/' + recordingId,
        withCache()
      )
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Aufnahme konnte nicht geladen werden.'
          )
        )
      );
  }

  getHotRecording() {
    return this.httpClient
      .get(environment.serverUrl + '/recordings/most-viewed', withCache())
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Aufnahme konnte nicht geladen werden.'
          )
        )
      );
  }

  getHotRecordings() {
    return this.httpClient
      .get(environment.serverUrl + '/recordings/top-3-viewed', withCache())
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Aufnahme konnte nicht geladen werden.'
          )
        )
      );
  }

  getShows() {
    return this.httpClient
      .get(environment.serverUrl + '/shows', withCache())
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die Shows konnten nicht geladen werden.'
          )
        )
      );
  }

  getShowsRecentlyUpdated() {
    return this.httpClient
      .get(environment.serverUrl + '/shows/recently-updated', withCache())
      .pipe(
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

  getCurrentShow() {
    return this.httpClient
      .get(environment.serverUrl + '/meta/shows/current')
      .pipe(
        map((body: any) => body),
        catchError(() =>
          of(
            'Es ist ein Fehler aufgetreten. Die aktuelle Show konnte nicht geladen werden.'
          )
        )
      );
  }

  getNextShow() {
    return this.httpClient.get(environment.serverUrl + '/meta/shows/next').pipe(
      map((body: any) => body),
      catchError(() =>
        of(
          'Es ist ein Fehler aufgetreten. Die nächste Show konnte nicht geladen werden.'
        )
      )
    );
  }

  getSchedule() {
    return this.httpClient.get('/meta/schedule', withCache()).pipe(
      map((body: any) => body),
      catchError(() =>
        of(
          'Es ist ein Fehler aufgetreten. Die Show konnte nicht geladen werden.'
        )
      )
    );
  }

  getLiveInfo() {
    return this.httpClient.get('/meta/live-info').pipe(
      map((body: any) => body),
      catchError(() =>
        of(
          'Es ist ein Fehler aufgetreten. Die Show konnte nicht geladen werden.'
        )
      )
    );
  }
}
