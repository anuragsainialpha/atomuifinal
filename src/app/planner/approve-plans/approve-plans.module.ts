import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { ApprovePlansComponent } from './approve-plans.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ApprovePlanErrorsComponent } from 'src/app/public/approve-plan-errors/approve-plan-errors.component';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';

const routes: Routes = [
  { path: '', component: ApprovePlansComponent},
  { path: ':planId', component: ApprovePlansComponent},
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
    ApprovePlansComponent,
    ApprovePlanErrorsComponent
  ],
  entryComponents:[
    ApprovePlanErrorsComponent,
    ApprovePlansComponent
  ],
  providers:
    [
    ],
})
export class approvePlanModule { }
