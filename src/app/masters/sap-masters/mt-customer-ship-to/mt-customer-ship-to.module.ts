import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtCustomerShipToComponent } from './mt-customer-ship-to.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', component: MtCustomerShipToComponent }
];


@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    LoaderModule,
    customMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [MtCustomerShipToComponent]
})
export class MtCustomerShipToModule { }
