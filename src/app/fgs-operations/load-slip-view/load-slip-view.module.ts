import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { LoadSlipViewComponent } from './load-slip-view.component';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
const routes: Routes = [
  { path: '', component: LoadSlipViewComponent },
  { path: ':loadslipId', component: LoadSlipViewComponent },
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    customMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LoaderModule,
    CustomDatePipeModule,
    NgxDatatableModule,
  ],
  declarations: [
    LoadSlipViewComponent
  ],
  providers:
    [
    ],
})
export class LoadSlipViewModule { }
