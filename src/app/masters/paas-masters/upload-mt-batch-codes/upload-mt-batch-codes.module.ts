import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadMtBatchCodesComponent } from './upload-mt-batch-codes.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes: Routes = [
  { path: '', component: UploadMtBatchCodesComponent }
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
  declarations: [UploadMtBatchCodesComponent]
})
export class UploadMtBatchCodesModule { }
