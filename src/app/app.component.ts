import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  data: any;
  ngOnInit(): void {
    this.http.get('/api').subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
  title = 'Hula';
}
