import { createActionGroup, props } from '@ngrx/store';

// interface Series {
//   url: string;
//   title: string;
//   overview: string;
//   firstAiredDate: string;
//   genres: object;
//   region: object;
// }

export const ContentsAction = createActionGroup({
  source: 'Home Page',
  events: {
    'Get Contents': props<{ contents: any }>(),
  },
});
