import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { LoadslipCancelPopupComponent } from 'src/app/public/loadslip-cancel-popup/loadslip-cancel-popup.component';
import { constants, loadslipEventsTriggers } from 'src/app/constants';
import { Location } from '@angular/common'
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
@Component({
  selector: 'app-ewm-loadslip-planner-view',
  templateUrl: './ewm-loadslip-planner-view.component.html',
  styleUrls: ['./ewm-loadslip-planner-view.component.scss']
})
export class EwmLoadslipPlannerViewComponent implements OnInit {

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
  itemLevelTotalTTE: any;
  itemLevelTotalWeight: any;
  itemLevelTotalVolume: any;
  sendForBarcodeDate: string;
  dropSeq: string;
  freightAvailableflag: string;
  multistopTruckNumber: string;
  variant_ONE: string;
  actualTruckType: string;
  truckT: string;
  transporter: string;
  description:string;
  city:string;
  STOSONumber: any;
  totalTTEQty: any;
  totalQuantity: any;
  totalOthersCount: number = 0;
  elrFlag: boolean;
  lrNum: any;
  printLr: boolean;
  generateLr: boolean;
  selectedCategories=[]
  indentCategory: any;
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


    if (this.loadslipID) {
      // Get If Transpoter is registered for e-load receipt
     // this.getElrFlag();
      this.isLoadslipIdAvaliable = true;
      this.getLoadSlipByIdFromServer(this.loadslipID);
      this.menuName = this.ActivatedRoute.snapshot.queryParams['menuName']


    }
  }

  ngOnInit() {

    if (this.service.checkRole() == this.roles.gateSecurity || this.service.checkRole() == this.roles.rdc_GAT) {
      localStorage.setItem("userMenu", this.menuName);
    } else {
      localStorage.setItem("userMenu", "load-slip");
    }
  }
  getLoadSlipByIdFromServer(loadslipID) {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getLoadSlipDetailsByID + "/" + loadslipID).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'];
        this.userSource = responseData.source;
        this.destination = responseData.destination;
        this.description = responseData.description;
        this.city = responseData.city;
        this.shipmentNumber = responseData.shipmentID;
        this.loadslipCategory = responseData.loadslipCategory;
        this.bayArrivedDate = responseData.bayArrivedDate;
        this.loadingStartDate = responseData.loadingStartDate;
        this.loadingEndDate = responseData.loadingEndDate;
        this.confirmedDate = responseData.confirmedDate;
        this.releasedDate = responseData.releasedDate;
        this.lsPrintDate = responseData.lsPrintDate;
        this.sendForBarcodeDate = responseData.sendForBarcodeDate
        this.bay = responseData.bay;
        this.ShipTo = responseData.shipTo;
        this.truckType = responseData.truckNumber;
        this.multistopTruckNumber = responseData.truckNumber;
        // this.IS_MULTI_STOP = responseData.multiStop;
        this.totalTyres = responseData.totalTyres;
        this.totalTubes = responseData.totalTubes;
        this.totalFlaps = responseData.totalFlaps;
        this.totalValves = responseData.totalValves;
        this.totalPctr = responseData.totPctr;
        this.totalOthersCount = responseData.otherQty;
        this.dropSeq = responseData.dropSeq;
        this.freightAvailableflag = responseData.freightAvailableflag;
        this.STOSONumber = responseData.sostoNumberVal;
        this.totalTTEQty = responseData.totalTTE;
        this.totalQuantity = responseData.totQty;
        // Shipment level values
        this.totalTTESeletecd = responseData.shipmentTTEUtil;
        this.totalMaterialWeight = responseData.shipmentWeightUtil;
        this.totalTruckVolume = responseData.shipmentVolumeUtil;
        this.selectedCategories=responseData.selectedItemCategories;
        this.indentCategory = responseData.truckIndentCategory;
        //Loads slip values 
        // this.loadslipTteUtil = responseData.tteUtil;
        // this.loadslipWtUtil = responseData.weightUtil;
        // this.loadslipVolUtil = responseData.volumeUtil;
        this.totalLoadedQty = responseData.totalLoadedQty;
        this.itemLevelTotalTTE = responseData.totalTTE;
        this.itemLevelTotalWeight = responseData.totalWeight;
        this.itemLevelTotalVolume = responseData.totalVolume;
        this.truckT = responseData.truckType;
        this.transporter = responseData.servprov;
        // variants & Actual Truck Type
        this.variant_ONE = responseData.variant1;
        this.actualTruckType = responseData.actualTruckType;
         // ELR Flag, LR Number
        this.elrFlag = responseData.elrFlag;
        this.lrNum = responseData.elrNumber;
        // Set if LR is to be Generated or Printed
        this.setLrButton();
        //get the loadslip plans & truckdetails
        this.isLoading = false;
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

  getElrFlag() {
    this.service.get_service(ApiserviceService.apisList.getElrFlag + "?loadslipId=" + this.loadslipID).subscribe(response => {
      if (response['statusCode'] == 200 && response["data"] == 'Y') {
        //|| response["data"] == 'N'
        this.elrFlag = true;
        this.lrNum = response['opsId'];
      }
    });
  }

  setLrButton() {
    if (this.lrNum !== null && this.lrNum !== undefined) {
      this.printLr = true;
      this.generateLr = false;
    }
    else {
      this.printLr = false;
      this.generateLr = true;
    }
  }


  // download load receipt
  downloadLoadReceipt() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.printLoadReceipt + "?loadslipId=" + this.loadslipID).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'];
        let lrNo = response['opsId'];
        const linkSource = 'data:application/pdf;base64,' + responseData;
        var element = document.createElement('a');
        element.setAttribute('href', linkSource);
        element.setAttribute('download', lrNo);
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
          "QTY": data.loadedQty,
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
          "scannedQty": data.scannedQty,

          //value details
          "VALVE_DESC": data.valveBatch,
          "VALVE_CODE": data.valveSKU,
          "VALVE_COMP_QTY": data.valveCompQty,
          "totalValueQty": data.valveQty,
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
      this.totalMaterialWeight = responseData.weightUtil;
      this.totalTruckVolume = responseData.volumeUtil;
      this.totalLoadedQty = responseData.totalLoadedQty;
      this.itemLevelTotalTTE = responseData.totalTTE;
      this.itemLevelTotalWeight = responseData.totalWeight;
      this.itemLevelTotalVolume = responseData.totalVolume;
    }
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

  locationBack() {
    this.location.back();
  }

  isDPREPRole(){
    if(this.service.checkRole() == this.roles.planner3 || this.service.checkRole() == this.roles.L1MGR || this.service.checkRole() == this.roles.L2MGR ){
      return true;
    }else{
      return false;
    }
  }

  // Print Excel
  export(): void {
      this.isLoading = true;
      this.service.get_service_DownLoadExcel(ApiserviceService.apisList.printLoadslip +'?loadslipId='+this.loadslipID+'&excel='+true).subscribe(response => {
        if(response.body.type == 'application/json'){
          //  When user requests for excel for cancelled LS then the return type will be 'application/json'
          // Other wise it will of type blob
           this.isLoading=false;
           this.toastr.error("Loadslip is found as cancelled...","Error!");
    
         }else if (response) {
          // Uncomment when export excel is generated in backend
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
        } else {
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
          this.isLoading = false;
        }
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
  
  }

}