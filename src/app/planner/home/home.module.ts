import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { HomeComponent } from './home.component';
import { LoaderModule } from 'src/app/public/loader/loader-shared.module';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes: Routes = [
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    customMaterialModule,
    LoaderModule,
    FormsModule,
    NgxDatatableModule,
  ],
  declarations: [
    HomeComponent
  ],
  providers:
    [
    ],
})
export class homeModule { }
