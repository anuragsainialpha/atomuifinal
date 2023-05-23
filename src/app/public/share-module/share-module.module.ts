import { RouterModule } from '@angular/router';
import { customMaterialModule } from './../../angular-material';
import { NgModule } from '@angular/core';
import { DeleteConfirmationPopupComponent } from '../delete-confirmation-popup/delete-confirmation-popup.component';
import { IndentCancelConfirmationComponent } from '../indent-cancel-confirmation/indent-cancel-confirmation.component';
import { FormsModule } from '@angular/forms';
import { LoadslipCancelPopupComponent } from '../loadslip-cancel-popup/loadslip-cancel-popup.component';
import { LoadslipSuccessDialogComponent } from '../loadslip-success-dialog/loadslip-success-dialog.component';
import { CreateLoadslipsErrorPopupComponent } from '../create-loadslips-error-popup/create-loadslips-error-popup.component';
import { CommonModule } from '@angular/common';
import { LoaderModule } from '../loader/loader-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    customMaterialModule,
    LoaderModule,
    RouterModule
  ],
  declarations: [
    DeleteConfirmationPopupComponent,
    IndentCancelConfirmationComponent,
    LoadslipCancelPopupComponent,
    LoadslipSuccessDialogComponent,
    CreateLoadslipsErrorPopupComponent
  ],
  providers:
    [],
  exports: [
    DeleteConfirmationPopupComponent,
    IndentCancelConfirmationComponent,
    LoadslipCancelPopupComponent,
    LoadslipSuccessDialogComponent,
    CreateLoadslipsErrorPopupComponent,
  ]
})
export class ShareModuleModule { }
