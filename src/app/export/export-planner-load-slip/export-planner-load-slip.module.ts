import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { customMaterialModule } from 'src/app/angular-material';

import { ExportPlannerLoadSlipComponent } from './export-planner-load-slip.component';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
const routes: Routes = [
  { path: '', component: ExportPlannerLoadSlipComponent },
  { path: ':loadslipId', component: ExportPlannerLoadSlipComponent },
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    FormsModule,
    customMaterialModule,
    LoaderModule,
    NgxDatatableModule,
    CustomDatePipeModule
  ],
  declarations: [
    ExportPlannerLoadSlipComponent

  ]

})
export class ExportPlannerLoadSlipModule { }
