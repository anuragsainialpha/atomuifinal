import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtTruckTypeComponent } from './mt-truck-type.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes: Routes = [
  { path: '', component: MtTruckTypeComponent }
];



@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    LoaderModule,
    CommonModule,
    customMaterialModule,
    FormsModule,
    NgxDatatableModule
  ],
  declarations: [MtTruckTypeComponent]
})
export class MtTruckTypeModule { }
