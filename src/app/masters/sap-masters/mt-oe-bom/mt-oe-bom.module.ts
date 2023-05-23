import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtOeBomComponent } from './mt-oe-bom.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', component: MtOeBomComponent }
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
  declarations: [
    MtOeBomComponent
  ]
})
export class MTOeBomModule { }
