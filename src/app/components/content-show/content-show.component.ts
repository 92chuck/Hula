import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-show',
  templateUrl: './content-show.component.html',
  styleUrls: ['./content-show.component.css'],
})
export class ContentShowComponent implements OnInit {
  @Input() title: any;
  @Input() contents: any;

  constructor() {}

  ngOnInit(): void {
  }
}
