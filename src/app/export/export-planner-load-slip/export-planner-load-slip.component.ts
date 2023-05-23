import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { constants } from 'src/app/constants';
import { SelectionModel } from '@angular/cdk/collections';
import { Location } from '@angular/common';
declare var $: any;
@Component({
  selector: 'app-export-planner-load-slip',
  templateUrl: './export-planner-load-slip.component.html',
  styles: []
})
export class ExportPlannerLoadSlipComponent implements OnInit {
  eventTriggers: any;
  destinationList: any;
  isLoading: boolean = false;
  totalTTESeletecd: any;
  totalTruckVolume: any;
  totalTyres: any;
  totalTubes: any;
  totalFlaps: any;
  totalValves: any;
  ShipTo: any;
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  limitOptions: Array<any> = [
    { key: '10', value: 10 },
    { key: '20', value: 20 },
    { key: '30', value: 30 },
    { key: '50', value: 50 },
    { key: '100', value: 100 }
  ];
  pageSize: number;
  loadSlipData = [];
  source = '';
  destination = '';
  description = '';
  truckType = '';
  minDate = new Date();
  editing = {};
  createLoadSlipSuccess: boolean = false;
  truckTypes = [];
  loadslipUtilizationData: any;
  totalMaterialWeight: any;
  shiptoPlaceList: any;
  userSource: string;
  isLoadslipIdAvaliable: boolean = false;
  setDefaultCurrency: string;
  totalPctr: any;
  viewType: string;
  loadslipID: any;
  bayArrivedDate: any;
  loadingStartDate: any;
  loadingEndDate: any;
  confirmedDate: any;
  releasedDate: any;
  lsPrintDate: any;
  shipmentNumber: any;
  bay: any;
  totalLoadedQty: any;
  loadslipCategory: any;
  marketSegmentMap: any;
  roles: any;
  totalTTE: any;
  itemLevelTotalWeight: any;
  itemLevelTotalVolume: any;
  displayedColumns: string[] = ['select', 'invoiceNumber', 'deliveryNumber', 'truckNumber', 'destLoc', 'invoiceDate'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  invoiceDataList = [];
  containerNum: string;
  selectedInvoiceListItems = [];
  isConfirmed: boolean = false;
  dropSeq: string;
  freightAvailableflag: string;
  multistopTruckNumber: string;
  variant_ONE: string;
  actualTruckType: string;
  transporter: string;
  indentCategory :string;
  city : string;

  finalInvoiceList = [];
  selectedInvoiceItems = [];
  @ViewChild('weSummaryCell') weSummaryCell: TemplateRef<any>;
  weightSumm: number = 0;
  qtySumm: number = 0;
  truckT: string;
  metricTon: number = 0;
  countryOfDestination: any;
  totalOthersCount: number=0;
  totalQuantity:  number=0;
  menuName: string;

  constructor(
    public service: ApiserviceService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private location: Location
  ) {
    setTimeout(() => { this.isLoading = true; }, 0);
    // this.userSource = localStorage.getItem("sourceID");
    this.loadslipID = this.ActivatedRoute.snapshot.params['loadslipId'];
    // this.viewType = this.ActivatedRoute.snapshot.params['viewType']
    console.log(this.ActivatedRoute.snapshot.params);
    this.roles = constants.roles;
    this.menuName = this.ActivatedRoute.snapshot.queryParams['menuName'];


    if (this.loadslipID) {
      this.isLoadslipIdAvaliable = true;
      this.getLoadSlipByIdFromServer(this.loadslipID);


    }
  }

  ngOnInit() {
    if(this.service.checkRole() == this.roles.gateSecurity || this.service.checkRole() == this.roles.rdc_GAT){
      localStorage.setItem("userMenu", this.menuName);
    }else{
      localStorage.setItem("userMenu", "load-slip");
    }
    this.pageSize = 20;
    this.page.limit = 20;
  }
  getLoadSlipByIdFromServer(loadslipID) {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getLoadSlipDetailsByID + "/" + loadslipID).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'];
        this.destination = responseData.destination;
        this.description = responseData.description;
        this.shipmentNumber = responseData.shipmentID;
        this.loadslipCategory = responseData.loadslipCategory;
        this.bayArrivedDate = responseData.bayArrivedDate;
        this.loadingStartDate = responseData.loadingStartDate;
        this.loadingEndDate = responseData.loadingEndDate;
        this.confirmedDate = responseData.confirmedDate;
        this.releasedDate = responseData.releasedDate;
        this.lsPrintDate = responseData.lsPrintDate;
        this.bay = responseData.bay;
        this.ShipTo = responseData.shipTo;
        this.truckType = responseData.truckNumber;
        this.totalTyres = responseData.totalTyres;
        this.totalTubes = responseData.totalTubes;
        this.totalFlaps = responseData.totalFlaps;
        this.totalValves = responseData.totalValves;
        this.totalPctr = responseData.totPctr;
        this.totalOthersCount=responseData.otherQty;
        this.totalQuantity = responseData.totQty;
        this.containerNum = responseData.containerNum;
        this.userSource = responseData.source;
        this.multistopTruckNumber = responseData.truckNumber;
        // this.IS_MULTI_STOP = responseData.multiStop;
        this.totalTyres = responseData.totalTyres;
        this.totalTubes = responseData.totalTubes;
        this.totalFlaps = responseData.totalFlaps;
        this.totalValves = responseData.totalValves;
        this.totalPctr = responseData.totPctr;
        this.dropSeq = responseData.dropSeq;
        this.freightAvailableflag = responseData.freightAvailableflag;
        // Shipment level values
        this.totalTTESeletecd = responseData.shipmentTTEUtil;
        this.totalMaterialWeight = responseData.shipmentWeightUtil;
        this.totalTruckVolume = responseData.shipmentVolumeUtil;
        //Loads slip values 
        // this.loadslipTteUtil = responseData.tteUtil;
        // this.loadslipWtUtil = responseData.weightUtil;
        // this.loadslipVolUtil = responseData.volumeUtil;
        this.totalLoadedQty = responseData.totalLoadedQty;
        this.totalTTE = responseData.totalTTE;
        this.itemLevelTotalWeight = responseData.totalWeight;
        this.itemLevelTotalVolume = responseData.totalVolume;
        // variants & Actual Truck Type
        this.variant_ONE = responseData.variant1;
        this.actualTruckType = responseData.actualTruckType;
        this.truckT = responseData.truckType;
        this.transporter = responseData.servprov;
        this.countryOfDestination = responseData.countryName;
        this.indentCategory = responseData.truckIndentCategory;
        this.city = responseData.city;

        this.invoiceDataList = responseData['delInvHeaderList'];
        for (let i = 0; i < this.invoiceDataList.length; i++) {
          if (this.invoiceDataList[i].loadslipId != null && this.invoiceDataList[i].loadslipId === this.loadslipID) {
            this.selectedInvoiceListItems.push(this.invoiceDataList[i]);
            this.dataSource = new MatTableDataSource<PeriodicElement>(this.selectedInvoiceListItems);
          }
        }
        this.selection = new SelectionModel<PeriodicElement>(true, this.selectedInvoiceListItems);

        this.setLoadSlipValue(responseData);
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong")
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }
  setLoadSlipValue(responseData) {
    if (responseData.loadslipDraftDataDtos) {
      this.totalTyres = 0;
      this.totalTubes = 0;
      this.totalFlaps = 0;
      this.totalValves = 0;
      this.totalPctr = 0;
      responseData.loadslipDraftDataDtos.forEach(data => {
        let newData = {
          "BATCH_CODE": data.batchCode,
          "qty": data.loadedQty,
          "lineNumber": data.lineNumber,
          "ITEM_DESCRIPTION": data.itemDesc,
          "ITEM_ID": data.itemId,
          "VOLUME": data.grossVol,
          "WEIGHT": data.grossWt,
          "TTE": data.tte,
          "SUM_QTY": data.availableQty,
          "ITEM_CATEGORY": data.itemCategory,
          "MIN_PRIORITY": data.priority,
          "isScannable": data.isScannable,
          // flap details
          // "FLAP_DESC": data.flapSKU,
          "flapBatch": data.flapBatch,
          "FLAP_CODE": data.flapSKU,
          "FLAP_COMP_QTY": data.flapCompQty,
          "totalFlapQty": data.falpQty,

          //tube details
          "tubeBatch": data.tubeBatch,
          "TUBE_CODE": data.tubeSKU,
          "TUBE_COMP_QTY": data.tubeCompQty,
          "totalTubeQty": data.tubeQty,

          //value details
          "VALVE_DESC": data.valveBatch,
          "VALVE_CODE": data.valveSKU,
          "VALVE_COMP_QTY": data.valveCompQty,
          "totalValueQty": data.valveQty,
          "INVOICE_NUMBER": data.invoiceNumber,
          "weight": data.weight
        };
        this.loadSlipData.push(newData);
        this.loadSlipData = [...this.loadSlipData];
      });
      this.totalTyres = responseData.totalTyres;
      this.totalTubes = responseData.totalTubes;
      this.totalFlaps = responseData.totalFlaps;
      this.totalValves = responseData.totalValves;
      this.totalPctr = responseData.totPctr;
      this.totalTTESeletecd = responseData.tteUtil;
      this.totalMaterialWeight = responseData.weightUtil  ;
      this.totalTruckVolume = responseData.volumeUtil;
      this.totalLoadedQty = responseData.totalLoadedQty;
      this.totalTTE = responseData.totalTTE;
      this.itemLevelTotalWeight = responseData.totalWeight;
      this.itemLevelTotalVolume = responseData.totalVolume;
      this.weightSummaryCell();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.selectedInvoiceListItems.length;
    return numSelected === numRows;
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.selectedInvoiceListItems.forEach(row => this.selection.select(row));
  }
  onOpenModal() {
    $('#myModal').modal('show');
  }
  onCloseHandled() {
    $('#myModal').modal('hide');
  }
  weightSummaryCell() {
    this.loadSlipData.forEach((item) => {
      this.weightSumm += item.WEIGHT;
      this.qtySumm += item.qty;
    });

    this.metricTon = this.weightSumm / 1000;
  }
  // Download loadslip after trigger CONFIRM event

  downloadLoadslip() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.printLoadslip + "?loadslipId=" + this.loadslipID).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'];
        const linkSource = 'data:application/pdf;base64,' + responseData;
        var element = document.createElement('a');
        element.setAttribute('href', linkSource);
        element.setAttribute('download', this.loadslipID);
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        this.isLoading = false;
        this.toastr.success(response['message']);
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error")
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // Print Excel
  export(): void {
    this.isLoading = true;
    this.service.get_service_DownLoadExcel(ApiserviceService.apisList.printLoadslip + '?loadslipId=' + this.loadslipID + '&excel=' + true).subscribe(response => {
     if(response.body.type == 'application/json'){
      //  When user requests for excel for cancelled LS then the return type will be 'application/json'
      // Other wise it will of type blob
       this.isLoading=false;
       this.toastr.error("Loadslip is found as cancelled...","Error!");

     }else if (response) {
        // Uncomment when export excel is generated in backend
        console.log(response.body);
        
        var blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        // var filename = 'LoadslipDetails.xlsx';
        var filename = this.loadslipID+'.xlsx';
        const link = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = link;
        a.download = filename
        a.click();
        window.URL.revokeObjectURL(link);
        a.remove();
        this.isLoading = false;
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })

  }

  locationBack() {
    this.location.back();
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
