import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AddDomainPipe } from './pipes';
import { BrokenImageDirective } from './directives';

@NgModule({
  imports: [
    // Modules
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    // Pipes
    AddDomainPipe,
    // Directives
    BrokenImageDirective
  ],
  exports: [
    // Modules
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    // Pipes
    AddDomainPipe,
    // Directives
    BrokenImageDirective
  ]
})
export class CalibraintModule {
}
