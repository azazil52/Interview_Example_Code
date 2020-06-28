import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInCenterAnimation =
trigger('fadeInCenterAnimation', [
  // route 'enter' transition
  transition(':enter', [
    // styles at start of transition
    style({ transform: 'translateX(0px)', opacity: 0}),
    animate('0.5s ease-in-out', style({transform: 'translateX(0px)', opacity: 1}))
  ]),
]);
