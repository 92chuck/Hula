import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  url: any;
  constructor() {}

  ngOnInit(): void {
    this.url = window.location.href;
  }
}
