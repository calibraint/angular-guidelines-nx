import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';
import { AuthGuard } from '@angular-guidelines-nx/core';


const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: { title: 'Login Page' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginLayoutRoutingModule { }
