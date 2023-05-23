import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtLocationComponent } from './mt-location.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../../../public/loader/loader-shared.module';
import { customMaterialModule } from '../../../angular-material';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatChipsModule} from '@angular/material/chips';
import { MatButtonModule, MatIconModule } from '@angular/material';


const routes: Routes = [
  { path: '', component: MtLocationComponent }
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    LoaderModule,
    customMaterialModule,
    FormsModule,
    NgxDatatableModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [MtLocationComponent]
})
export class MtLocationModule { }
