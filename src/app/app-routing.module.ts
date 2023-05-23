import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginpageComponent } from './public/loginpage/loginpage.component';
import { FgsAuthGuarsService } from './services/auth-guard/fgs-auth-guars.service';
import { HomeGuardService } from './services/auth-guard/home-guard.service';

const routes: Routes = [
  {
    path: '', component: LoginpageComponent, pathMatch: "full", canActivate: [HomeGuardService]
  },
  { path: 'home', loadChildren: './planner/home/home.module#homeModule' },
  {
    path: 'plan',
    children: [
      { path: 'create-plan', loadChildren: './planner/create-plan/create-plan.module#CreatePlanModule' },
      { path: 'manual-plan', loadChildren: './planner/manual-plan/manual-plan.module#manualPlanModule' },

      {
        path: 'pending-plans',
        children: [
          { path: '', loadChildren: './planner/pending-plans/pending-plan.module#pendingPlanModule' },
          { path: 'view-plan', loadChildren: './planner/plan-with-errors/plan-with-error.module#planwithErrorModule' },
        ]
      }
    ]
  },
  {
    path: 'dispatch-plan',
    children: [
      { path: 'view-plan', loadChildren: './planner/view-plan/view-plan.module#ViewlPlanModule' },
      { path: 'modifiy-plan', loadChildren: './planner/modify-plan/modify-plan.module#ModifyPlanModule' },
      { path: 'approve-plans', loadChildren: './planner/approve-plans/approve-plans.module#approvePlanModule' }
    ]
  },
  { path: 'load-slip-view', loadChildren: './planner/loadslip-planner-view/loadslip-planner-view.module#loadslipPlannerViewModule' },
  { path: 'load-slip-view-for-export', loadChildren: './export/export-planner-load-slip/export-planner-load-slip.module#ExportPlannerLoadSlipModule' },
  { path: 'load-slip-view-for-jit', loadChildren: './jit/jit-planner-load-slip/jit-planner-load-slip.module#JitPlannerLoadSlipModule' },
  { path: 'load-slip-qty-view', loadChildren: './fgs-operations/load-slip-view/load-slip-view.module#LoadSlipViewModule' },
  {
    path: 'trucks',
    children: [
      // {  path: 'assign-trucks',  loadChildren: './planner/assign-trucks/assign-trucks.module#AssignTrucksModule'  },
      // { path: 'truck-details', loadChildren: './planner/truck-details/truck-details.module#TruckDetailsModule' }
    ]
  },
  {
    path: 'indent',
    children: [
      // {  path: 'create-indent',  loadChildren: './planner/create-indent/create-indent.module#CreateIndentModule'  },
      // {  path: 'search-indents', loadChildren: './planner/search-indents/search-indents.module#SearchIndentsModule' },
      { path: 'indent-status', loadChildren: './planner/indent-status/indent-status.module#IndentStatusModule' },
      { path: 'view-indents', loadChildren: './fgs-operations/search-indents/search-indents.module#SearchIndentsModule' },
    ]
  },
  {
    path: 'loadslip',
    children: [
      { path: 'drafted-load-slip', loadChildren: './fgs-operations/drafted-loadslips/drafted-loadslip.module#draftedLoadslipModule' },
      { path: 'view-loadslip', loadChildren: './fgs-operations/print-loadslips/print-loadslip.module#printLoadslipModule' },
    ]
  },


  /* FGS Operations  Role Routins */
  {
    path: 'fgs',
    children: [
      { path: 'create-plan', loadChildren: './planner/create-plan/create-plan.module#CreatePlanModule' },
      { path: 'manual-plan', loadChildren: './planner/manual-plan/manual-plan.module#manualPlanModule' },
      { path: 'freight', loadChildren: './masters/freight/mt-freight/mt-freight.module#MTFreightModule' },
      {
        path: 'pending-plans',
        children: [
          { path: '', loadChildren: './planner/pending-plans/pending-plan.module#pendingPlanModule' },
          { path: 'view-plan', loadChildren: './planner/plan-with-errors/plan-with-error.module#planwithErrorModule' },
        ]
      },

      { path: 'view-plan', loadChildren: './planner/view-plan/view-plan.module#ViewlPlanModule' },
      { path: 'modifiy-plan', loadChildren: './planner/modify-plan/modify-plan.module#ModifyPlanModule' },
      { path: 'approve-plans', loadChildren: './planner/approve-plans/approve-plans.module#approvePlanModule' },

      // { path: 'view-plans', loadChildren: './fgs-operations/fgs-view-plans/fgs-view-plan.module#fgsPlannerModule' },
      {
        path: 'indent',
        children: [
          { path: 'create-indents', loadChildren: './fgs-operations/create-indent/create-indent.module#CreateIndentModule' },
          { path: "create-indent-excel-upload", loadChildren: './fgs-operations/create-indent-excel-upload/create-indent.module#CreateIndentExcelUpload' },
          { path: 'view-indents', loadChildren: './fgs-operations/search-indents/search-indents.module#SearchIndentsModule' },
          { path: 'modify-indents', loadChildren: "./fgs-operations/modify-indent/modify-indent.module#modifyIndentModule" },
        ]
      },
      { path: 'create-load-slip', loadChildren: './fgs-operations/create-load-slip/create-load-slip.module#CreateLoadSlipModule' },
      { path: 'ewm-create-loadslip', loadChildren: './fgs-operations/EWM/ewm-create-loadslip/ewm-create-loadslip.module#EwmCreateLoadslipModule' },
      { path: 'ewm-loadslip-planner-view', loadChildren: './fgs-operations/EWM/ewm-loadslip-planner-view/ewm-loadslip-planner-view.module#EwmLoadslipPlannerViewModule' },
      { path: 'drafted-load-slip', loadChildren: './fgs-operations/drafted-loadslips/drafted-loadslip.module#draftedLoadslipModule' },
      { path: 'view-loadslip', loadChildren: './fgs-operations/print-loadslips/print-loadslip.module#printLoadslipModule' },
      { path: 'create-load-slip-for-export', loadChildren: './export/export-create-load-slip/export-create-load-slip.module#ExportCreateLoadSlipModule' },
      // {  path: 'create-load-slip-for-jit',  loadChildren: './jit/jit-create-load-slip/jit-create-load-slip.module#JitCreateLoadSlipModule'  },
      { path: 'cancelled-load-slips', loadChildren: './fgs-operations/cancelled-loadslips/cancelled-loadslips.module#cancelledLoadslipModule' },
      { path: 'loadslip-qty-check', loadChildren: './fgs-operations/loadslip-qty-check/loadslip-qty-check.module#LoadslipQtyCheckModule' },
      { path: 'loadslip-movement', loadChildren: './fgs-operations/loadslip-movement/loadslip-movement.module#loadslipMovementModule' },
      {
        path: 'truck-status',
        children: [
          // {  path: 'truck-inventory', loadChildren: './gate-security/truck-status/truck-status.module#TruckSTatusModule'  },
          // {   path: 'truck-history', loadChildren: './gate-security/truck-history/truck-history.module#truckHistoryModule' },
          { path: 'truck-inventory-shipping', loadChildren: './gate-security/truck-inventory-shipping/truck-inventory-shipping.module#truckInventoryShippingModule' },
          { path: 'truck-inventory-receiving', loadChildren: './gate-security/truck-inventory-receiving/truck-inventory-receiving.module#truckInventoryReceivingModule' },
          { path: 'truck-history-shipping', loadChildren: './gate-security/truck-history-shipping/truck-history-shipping.module#truckHistoryShippingModule' },
          { path: 'truck-history-receiving', loadChildren: './gate-security/truck-history-receiving/truck-history-receiving.module#truckHistoryReceivingModule' },
          { path: "transit-trucks", loadChildren: './gate-security/rdc-intransit-trucks/rdc-intrasit-trucks.module#rdcIntransitTrucksModule' },
          { path: 'truck-movement', loadChildren: './gate-security/truck-movement/truck-movement.module#truckMovementModule' },
          { path: 'cls', loadChildren: './fgs-operations/cls-data/cls-data.module#ClsDataModule' }
        ]
      },
      { path: 'share-truck', loadChildren: './gate-security/share-truck/share-truck.module#shareTruckModule' }
    ]
  },


  /* Transporter Role Routings */
  {
    path: 'transporter',
    children: [
      { path: 'assign-truck', loadChildren: './transporter/assign-trucks/assign-trucks.module#AssignTrucksModule' },
      { path: 'export-trucking', loadChildren: './transporter/export-trucking/export-trucking.module#ExportTruckingModule' }
    ]
  },



  /**  RDC Routings **/
  {
    path: 'rdc',
    children: [
      // {  path: 'drafted-load-slip',  loadChildren: './fgs-operations/drafted-loadslips/drafted-loadslip.module#draftedLoadslipModule' },
      // {  path: 'view-loadslip', loadChildren: './fgs-operations/print-loadslips/print-loadslip.module#printLoadslipModule' },
      { path: 'create-plan', loadChildren: './planner/create-plan/create-plan.module#CreatePlanModule' },
      { path: 'manual-plan', loadChildren: './planner/manual-plan/manual-plan.module#manualPlanModule' },
      {
        path: 'pending-plans',
        children: [
          { path: '', loadChildren: './planner/pending-plans/pending-plan.module#pendingPlanModule' },
          { path: 'view-plan', loadChildren: './planner/plan-with-errors/plan-with-error.module#planwithErrorModule' },
        ]
      },

      { path: 'view-plan', loadChildren: './planner/view-plan/view-plan.module#ViewlPlanModule' },
      { path: 'modifiy-plan', loadChildren: './planner/modify-plan/modify-plan.module#ModifyPlanModule' },
      { path: 'approve-plans', loadChildren: './planner/approve-plans/approve-plans.module#approvePlanModule' },
      { path: 'create-load-slip', loadChildren: './fgs-operations/create-load-slip/create-load-slip.module#CreateLoadSlipModule' },
      { path: 'drafted-load-slip', loadChildren: './fgs-operations/drafted-loadslips/drafted-loadslip.module#draftedLoadslipModule' },
      { path: 'view-loadslip', loadChildren: './fgs-operations/print-loadslips/print-loadslip.module#printLoadslipModule' },
      { path: 'create-load-slip-for-export', loadChildren: './export/export-create-load-slip/export-create-load-slip.module#ExportCreateLoadSlipModule' },
      // { path: 'create-load-slip-for-jit', loadChildren: './jit/jit-create-load-slip/jit-create-load-slip.module#JitCreateLoadSlipModule' },
      { path: 'cancelled-load-slips', loadChildren: './fgs-operations/cancelled-loadslips/cancelled-loadslips.module#cancelledLoadslipModule' },
      { path: 'loadslip-qty-check', loadChildren: './fgs-operations/loadslip-qty-check/loadslip-qty-check.module#LoadslipQtyCheckModule' },
      { path: 'loadslip-movement', loadChildren: './fgs-operations/loadslip-movement/loadslip-movement.module#loadslipMovementModule' },
      {
        path: "truck-status",
        children: [
          { path: 'gate-truck-inventory-receiving', loadChildren: './gate-security/gatesecurity-truck-inventory-receiving/gatesecurity-truck-inventory-receiving.module#gatesecurityTruckInventoryReceivingModule' },
          { path: 'gate-truck-inventory-shipping', loadChildren: './gate-security/gatesecurity-truck-inventory-shipping/gatesecurity-truck-inventory-shipping.module#gatesecurityTruckInventoryShippingModule' },
          { path: 'truck-inventory-shipping', loadChildren: './gate-security/truck-inventory-shipping/truck-inventory-shipping.module#truckInventoryShippingModule' },
          { path: 'truck-inventory-receiving', loadChildren: './gate-security/truck-inventory-receiving/truck-inventory-receiving.module#truckInventoryReceivingModule' },
          { path: 'truck-history-shipping', loadChildren: './gate-security/truck-history-shipping/truck-history-shipping.module#truckHistoryShippingModule' },
          { path: 'truck-history-receiving', loadChildren: './gate-security/truck-history-receiving/truck-history-receiving.module#truckHistoryReceivingModule' },
          { path: 'gate-truck-history-shipping', loadChildren: './gate-security/gatesecurity-truck-history-shipping/gatesecurity-truck-history-shipping.module#gatesecurityTruckHistoryShippingModule' },
          { path: 'gate-truck-history-receiving', loadChildren: './gate-security/gatesecurity-truck-history-receiving/gatesecurity-truck-history-receiving.module#gatesecurityTruckHistoryReceivingModule' },
          { path: 'truck-movement', loadChildren: './gate-security/truck-movement/truck-movement.module#truckMovementModule' }
        ]
      },
      {
        path: "receving-rdc",
        children: [
          { path: "transit-trucks", loadChildren: './gate-security/rdc-intransit-trucks/rdc-intrasit-trucks.module#rdcIntransitTrucksModule' },
          { path: 'report-truck', loadChildren: './gate-security/report-truck/report-truck.module#ReportTruckModule' },
          { path: 'report-Intransit-truck', loadChildren: './gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.module#rdcTrucksReportModule' }
        ]
      },
      {
        path: 'indent',
        children: [
          { path: 'create-indents', loadChildren: './fgs-operations/create-indent/create-indent.module#CreateIndentModule' },
          { path: "create-indent-excel-upload", loadChildren: './fgs-operations/create-indent-excel-upload/create-indent.module#CreateIndentExcelUpload' },
          { path: 'view-indents', loadChildren: './fgs-operations/search-indents/search-indents.module#SearchIndentsModule' },
          { path: 'modify-indents', loadChildren: "./fgs-operations/modify-indent/modify-indent.module#modifyIndentModule" },
        ]
      },
      // { path: 'view-plans', loadChildren: './fgs-operations/fgs-view-plans/fgs-view-plan.module#fgsPlannerModule' },
    ]
  },

  /* FGS GATE_SECURITY ROUTINGS */
  {
    path: 'gate-security',
    children: [
      {
        path: 'report-truck',
        loadChildren: './gate-security/report-truck/report-truck.module#ReportTruckModule'
      },
      // {  path: 'report-container', loadChildren: './export/export-truck-report/export-truck-report.module#ExportTruckReportModule'  },
      // {  path: 'truck-status',
      //   children: [
      //     { path: 'truck-inventory-receiving',  loadChildren: './gate-security/truck-inventory-receiving/truck-inventory-receiving.module#truckHistoryReceivingModule'  },
      //     {   path: 'truck-inventory',  loadChildren: './gate-security/truck-status/truck-status.module#TruckSTatusModule'  },
      //     {   path: 'truck-history',   loadChildren: './gate-security/truck-history/truck-history.module#truckHistoryModule' }
      //   ]
      // },
      { path: 'gate-truck-inventory-receiving', loadChildren: './gate-security/gatesecurity-truck-inventory-receiving/gatesecurity-truck-inventory-receiving.module#gatesecurityTruckInventoryReceivingModule' },
      { path: 'gate-truck-inventory-shipping', loadChildren: './gate-security/gatesecurity-truck-inventory-shipping/gatesecurity-truck-inventory-shipping.module#gatesecurityTruckInventoryShippingModule' },
      { path: 'gate-truck-history-shipping', loadChildren: './gate-security/gatesecurity-truck-history-shipping/gatesecurity-truck-history-shipping.module#gatesecurityTruckHistoryShippingModule' },
      { path: 'gate-truck-history-receiving', loadChildren: './gate-security/gatesecurity-truck-history-receiving/gatesecurity-truck-history-receiving.module#gatesecurityTruckHistoryReceivingModule' },
      { path: "transit-trucks", loadChildren: './gate-security/rdc-intransit-trucks/rdc-intrasit-trucks.module#rdcIntransitTrucksModule' },
      { path: 'report-intransit-truck', loadChildren: './gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.module#rdcTrucksReportModule' }
    ]
  },

  /**   JIT ROUTING  **/

  {
    path: 'jit',
    children: [
      {
        path: 'indent',
        children: [
          { path: 'create-indents', loadChildren: './fgs-operations/create-indent/create-indent.module#CreateIndentModule' },
          { path: "create-indent-excel-upload", loadChildren: './fgs-operations/create-indent-excel-upload/create-indent.module#CreateIndentExcelUpload' },
          { path: 'view-indents', loadChildren: './fgs-operations/search-indents/search-indents.module#SearchIndentsModule' },
          { path: 'modify-indents', loadChildren: "./fgs-operations/modify-indent/modify-indent.module#modifyIndentModule" },
        ]
      },
      // { path: 'create-load-slip', loadChildren: './fgs-operations/create-load-slip/create-load-slip.module#CreateLoadSlipModule' },
      { path: 'drafted-load-slip', loadChildren: './fgs-operations/drafted-loadslips/drafted-loadslip.module#draftedLoadslipModule' },
      { path: 'view-loadslip', loadChildren: './fgs-operations/print-loadslips/print-loadslip.module#printLoadslipModule' },
      // { path: 'create-load-slip-for-export', loadChildren: './export/export-create-load-slip/export-create-load-slip.module#ExportCreateLoadSlipModule' },
      { path: 'create-load-slip-for-jit', loadChildren: './jit/jit-create-load-slip/jit-create-load-slip.module#JitCreateLoadSlipModule' },
      { path: 'cancelled-load-slips', loadChildren: './fgs-operations/cancelled-loadslips/cancelled-loadslips.module#cancelledLoadslipModule' },
      { path: 'loadslip-movement', loadChildren: './fgs-operations/loadslip-movement/loadslip-movement.module#loadslipMovementModule' },
      {
        path: "truck-status",
        // loadChildren: './gate-security/rdc-intransit-trucks/rdc-intrasit-trucks.module#rdcIntransitTrucksModule'
        children: [
          { path: "transit-trucks", loadChildren: './gate-security/rdc-intransit-trucks/rdc-intrasit-trucks.module#rdcIntransitTrucksModule' },
          // { path: 'truck-inventory',  loadChildren: './jit/jit-truck-status/jit-truck-status.module#JitTruckStatusModule' },
          // {  path: 'truck-history',  loadChildren: './jit/jit-truck-history/jit-truck-history.module#JitTruckHistoryModule' },
          { path: 'truck-inventory-shipping', loadChildren: './gate-security/truck-inventory-shipping/truck-inventory-shipping.module#truckInventoryShippingModule' },
          { path: 'truck-inventory-receiving', loadChildren: './gate-security/truck-inventory-receiving/truck-inventory-receiving.module#truckInventoryReceivingModule' },
          { path: 'truck-history-shipping', loadChildren: './gate-security/truck-history-shipping/truck-history-shipping.module#truckHistoryShippingModule' },
          { path: 'truck-history-receiving', loadChildren: './gate-security/truck-history-receiving/truck-history-receiving.module#truckHistoryReceivingModule' },
          { path: 'gate-truck-inventory-receiving', loadChildren: './gate-security/gatesecurity-truck-inventory-receiving/gatesecurity-truck-inventory-receiving.module#gatesecurityTruckInventoryReceivingModule' },
          { path: 'gate-truck-inventory-shipping', loadChildren: './gate-security/gatesecurity-truck-inventory-shipping/gatesecurity-truck-inventory-shipping.module#gatesecurityTruckInventoryShippingModule' },
          { path: 'gate-truck-history-shipping', loadChildren: './gate-security/gatesecurity-truck-history-shipping/gatesecurity-truck-history-shipping.module#gatesecurityTruckHistoryShippingModule' },
          { path: 'gate-truck-history-receiving', loadChildren: './gate-security/gatesecurity-truck-history-receiving/gatesecurity-truck-history-receiving.module#gatesecurityTruckHistoryReceivingModule' },
          { path: 'report-truck', loadChildren: './gate-security/report-truck/report-truck.module#ReportTruckModule' },
          { path: "transit-trucks", loadChildren: './gate-security/rdc-intransit-trucks/rdc-intrasit-trucks.module#rdcIntransitTrucksModule' },
          { path: 'report-intransit-truck', loadChildren: './gate-security/rdc-intransit-trucks-report/rdc-intransit-trucks-report.module#rdcTrucksReportModule' },
          { path: 'truck-movement', loadChildren: './gate-security/truck-movement/truck-movement.module#truckMovementModule' },
          { path: 'cls', loadChildren: './fgs-operations/cls-data/cls-data.module#ClsDataModule' }
        ]
      },
      {
        path: 'share-truck',
        loadChildren: './gate-security/share-truck/share-truck.module#shareTruckModule'
      },

    ]
  },
  /** FOR  FPL role routing **/

  {
    path: 'fpl',
    children: [
      {
        path: 'shipment-export-upload',
        loadChildren: './FPL/shipment-export-upload/shipment-export-upload.module#shipmentExportModule'
      },
      {
        path:'shipment-export-view',
        loadChildren:'./FPL/shipment-export-view/shipment-export-view.module#shipmentExportViewModule'
      }
    ]
  },


  // For Export Module
  /* Admin Role Routing  MTOeBomModule MTPlantItemModule MTRepBomModule */
  {
    path: 'admin',
    children: [

      {
        path: 'sap-masters',
        children: [
          { path: 'mt-item', loadChildren: './masters/sap-masters/mt-item/mt-item.module#MtItemModule' },
          { path: 'mt-oe-bom', loadChildren: './masters/sap-masters/mt-oe-bom/mt-oe-bom.module#MTOeBomModule' },
          { path: 'mt-rep-bom', loadChildren: './masters/sap-masters/mt-rep-bom/mt-rep-bom.module#MTRepBomModule' },
          { path: 'mt-plant-item', loadChildren: './masters/sap-masters/mt-plant-item/mt-plant-item.module#MTPlantItemModule' },
          { path: 'mt-transporter', loadChildren: './masters/sap-masters/mt-transporter/mt-transporter.module#MtTransporterModule' },
          { path: 'mt-location', loadChildren: './masters/sap-masters/mt-location/mt-location.module#MtLocationModule' },
          { path: 'upload-mt-location', loadChildren: './masters/sap-masters/upload-mt-location/upload-mt-location.module#UploadMtLocationModule' },

          { path: 'mt-contact', loadChildren: './masters/sap-masters/mt-contact/mt-contact.module#MtContactModule' },
          { path: 'mt-customer', loadChildren: './masters/sap-masters/mt-customer/mt-customer.module#MtCustomerModule' },
          { path: 'mt-customer-ship-to', loadChildren: './masters/sap-masters/mt-customer-ship-to/mt-customer-ship-to.module#MtCustomerShipToModule' },
          { path: 'mt-customer-location', loadChildren: './masters/sap-masters/mt-customer-location/mt-customer-location.module#MtCustomerLocationModule' },
        ]
      },

      {
        path: "paas-masters",
        children: [
          { path: 'mt-batch-codes', loadChildren: './masters/paas-masters/mt-batch-codes/mt-batch-codes.module#MtBatchCodesModule' },
          { path: 'upload-mt-batch-codes', loadChildren: './masters/paas-masters/upload-mt-batch-codes/upload-mt-batch-codes.module#UploadMtBatchCodesModule' },
          { path: 'location-scan', loadChildren: './masters/paas-masters/location-scan/location-scan.module#LocationScanModule' },
          { path: 'upload-location-scan', loadChildren: './masters/paas-masters/upload-location-scan/upload-location-scan.module#UploadLocationScanModule' },
          { path: 'mt-material-group', loadChildren: './masters/paas-masters/mt-material-group/mt-material-group.module#MtMaterialGroupModule' },
          { path: 'upload-mt-material-group', loadChildren: './masters/paas-masters/upload-mt-material-group/upload-mt-material-group.module#UploadMtMaterialGroupModule' },
          { path: 'mt-sap-truck-type', loadChildren: './masters/paas-masters/mt-sap-truck-type/mt-sap-truck-type.module#MtSapTruckTypeModule' },
          { path: 'upload-mt-sap-truck-type', loadChildren: './masters/paas-masters/upload-mt-sap-truck-type/upload-mt-sap-truck-type.module#UploadMtSapTruckTypeModule' },
          { path: 'mt-truck-type', loadChildren: './masters/paas-masters/mt-truck-type/mt-truck-type.module#MtTruckTypeModule' },
          { path: 'upload-mt-truck-type', loadChildren: './masters/paas-masters/upload-mt-truck-type/upload-mt-truck-type.module#UploadMtTruckTypeModule' },
          { path: 'mt-valve', loadChildren: './masters/paas-masters/mt-valve/mt-valve.module#MtValveModule' },
          { path: 'order-type-lookup', loadChildren: './masters/paas-masters/order-type-lookup/order-type-lookup.module#OrderTypeLookupModule' },
          { path: 'mt-elr', loadChildren: './masters/paas-masters/mt-elr/mt-elr.module#MtElrModule' },
          { path: 'mt-excess-waiting-loc-limit', loadChildren: './masters/paas-masters/mt-excess-waiting-loc-limit/mt-excess-waiting-loc-limit.module#MtExcessWaitingLocLimitModule' },
          { path: 'mt-excess-waiting-rep-limit', loadChildren: './masters/paas-masters/mt-excess-waiting-rep-limit/mt-excess-waiting-rep-limit.module#MtExcessWaitingRepLimitModule' },
          { path: 'mt-location-bay', loadChildren: './masters/paas-masters/mt-location-bay/mt-location-bay.module#MtLocationBayModule' },
          { path: 'upload-mt-elr', loadChildren: './masters/paas-masters/upload-mt-elr/upload-mt-elr.module#UploadMtElrModule' },
          { path: 'upload-mt-location-bay', loadChildren: './masters/paas-masters/upload-location-bay/upload-location-bay.module#UploadLocationBayModule' },

          { path: 'ct-otm-freight-basis', loadChildren: './masters/paas-masters/ct-otm-freight-basis/ct-otm-freight-basis.module#CtOtmFreightBasisModule' },
          { path: 'ct-uom', loadChildren: './masters/paas-masters/ct-uom/ct-uom.module#CtUomModule' },
          { path: 'ct-uom-map', loadChildren: './masters/paas-masters/ct-uom-map/ct-uom-map.module#CtUomMapModule' },
          { path: 'mt-incoterms', loadChildren: './masters/paas-masters/mt-incoterms/mt-incoterms.module#MtIncotermsModule' },
          { path: 'mt-truck', loadChildren: './masters/paas-masters/mt-truck/mt-truck.module#MtTruckModule' },
          { path: 'servprov', loadChildren: './masters/paas-masters/servprov/servprov.module#ServprovModule' }
        ]

      },
      {
        path: "user-management",
        children: [
          { path: 'um-user', loadChildren: './masters/user-management/um-user/um-user.module#UmUserModule' },
          { path: 'create-user', loadChildren: './masters/user-management/create-user/create-user.module#CreateUserModule' },
          { path: 'change-password', loadChildren: './masters/user-management/change-password/change-password.module#ChangePasswordModule' },
          { path: 'um-user-role', loadChildren: './masters/user-management/um-user-role/um-user-role.module#UmUserRoleModule' },
          { path: 'um-user-association', loadChildren: './masters/user-management/um-user-association/um-user-association.module#UmUserAssociationModule' }
        ]
      },

      {
        path: "freight",
        children: [
          { path: 'mt-frieght', loadChildren: './masters/freight/mt-freight/mt-freight.module#MTFreightModule' },
          { path: 'create-frieght', loadChildren: './masters/freight/create-freight/create-freight.module#CreateFreightModule' },
          { path: 'mt-freight-dedicated', loadChildren: './masters/freight/mt-truck-dedicated/mt-truck-dedicated.module#MTTruckDedicatedModule'}
        ]
      }


    ]
  }

]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
