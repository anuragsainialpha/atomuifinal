import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AssignTrucksComponent } from './assign-trucks.component';
import { customMaterialModule } from '../../angular-material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';


const routes: Routes = [
  { path: '', component: AssignTrucksComponent},
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
    CustomDatePipeModule
  ],
  declarations: [
    AssignTrucksComponent
  ]
})
export class AssignTrucksModule { }
