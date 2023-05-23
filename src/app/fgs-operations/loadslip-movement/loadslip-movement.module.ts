import { CustomDatePipeModule } from './../../date-pipe-shared.module';
import { ApiserviceService } from './../../services/api/apiservice.service';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadslipMovementComponent } from './loadslip-movement.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: LoadslipMovementComponent },
];

@NgModule({
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    FormsModule,
    customMaterialModule,
    LoaderModule,
    NgxDatatableModule,
    CustomDatePipeModule
  ],
  declarations: [LoadslipMovementComponent]
})
export class loadslipMovementModule { }