import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { selectSeries } from 'src/app/store/series/series.selector';
import { selectUser } from 'src/app/store/users/user.selector';
import { selectContents } from 'src/app/store/contents/contents.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent implements OnInit {
  series$: Observable<any> = this.store.select(selectSeries);
  user$: Observable<any> = this.store.select(selectUser);
  contents$: Observable<any> = this.store.select(selectContents);

  constructor(private store: Store) {}
  ngOnInit(): void {}
}
