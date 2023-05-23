import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { customMaterialModule } from 'src/app/angular-material';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
import { EwmLoadslipPlannerViewComponent } from './ewm-loadslip-planner-view.component';
import { LoaderModule } from 'src/app/public/loader/loader-shared.module';

const routes: Routes = [
  { path: '', component: EwmLoadslipPlannerViewComponent},
  { path: ':loadslipId', component: EwmLoadslipPlannerViewComponent},
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
    EwmLoadslipPlannerViewComponent
   
  ]
  
})
export class EwmLoadslipPlannerViewModule { }
