import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PrintLoadslipsComponent } from './print-loadslips.component';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';

const routes: Routes = [
  { path: '', component: PrintLoadslipsComponent},
  { path: ':loadslipId', component: PrintLoadslipsComponent},
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
    PrintLoadslipsComponent
  ]
})
export class printLoadslipModule { }
