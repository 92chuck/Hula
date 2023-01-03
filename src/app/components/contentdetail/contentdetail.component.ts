import { Component, OnInit } from '@angular/core';
import { selectUser } from 'src/app/store/users/user.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { selectContents } from 'src/app/store/contents/contents.selector';
import { UserAction } from 'src/app/store/users/user.actions';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Component({
  selector: 'app-contentdetail',
  templateUrl: './contentdetail.component.html',
  styleUrls: ['./contentdetail.component.css'],
})
export class ContentdetailComponent implements OnInit {
  user$: Observable<any> = this.store.select(selectUser);
  contents$: Observable<any> = this.store.select(selectContents);
  content: any;
  name: any;
  genreStr: any;
  mayLike: any;
  category: any;
  user: any;
  checked: boolean = false;

  constructor(
    private store: Store,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user$.subscribe((user) => {
      this.user = user;
    });
    this.route.params.subscribe((param) => {
      this.name = param['name'];
      const params = new HttpParams().append('param', this.name);
      this.http
        .get('/api/contents/content', { params })
        .subscribe((data: any) => {
          this.content = data.content;
          this.genreStr = data.randomGenre;
          this.category = data.category;
          this.contents$.subscribe((data) => {
            this.mayLike = data[this.genreStr];
          });
          if (this.category === 'series') {
            this.user.sfavorites.forEach((series: any) => {
              if (series.title === this.name) {
                this.checked = true;
              }
            });
          } else if (this.category === 'movie') {
            this.user.mfavorites.forEach((movie: any) => {
              if (movie.title === this.name) {
                this.checked = true;
              }
            });
          }
          console.log(this.checked);
        });
    });
  }

  addFavorite(contentId: any): void {
    const body = {
      userId: this.user.id,
      contentId: contentId,
      category: this.category,
    };
    this.http
      .put('/api/users/updateFavorite', body, httpOptions)
      .subscribe((user: any) => {
        this.store.dispatch(UserAction.updateUser({ user }));
      });
  }

  remove(contentId: any): void {
    const body = {
      userId: this.user.id,
      contentId: contentId,
      category: this.category,
    };
    this.http
      .put('/api/users/removeFavorite', body, httpOptions)
      .subscribe((user: any) => {
        this.store.dispatch(UserAction.updateUser({ user }));
      });
  }
}
