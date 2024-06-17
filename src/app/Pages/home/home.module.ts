import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    ButtonModule,
    CardModule,
    CommonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
