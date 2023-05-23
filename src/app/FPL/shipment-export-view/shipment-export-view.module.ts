import { FormsModule } from '@angular/forms';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ShipmentExportViewComponent } from './shipment-export-view.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { customMaterialModule } from 'src/app/angular-material';
import { LoaderModule } from 'src/app/public/loader/loader-shared.module';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    {
        path: '',
        component: ShipmentExportViewComponent
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgxDatatableModule,
        CustomDatePipeModule,
        customMaterialModule,
        LoaderModule,
        FormsModule,
        CommonModule
    ],
    exports: [],
    declarations: [
        ShipmentExportViewComponent
    ],

})

export class shipmentExportViewModule { }