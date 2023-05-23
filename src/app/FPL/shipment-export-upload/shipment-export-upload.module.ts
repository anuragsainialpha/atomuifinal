import { NgModule } from "@angular/core";
import { customMaterialModule } from "src/app/angular-material";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ShipmentExportUploadComponent } from "./shipment-export-upload.component";
import { LoaderModule } from "src/app/public/loader/loader-shared.module";
import { CommonModule } from "@angular/common";
const routes: Routes = [
    {
        path: '',
        component: ShipmentExportUploadComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        customMaterialModule,
        NgxDatatableModule,
        FormsModule,
        RouterModule.forChild(routes),
        LoaderModule
    ],
    declarations: [
        ShipmentExportUploadComponent
    ],
    exports: [],
    providers: []
})

export class shipmentExportModule { }