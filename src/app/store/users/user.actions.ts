import { createActionGroup, props } from '@ngrx/store';

// interface Series {
//   url: string;
//   title: string;
//   overview: string;
//   firstAiredDate: string;
//   genres: object;
//   region: object;
// }

export const UserAction = createActionGroup({
  source: 'register',
  events: {
    'Get User': props<{ user: any }>(),
    'Create User': props<{ user: any }>(),
    'Authenticate User': props<{ user: any }>(),
    'Log Out': props<{ user: any }>(),
    'Update User': props<{ user: any }>(),
  },
});
