import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatGridListModule, MatListModule,
          MatExpansionModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatExpansionModule
  ],
  declarations: []
})
export class AppMaterialModule { }
