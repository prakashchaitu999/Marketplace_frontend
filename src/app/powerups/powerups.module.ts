import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule,
         MatSidenavModule,
         MatCardModule,
         MatGridListModule,
         MatButtonModule,
         MatIconModule } from '@angular/material';

const Material = [
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatIconModule
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material
  ],
  exports: [
    Material
  ]

})
export class PowerupsModule { }
