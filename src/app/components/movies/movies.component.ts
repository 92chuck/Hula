import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectMovies } from 'src/app/store/movies/movies.selector';
import { selectUser } from 'src/app/store/users/user.selector';
import { selectContents } from 'src/app/store/contents/contents.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies$: Observable<any> = this.store.select(selectMovies);
  user$: Observable<any> = this.store.select(selectUser);
  contents$: Observable<any> = this.store.select(selectContents);

  constructor(private store: Store) {}
  ngOnInit(): void {}
}
