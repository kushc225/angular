import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { noAuthGuard } from './auth/no-auth.guard';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { StudentComponent } from './pages/student/student.component';
import { StudentRegistrationComponent } from './pages/student-registration/student-registration.component';
import { StudentLoginComponent } from './pages/student-login/student-login.component';
import { authChildGuard } from './auth/auth-child.guard';
import { roleGuard } from './auth/role.guard';
export const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'user',
    component: UsersComponent,
    canActivate: [roleGuard],
    data: { roles: [ 'manager'] },
  },
  { path: 'login', component: LoginComponent, canActivate: [noAuthGuard] },
  {
    path: 'student',
    children: [
      { path: '', component: StudentComponent },
      {
        path: '',
        canActivateChild: [authChildGuard],
        children: [
          { path: 'register', component: StudentRegistrationComponent },
          { path: 'details', component: StudentLoginComponent },
        ],
      },
    ],
  },

  { path: '**', component: NotFoundComponent },
];
