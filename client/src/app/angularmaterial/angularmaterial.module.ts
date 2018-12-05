import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatInputModule, MatSnackBarModule } from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
  ]
})
export class AngularmaterialModule { }
