import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtExcessWaitingRepLimitComponent } from './mt-excess-waiting-rep-limit.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', component: MtExcessWaitingRepLimitComponent }
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
  declarations: [MtExcessWaitingRepLimitComponent]
})
export class MtExcessWaitingRepLimitModule { }
