import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadMtLocationComponent } from './upload-mt-location.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', component: UploadMtLocationComponent }
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
  declarations: [UploadMtLocationComponent]
})
export class UploadMtLocationModule { }
