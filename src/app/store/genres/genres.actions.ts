import { createActionGroup, props } from '@ngrx/store';

// interface Series {
//   url: string;
//   title: string;
//   overview: string;
//   firstAiredDate: string;
//   genres: object;
//   region: object;
// }

export const GenresAction = createActionGroup({
  source: 'Home Page',
  events: {
    'Get Genres': props<{ genres: any }>(),
  },
});
