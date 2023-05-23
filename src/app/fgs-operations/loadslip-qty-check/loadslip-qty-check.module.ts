import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
import { LoadslipQtyCheckComponent } from './loadslip-qty-check.component';
const routes: Routes = [
  { path: '', component: LoadslipQtyCheckComponent },
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    customMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LoaderModule,
    NgxDatatableModule,
    CustomDatePipeModule
  ],
  declarations: [
    LoadslipQtyCheckComponent
  ],
  providers:
    [
    ],
})
export class LoadslipQtyCheckModule { }
