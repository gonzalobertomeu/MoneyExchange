import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatFormFieldModule, MatDividerModule, MatExpansionModule  } from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDividerModule,
    MatExpansionModule
  ],
  exports: [
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatDividerModule,
    MatExpansionModule
  ]
})
export class AngularmaterialModule { }
