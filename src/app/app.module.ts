import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContentShowComponent } from './components/content-show/content-show.component';
import { FooterComponent } from './components/footer/footer.component';
import { seriesReducer } from './store/series/series.reducer';
import { moviesReducer } from './store/movies/movies.reducer';
import { ContentShowGenresComponent } from './components/content-show-genres/content-show-genres.component';
import { genresReducer } from './store/genres/genres.reducer';
import { contentsReducer } from './store/contents/contents.reducer';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { userReducer } from './store/users/user.reducer';
import { ContentdetailComponent } from './components/contentdetail/contentdetail.component';
import { SeriesComponent } from './components/series/series.component';
import { MoviesComponent } from './components/movies/movies.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContentShowComponent,
    FooterComponent,
    ContentShowGenresComponent,
    LoginModalComponent,
    RegisterModalComponent,
    ContentdetailComponent,
    SeriesComponent,
    MoviesComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      series: seriesReducer,
      movies: moviesReducer,
      genres: genresReducer,
      user: userReducer,
      contents: contentsReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
