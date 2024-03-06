import { CanActivateFn } from '@angular/router';

export const yesGuard: CanActivateFn = (route, state) => {
  return true;
};
