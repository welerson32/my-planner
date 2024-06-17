import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  imports: [
    CardModule,
    ButtonModule,
    CommonModule
  ],
  declarations: [BoardComponent]
})
export class BoardModule { }
