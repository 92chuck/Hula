import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentShowGenresComponent } from './content-show-genres.component';

describe('ContentShowGenresComponent', () => {
  let component: ContentShowGenresComponent;
  let fixture: ComponentFixture<ContentShowGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentShowGenresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentShowGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
