import { CanActivateFn } from '@angular/router';

export const authLoginGuard: CanActivateFn = (route, state) => {
  const key = sessionStorage.getItem('loggedIn')
  if(key != null){
    return true
  }else{
    return false
  }
};
