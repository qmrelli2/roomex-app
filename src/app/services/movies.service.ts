import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private http = inject(HttpClient);

  private defaultPoster = 'assets/images/poster-default.jpeg';
  private apiUrl = 'http://www.omdbapi.com';

  private _movies = new BehaviorSubject<any[]>([]);
  public movies$ = this._movies.asObservable();
  private _poster = new BehaviorSubject<string>(this.defaultPoster);
  public poster$ = this._poster.asObservable();

  makeSearch(phrase: string) {
    this.http
      .get(this.apiUrl + '?s=' + phrase + '&type=movie')
      .subscribe((res: any) => {
        if (res.Search && res.Search.length > 0) {
          this._movies.next(res.Search);
          this.setPoster(res.Search[0].Poster);
        } else {
          this.resetMovies();
          this.setPoster();
        }
      });
  }

  setPoster(poster?: string) {
    if (poster) {
      this._poster.next(poster);
    } else {
      this._poster.next(this.defaultPoster);
    }
  }

  resetMovies() {
    this._movies.next([]);
  }
}
