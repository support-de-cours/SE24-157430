import { CanActivateFn } from '@angular/router';

export const maybeGuard: CanActivateFn = (route, state) => {
  return true;
};
