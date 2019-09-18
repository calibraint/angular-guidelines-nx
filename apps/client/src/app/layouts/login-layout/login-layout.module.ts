import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginLayoutRoutingModule } from './login-layout-routing-module';


import { HeaderModule } from '../header/header.module';

import { LoginDialog } from '../../dialogs/login-dialog/login.dialog';

@NgModule({
  declarations: [
    LoginLayoutComponent,
    LoginDialog
  ],
  entryComponents: [
    LoginDialog
  ],
  imports: [
    CommonModule,
    LoginLayoutRoutingModule,
    HeaderModule,
    SharedModule
  ]
})
export class LoginLayoutModule { }
