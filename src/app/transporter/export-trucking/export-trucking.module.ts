import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
import { ExportTruckingComponent } from './export-trucking.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


const routes: Routes = [
  { path: '', component: ExportTruckingComponent },
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    FormsModule,
    customMaterialModule,
    NgxDatatableModule,
    LoaderModule,
    CustomDatePipeModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  declarations: [
    ExportTruckingComponent
  ]
})
export class ExportTruckingModule { }
