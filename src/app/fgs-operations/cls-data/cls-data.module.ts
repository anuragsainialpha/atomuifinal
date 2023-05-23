import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
import { ClsDataComponent } from './cls-data.component';
import { LoaderModule } from 'src/app/public/loader/loader-shared.module';
import { customMaterialModule } from 'src/app/angular-material';

const routes: Routes = [
  { path: '', component: ClsDataComponent},
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
    NgxDatatableModule,
    CustomDatePipeModule
  ],
  declarations: [
    ClsDataComponent
  ],
  entryComponents:[
    ClsDataComponent
   ],
  
})
export class ClsDataModule { }