import { NgModule } from '@angular/core';
import { UploadMtElrComponent } from './upload-mt-elr.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', component: UploadMtElrComponent }
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
  declarations: [UploadMtElrComponent]
})
export class UploadMtElrModule { }
