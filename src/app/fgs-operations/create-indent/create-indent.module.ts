import { CustomDatePipeModule } from './../../date-pipe-shared.module';
import { ShareModuleModule } from 'src/app/public/share-module/share-module.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CreateIndentComponent } from './create-indent.component';
import { customMaterialModule } from '../../angular-material';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DeleteConfirmationPopupComponent } from 'src/app/public/delete-confirmation-popup/delete-confirmation-popup.component';

const routes: Routes = [
  { path: '', component: CreateIndentComponent },
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    FormsModule,
    customMaterialModule,
    LoaderModule,
    NgxDatatableModule,
    ShareModuleModule,
    CustomDatePipeModule
  ],
  declarations: [
    CreateIndentComponent,
  ],
  entryComponents: [
    CreateIndentComponent,
    DeleteConfirmationPopupComponent
  ]
})
export class CreateIndentModule { }
