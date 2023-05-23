import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RdcIntransitTrucksComponent } from './rdc-intransit-trucks.component';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
const routes: Routes = [
  { path: '', component: RdcIntransitTrucksComponent},
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
    RdcIntransitTrucksComponent
  ]
})

export class rdcIntransitTrucksModule { }
