import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CalibraintModule } from '@angular-guidelines-nx/calibraint';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    // Modules
    CommonModule,
    RouterModule,
    TranslateModule,
    CalibraintModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  declarations: [
  ],
  exports: [
    // Modules
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CalibraintModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule {
}
