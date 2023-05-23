import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { ManualPlanComponent } from './manual-plan.component';
import { FormsModule } from '@angular/forms';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ManualPlanSuccessDialogComponent } from '../../public/manual-plan-success-dialog/manual-plan-success-dialog.component';
import { PlannerAuthGuardService } from '../../services/auth-guard/planner-auth-guard.service';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';

const routes: Routes = [
  { path: '', component: ManualPlanComponent},
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    customMaterialModule,
    FormsModule,
    LoaderModule,
    NgxDatatableModule,
    CustomDatePipeModule
  ],
  declarations: [
    ManualPlanComponent,
    ManualPlanSuccessDialogComponent
  ],
  providers:
    [
      PlannerAuthGuardService
    ],
    entryComponents:[
      ManualPlanComponent,
      ManualPlanSuccessDialogComponent
    ],
})
export class manualPlanModule { }
