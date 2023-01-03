import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-show-genres',
  templateUrl: './content-show-genres.component.html',
  styleUrls: ['./content-show-genres.component.css'],
})
export class ContentShowGenresComponent {
  @Input() genres: any;
}
