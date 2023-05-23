import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtExcessWaitingLocLimitComponent } from './mt-excess-waiting-loc-limit.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', component: MtExcessWaitingLocLimitComponent }
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
  declarations: [MtExcessWaitingLocLimitComponent]
})
export class MtExcessWaitingLocLimitModule { }
