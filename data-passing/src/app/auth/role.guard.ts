
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core'; 
import { AuthService } from './../services/service.service';
import { Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const requiredRoles = route.data['roles']; 
  // console.log("called", authService.hasAnyRole(requiredRoles))
  localStorage.setItem("role", JSON.stringify("admin"))
  const localRole = JSON.parse(localStorage.getItem('role')!);
  if (requiredRoles.includes(localRole)) {
    return true; 
  } else {
    router.navigate(['/login']); 
    return false;
  }
};
