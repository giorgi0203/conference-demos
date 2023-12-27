import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './components/clients/clients.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientFormDialogComponent } from './components/client-form-dialog/client-form-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ClientsComponent,ClientFormDialogComponent],
  exports: [ClientsComponent,ClientFormDialogComponent]
})
export class ClientsModule { }
