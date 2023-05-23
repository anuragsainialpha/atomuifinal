import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { ModifyPlanComponent } from './modify-plan.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModifyPlanDeleteConfirmationComponent } from 'src/app/public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';

const routes: Routes = [
  { path: '', component: ModifyPlanComponent},
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
    ModifyPlanComponent,
    ModifyPlanDeleteConfirmationComponent
  ],
  providers:
    [
    ],
    entryComponents:[
      ModifyPlanComponent,
      ModifyPlanDeleteConfirmationComponent
    ]
})
export class ModifyPlanModule { }
