import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInRightAnimation =
trigger('fadeInRightAnimation', [
  // route 'enter' transition
  transition(':enter', [
    // styles at start of transition
    style({ transform: 'translateX(1000px)' }),
    animate('0.3s', style({transform: 'translateX(0px)', opacity: 1}))
  ]),
]);
