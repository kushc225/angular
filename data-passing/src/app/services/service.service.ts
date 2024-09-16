
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  
  getUserRoles(): string[] {
    debugger
    const roles = localStorage.getItem('roles')!;
    console.log("before")
    console.log({roles : JSON.parse(roles)}) 
    return roles ? JSON.parse(roles) : [];
  }

  
  hasRole(role: string): boolean {
    const roles = this.getUserRoles();
    return roles.includes(role);
  }

  
  hasAnyRole(roles: string[]): boolean {
    const userRoles = this.getUserRoles();
    return roles.some(role => userRoles.includes(role));
  }
}
