import { ShareModuleModule } from './../../public/share-module/share-module.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModifyIndentComponent } from './modify-indent.component';
import { IndentCancelConfirmationComponent } from 'src/app/public/indent-cancel-confirmation/indent-cancel-confirmation.component';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
// import { CustomDateFormat } from 'src/app/custom-date-pipe';

const routes: Routes = [
  { path: '', component: ModifyIndentComponent },
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
    ModifyIndentComponent,
  ],
  entryComponents: [
    ModifyIndentComponent,
    IndentCancelConfirmationComponent
  ]
})
export class modifyIndentModule { }
