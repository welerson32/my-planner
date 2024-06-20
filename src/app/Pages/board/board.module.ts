import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ChipModule } from 'primeng/chip';



@NgModule({
  imports: [
    ChipModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    InputTextareaModule,
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
  declarations: [BoardComponent]
})
export class BoardModule { }
