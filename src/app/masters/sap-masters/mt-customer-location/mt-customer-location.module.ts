import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
import { MtCustomerLocationComponent } from './mt-customer-location.component';

const routes: Routes = [
  { path: '', component: MtCustomerLocationComponent},
];



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
    MtCustomerLocationComponent
  ],
  entryComponents:[
    MtCustomerLocationComponent
   ],
  
})
export class MtCustomerLocationModule { }