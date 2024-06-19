import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    ConfirmDialogModule,
    ProgressSpinnerModule,
    MessagesModule,
    FormsModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    CardModule,
    CommonModule
  ],
  providers: [ConfirmationService],
  declarations: [HomeComponent]
})
export class HomeModule { }
