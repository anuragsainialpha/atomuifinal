import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateFreightComponent } from './create-freight.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';

import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { PlannerAuthGuardService } from 'src/app/services/auth-guard/planner-auth-guard.service';

const routes: Routes = [
  { path: '', component: CreateFreightComponent},
];

// const routes: Routes = [
//   { path: '', component: CreateFreightComponent,canActivate:[PlannerAuthGuardService]},
// ];


@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    LoaderModule,
    customMaterialModule,
    FormsModule
  ],
  declarations: [
    CreateFreightComponent
  ],
  entryComponents:[
    // FileUploadErrorsDialogComponent,
    CreateFreightComponent
   ],
   providers:
     [
       PlannerAuthGuardService
     ],
})
export class CreateFreightModule { }
