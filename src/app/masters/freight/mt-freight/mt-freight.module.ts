import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtFreightComponent } from './mt-freight.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', component: MtFreightComponent},
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
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [
    MtFreightComponent
  ],
  entryComponents:[
    // FileUploadErrorsDialogComponent,
    MtFreightComponent
   ],
  //  providers:
  //    [
  //      PlannerAuthGuardService
  //    ],
})
export class MTFreightModule { }
