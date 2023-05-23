import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreatePlanComponent } from './create-plan.component';
import { customMaterialModule } from '../../angular-material';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { FileUploadErrorsDialogComponent } from '../../public/file-upload-errors-dialog/file-upload-errors-dialog.component';
import { FormsModule } from '@angular/forms';
import { PlannerAuthGuardService } from '../../services/auth-guard/planner-auth-guard.service';

const routes: Routes = [
  { path: '', component: CreatePlanComponent},
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    LoaderModule,
    customMaterialModule,
    FormsModule
  ],
  declarations: [
    CreatePlanComponent,
   // FileUploadErrorsDialogComponent
  ],
  entryComponents:[
   // FileUploadErrorsDialogComponent,
    CreatePlanComponent
  ],
  providers:
    [
      PlannerAuthGuardService
    ],
})
export class CreatePlanModule { }
