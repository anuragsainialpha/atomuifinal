import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { customMaterialModule } from '../../angular-material';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ExportCreateLoadSlipComponent } from './export-create-load-slip.component';
import { ShareModuleModule } from 'src/app/public/share-module/share-module.module';
import { LoadslipCancelPopupComponent } from 'src/app/public/loadslip-cancel-popup/loadslip-cancel-popup.component';
import { LoadslipSuccessDialogComponent } from 'src/app/public/loadslip-success-dialog/loadslip-success-dialog.component';
import { CreateLoadslipsErrorPopupComponent } from 'src/app/public/create-loadslips-error-popup/create-loadslips-error-popup.component';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';

const routes: Routes = [
  { path: '', component: ExportCreateLoadSlipComponent },
  { path: ':loadslipId', component: ExportCreateLoadSlipComponent },
  { path: ':loadslipId/:viewType', component: ExportCreateLoadSlipComponent },
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    FormsModule,
    customMaterialModule,
    LoaderModule,
    NgxDatatableModule,
    ShareModuleModule,
    CustomDatePipeModule
  ],
  declarations: [
    ExportCreateLoadSlipComponent,
  ],
  entryComponents: [
    ExportCreateLoadSlipComponent,
    LoadslipCancelPopupComponent,
    LoadslipSuccessDialogComponent,
    CreateLoadslipsErrorPopupComponent,
  ]
})
export class ExportCreateLoadSlipModule { }
