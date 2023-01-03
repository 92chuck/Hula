import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { GenresAction } from './store/genres/genres.actions';
import { MoviesAction } from './store/movies/movies.actions';
import { SeriesAction } from './store/series/series.actions';
import { ContentsAction } from './store/contents/contents.actions';
import { UserAction } from './store/users/user.actions';

const token = localStorage.getItem('token');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `JWT ${token}`,
  }),
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private store: Store) {}

  ngOnInit(): void {
    this.http.get('/api/series').subscribe((series: any) => {
      this.store.dispatch(SeriesAction.getSeries({ series }));
    });
    this.http.get('/api/movies').subscribe((movies: any) => {
      this.store.dispatch(MoviesAction.getMovies({ movies }));
    });
    this.http.get('/api/genres').subscribe((genres: any) => {
      this.store.dispatch(GenresAction.getGenres({ genres }));
    });
    this.http.get('/api/contents').subscribe((contents: any) => {
      this.store.dispatch(ContentsAction.getContents({ contents }));
    });
    this.http.get('/api/users', httpOptions).subscribe((user: any) => {
      this.store.dispatch(UserAction.getUser({ user }));
    });
  }
}
