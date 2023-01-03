import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectGenres } from 'src/app/store/genres/genres.selector';
import { selectMovies } from 'src/app/store/movies/movies.selector';
import { selectSeries } from 'src/app/store/series/series.selector';
import { selectContents } from 'src/app/store/contents/contents.selector';
import { selectUser } from 'src/app/store/users/user.selector';

import { RegisterUiServiceService } from 'src/app/services/register-ui-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  series$: Observable<any> = this.store.select(selectSeries);
  movies$: Observable<any> = this.store.select(selectMovies);
  genres$: Observable<any> = this.store.select(selectGenres);
  contents$: Observable<any> = this.store.select(selectContents);
  user$: Observable<any> = this.store.select(selectUser);

  constructor(
    private store: Store,
    private regiesterUiService: RegisterUiServiceService
  ) {}

  ngOnInit(): void {}
  toggleShowRegiester(): void {
    this.regiesterUiService.toggleShowRegiester();
  }
}
