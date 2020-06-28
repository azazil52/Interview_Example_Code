import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInButtonAnimation =
trigger('fadeInButtonAnimation', [
  // route 'enter' transition
  transition(':enter', [
    // styles at start of transition
    style({ transform: 'translateX(0px)', opacity: 0}),
    animate('0.8s', style({transform: 'translateX(0px)', opacity: 0.65}))
  ]),
]);
