import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmUserAssociationComponent } from './um-user-association.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', component: UmUserAssociationComponent }
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
  declarations: [UmUserAssociationComponent]
})
export class UmUserAssociationModule { }
