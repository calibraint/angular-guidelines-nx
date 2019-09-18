import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeLayoutComponent } from './home-layout.component';
import { HomeLayoutRoutingModule } from './home-layout-routing-module';


import { HeaderModule } from '../header/header.module';
import { HomeComponent } from '../../pages/home/home.component';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeComponent
  ],
  entryComponents: [
  ],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule,
    HeaderModule,
    SharedModule
  ]
})
export class HomeLayoutModule { }
