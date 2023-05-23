import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginpageComponent } from './public/loginpage/loginpage.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { customMaterialModule } from './angular-material';
import { TopNavbarComponent } from './public/top-navbar/top-navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FgsAuthGuarsService } from './services/auth-guard/fgs-auth-guars.service';
import { LoaderModule } from './public/loader/loader-shared.module';
// import { LoadslipMovementComponent } from './public/loadslip-movement/loadslip-movement.component';
// import { GatesecurityTruckHistoryShippingComponent } from './gate-security/gatesecurity-truck-history-shipping/gatesecurity-truck-history-shipping.component';
// import { GatesecurityTruckHistoryReceivingComponent } from './gate-security/gatesecurity-truck-history-receiving/gatesecurity-truck-history-receiving.component';
// import { TruckHistoryReceivingComponent } from './gate-security/truck-history-receiving/truck-history-receiving.component';
// import { TruckHistoryShippingComponent } from './gate-security/truck-history-shipping/truck-history-shipping.component';
// import { TruckInventoryShippingComponent } from './gate-security/truck-inventory-shipping/truck-inventory-shipping.component';
// import { TruckInventoryReceivingComponent } from './gate-security/truck-inventory-receiving/truck-inventory-receiving.component';
// import { CancelledLoadslipsComponent } from './fgs-operations/cancelled-loadslips/cancelled-loadslips.component';
// import { ShareTruckComponent } from './gate-security/share-truck/share-truck.component';
// import { LoadslipPlannerViewComponent } from './planner/loadslip-planner-view/loadslip-planner-view.component';
// import { MultiDropLoadslipComponent } from './fgs-operations/multi-drop-loadslip/multi-drop-loadslip.component';
// import { IndentCancelConfirmationComponent } from './public/indent-cancel-confirmation/indent-cancel-confirmation.component';
// import { IndentCancellationPopupComponent } from './public/indent-cancellation-popup/indent-cancellation-popup.component';
// import { RdcIntransitTrucksReportComponent } from './gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.component';
// import { RdcIntransitTrucksComponent } from './gate-security/rdc-intransit-trucks/rdc-intransit-trucks.component';
// import { CreateLoadslipsErrorPopupComponent } from './public/create-loadslips-error-popup/create-loadslips-error-popup.component';
// import { ApprovePlanErrorsComponent } from './public/approve-plan-errors/approve-plan-errors.component';
// import { ManualIndentComponent } from './fgs-operations/manual-indent/manual-indent.component';
// import { CreateIndentExcelUploadComponent } from './fgs-operations/create-indent-excel-upload/create-indent-excel-upload.component';
// import { LoadslipSuccessDialogComponent } from './public/loadslip-success-dialog/loadslip-success-dialog.component';
// import { PrintLoadslipsComponent } from './fgs-operation/print-loadslips/print-loadslips.component';
// import { LoadslipCancelPopupComponent } from './public/loadslip-cancel-popup/loadslip-cancel-popup.component';
// import { DraftedLoadslipsComponent } from './fgs-operations/drafted-loadslips/drafted-loadslips.component';
// import { ModifyPlanDeleteConfirmationComponent } from './public/modify-plan-delete-confirmation/modify-plan-delete-confirmation.component';
// import { TruckHistoryComponent } from './gate-security/truck-history/truck-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    TopNavbarComponent,
    // LoadslipMovementComponent,
    // GatesecurityTruckHistoryShippingComponent,
    // GatesecurityTruckHistoryReceivingComponent

    // TruckHistoryReceivingComponent,
    // TruckHistoryShippingComponent,
    // TruckInventoryShippingComponent,
    // TruckInventoryReceivingComponent,
    // CancelledLoadslipsComponent,
    // ShareTruckComponent,
    // LoadslipPlannerViewComponent,
    // MultiDropLoadslipComponent,
    // IndentCancelConfirmationComponent,
    // IndentCancellationPopupComponent,
    // RdcIntransitTrucksReportComponent,
    // RdcIntransitTrucksComponent,
    // CreateLoadslipsErrorPopupComponent,
    // ApprovePlanErrorsComponent,
    // ManualIndentComponent,
    // CreateIndentExcelUploadComponent,
    // LoadslipSuccessDialogComponent,
    // PrintLoadslipsComponent,
    // LoadslipCancelPopupComponent,
    // DraftedLoadslipsComponent,
    // ModifyPlanDeleteConfirmationComponent,
    // TruckHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    customMaterialModule,
    ToastrModule.forRoot({
      closeButton: true
    }),
    HttpClientModule,
    FormsModule,
    LoaderModule
  ],
  providers: [
    FgsAuthGuarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
