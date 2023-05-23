import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PlanWithErrorsComponent } from './plan-with-errors.component';
import { customMaterialModule } from '../../angular-material';
import { ConformationPopupComponent } from '../../public/conformation-popup/conformation-popup.component';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { FileUploadErrorsDialogComponent } from '../../public/file-upload-errors-dialog/file-upload-errors-dialog.component';
import { PlanWithMulipleErrorPopupComponent } from '../../public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';

const routes: Routes = [
  { path: '', component: PlanWithErrorsComponent },
  { path: ':planData', component: PlanWithErrorsComponent },
  { path: ':planId', component: PlanWithErrorsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    customMaterialModule,
    LoaderModule,
    NgxDatatableModule,
    FormsModule,
    CustomDatePipeModule
  ],
  entryComponents: [
    PlanWithErrorsComponent,
    ConformationPopupComponent,
    FileUploadErrorsDialogComponent,
    PlanWithMulipleErrorPopupComponent
  ],
  declarations: [
    PlanWithErrorsComponent,
    ConformationPopupComponent,
    FileUploadErrorsDialogComponent,
    PlanWithMulipleErrorPopupComponent
  ],
  providers:
    [
    ],

})
export class planwithErrorModule { }
