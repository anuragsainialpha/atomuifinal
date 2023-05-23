import { ShareModuleModule } from 'src/app/public/share-module/share-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadslipCancelPopupComponent } from 'src/app/public/loadslip-cancel-popup/loadslip-cancel-popup.component';
import { LoadslipSuccessDialogComponent } from 'src/app/public/loadslip-success-dialog/loadslip-success-dialog.component';
import { CreateLoadslipsErrorPopupComponent } from 'src/app/public/create-loadslips-error-popup/create-loadslips-error-popup.component';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
import { customMaterialModule } from 'src/app/angular-material';
import { LoaderModule } from 'src/app/public/loader/loader-shared.module';
import { EwmCreateLoadslip } from './ewm-create-loadslip.component';
const routes: Routes = [
  { path: '', component: EwmCreateLoadslip },
  { path: ':loadslipId', component: EwmCreateLoadslip },
  { path: ':loadslipId/:viewType', component: EwmCreateLoadslip },
  { path: ':shipmentId/:truckNumber/:typeOfTruck/:variant1/:actualTruckType', component: EwmCreateLoadslip }
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
    EwmCreateLoadslip,
  ],
  entryComponents: [
    EwmCreateLoadslip,
    LoadslipCancelPopupComponent,
    LoadslipSuccessDialogComponent,
    CreateLoadslipsErrorPopupComponent,
  ]
})
export class EwmCreateLoadslipModule { }
