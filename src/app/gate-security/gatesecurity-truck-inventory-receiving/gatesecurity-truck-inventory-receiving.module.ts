import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { customMaterialModule } from '../../angular-material';
import { LoaderModule } from '../../public/loader/loader-shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CustomDatePipeModule } from 'src/app/date-pipe-shared.module';
import { GatesecurityTruckInventoryReceivingComponent } from './gatesecurity-truck-inventory-receiving.component';

const routes: Routes = [
    { path: '', component: GatesecurityTruckInventoryReceivingComponent },
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
    declarations: [
        GatesecurityTruckInventoryReceivingComponent
    ]
})

export class gatesecurityTruckInventoryReceivingModule { }
