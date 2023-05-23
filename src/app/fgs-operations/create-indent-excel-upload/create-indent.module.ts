import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { customMaterialModule } from '../../angular-material';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CreateIndentExcelUploadComponent } from './create-indent-excel-upload.component';

const routes: Routes = [
  { path: '', component: CreateIndentExcelUploadComponent},
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    FormsModule,
    customMaterialModule,
    LoaderModule,
    NgxDatatableModule
  ],
  declarations: [
    CreateIndentExcelUploadComponent
  ],
  entryComponents:[
   
  ]
})
export class CreateIndentExcelUpload { }
