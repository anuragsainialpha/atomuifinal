import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MtTruckDedicatedComponent } from './mt-truck-dedicated.component';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';

const routes: Routes = [
  { path: '', component: MtTruckDedicatedComponent},
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
    MtTruckDedicatedComponent
  ],
  entryComponents:[
    MtTruckDedicatedComponent
   ],
  
})
export class MTTruckDedicatedModule { }