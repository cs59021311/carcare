import { Routes, RouterModule } from '@angular/router';
import { AppURL } from './app.url';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { UnauthenticationGuard } from './guards/unauthentication.guard';
import { RegisterMemberComponent } from './components/register-member/register-member.component';

const RouteLists: Routes = [
    { path: '', redirectTo: AppURL.Login, pathMatch: 'full' },
    { path: AppURL.Login, component: LoginComponent, canActivate: [UnauthenticationGuard] },
    { path: AppURL.Register, component: RegisterComponent, canActivate: [UnauthenticationGuard] },
    {
      path: AppURL.Authen,
      loadChildren: './authentication/authentication.module#AuthenticationModule',
      canActivate: [AuthenticationGuard]
    },
    { path: AppURL.Registermember, component: RegisterMemberComponent , canActivate: [UnauthenticationGuard] }
];

export const AppRouting = RouterModule.forRoot(RouteLists);
