import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
import { TruckInventoryShippingComponent } from './truck-inventory-shipping.component';

const routes: Routes = [
  { path: '', component: TruckInventoryShippingComponent},
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    FormsModule,
    customMaterialModule,
    LoaderModule,
    NgxDatatableModule,
    CustomDatePipeModule
  ],
  declarations: [
    TruckInventoryShippingComponent
  ]
})

export class truckInventoryShippingModule { }
