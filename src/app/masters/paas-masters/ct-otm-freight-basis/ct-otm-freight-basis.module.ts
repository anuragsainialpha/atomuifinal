import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtOtmFreightBasisComponent } from './ct-otm-freight-basis.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', component: CtOtmFreightBasisComponent }
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
  declarations: [CtOtmFreightBasisComponent]
})
export class CtOtmFreightBasisModule { }
