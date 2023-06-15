import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorRoutingModule } from './cor-routing.module';
import { CorComponent } from './cor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CorComponent],
  imports: [
    CorRoutingModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    CorComponent
  ]
})
export class CorModule { }
