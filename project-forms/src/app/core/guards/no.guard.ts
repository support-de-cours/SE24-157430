import { CanActivateFn } from '@angular/router';

export const noGuard: CanActivateFn = (route, state) => {
  return true;
};
