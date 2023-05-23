import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmUserComponent } from './um-user.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



const routes: Routes = [
  { path: '', component: UmUserComponent }
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    LoaderModule,
    customMaterialModule,
    FormsModule,
    // ReactiveFormsModule,
    NgxDatatableModule
  ],
  declarations: [
    UmUserComponent
  ]
})
export class UmUserModule { }
