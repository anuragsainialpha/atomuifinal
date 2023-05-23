import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { LoadslipCancelPopupComponent } from 'src/app/public/loadslip-cancel-popup/loadslip-cancel-popup.component';
import { constants } from 'src/app/constants';
import { LoadslipSuccessDialogComponent } from 'src/app/public/loadslip-success-dialog/loadslip-success-dialog.component';
import { CreateLoadslipsErrorPopupComponent } from 'src/app/public/create-loadslips-error-popup/create-loadslips-error-popup.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
// import * as $ from 'jquery'
declare var $: any;
@Component({
  selector: 'app-export-create-load-slip',
  templateUrl: './export-create-load-slip.component.html',
  styles: []
})
export class ExportCreateLoadSlipComponent implements OnInit {
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
  totalTTE: number;
  totalWeight: number;
  totalVolume: any;
  totalLoadedQty: any;
  loadslipCategory: any;
  marketSegmentMap: any;
  roles: any;
  title: string;
  IS_RELEASE: boolean = true;
  displayedColumns: string[] = ['select', 'invoiceNumber', 'deliveryNumber', 'containerNum', 'destLoc', 'invoiceDate', 'billTo', 'billToName', 'shipTo', 'shipToName'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);
  invoiceDataList = [];
  // truckNo: string;
  invoiceBtn: string;
  invoiceData = [];
  isConfirmed: boolean = false;
  selectedInvoiceListItems = [];
  finalInvoiceList = [];
  containerNum: string;
  dropSeqList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  dropSeq: string;
  IS_MULTI_STOP: boolean;
  trackDetailsObj: any;
  multistopTruckNumber: string;
  multistopTruckType: string;
  loadslipTteUtil: number = 0;
  loadslipWtUtil: number = 0;
  loadslipVolUtil: number = 0;
  sendForBarcodeDate: any;
  variant_one_List = [];
  variant_two_List = [];
  variant_ONE: string;
  variant_TWO: string;
  actualTruckType: any;
  freightAvailableflag: string;
  itemLevelTotalTTE: number;
  itemLevelTotalWeight: number;
  itemLevelTotalVolume: any;
  shareTrcukDestinations = [];
  shareTruckLocation: string;
  actualTruckTypeList: any[];
  route_shipmentNumber: string
  isDraftMode: boolean = true;
  @ViewChild('weSummaryCell') weSummaryCell: TemplateRef<any>;
  weightSumm: number = 0;
  qtySumm: number = 0;
  truckT: string;
  transporter: string;
  metricTon: number = 0;
  IsUpdate: boolean = false;
  countryOfDestination: any;
  indentCategory: any;
  description: any;
  city:any;
  truckTypeClass: any;
  totalOthersCount: number;
  totalQuantity: number = 0;

  constructor(public service: ApiserviceService, private router: Router, private ActivatedRoute: ActivatedRoute, private toastr: ToastrService, private dialog: MatDialog) { }

  ngOnInit() {
    localStorage.setItem("userMenu", "load-slip");
    //  this.isLoading = true; 
    this.userSource = localStorage.getItem("sourceID");
    this.loadslipID = this.ActivatedRoute.snapshot.params['loadslipId'];
    this.viewType = this.ActivatedRoute.snapshot.params['viewType']
    this.route_shipmentNumber = this.ActivatedRoute.snapshot.queryParams['shipmentNumber']
    this.shipmentNumber = this.route_shipmentNumber;
    this.roles = constants.roles;
    this.pageSize = 20;
    this.page.limit = 20;


    if (!this.loadslipID) {
      this.title = 'Create Load Slip For Export';
      this.invoiceBtn = 'Add Invoice'
    } else if (this.loadslipID && !this.viewType) {
      this.title = 'Drafted Load Slip For Export';
      this.invoiceBtn = 'Edit Invoice'
    } else if (this.loadslipID && this.viewType) {
      this.title = 'View Load Slip For Export';
      this.invoiceBtn = 'View Invoice'
    }


    if (this.loadslipID) {
      this.getLoadSlipsDetailsById();
    } else if (this.route_shipmentNumber) {
      this.getLoadSlipUtilizationsForExportShareTuck(this.route_shipmentNumber);
      // this.getGateInContainer();
    } else {
      this.getGateInContainer();
    }


    // get variants 
    this.getvariants();

  }

  getLoadSlipUtilizationsForExportShareTuck(shipmentNumber) {
    this.isLoading = true;
    let data = {
      // 'truckNumber': this.truckNumber,
      // 'trucktype': this.truckType,
      'shipmentId': shipmentNumber,
      // 'destLoc': this.destination,
      // 'loadSlipId': this.loadslipID,
      'type': 'FGS_EXP',
      // 'actucaltrucktype': this.actualTruckType,
      // 'variant1': this.variant_ONE
    }
    this.service.post_service(ApiserviceService.apisList.getLoadSlipUtlizationsForExport, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        let truckRepsonseData = response['data'];
        // this.loadSlipData = [];
        this.loadslipUtilizationData = truckRepsonseData['loadSlipUtilizationDto'];       
        this.totalTTESeletecd = this.loadslipUtilizationData.shipmentTotalTTEUtil;
        this.totalMaterialWeight = this.loadslipUtilizationData.shipmentTotalWtUtil;
        this.totalTruckVolume = this.loadslipUtilizationData.shipmentTotalVolUtil;
        this.multistopTruckNumber = this.loadslipUtilizationData.truckNumber;
        this.multistopTruckType = this.loadslipUtilizationData.truckType;
        this.actualTruckType = this.loadslipUtilizationData.actualTruckType;
        this.variant_ONE = this.loadslipUtilizationData.variant1;
        this.destination = this.loadslipUtilizationData.destLoc;
        this.truckType = this.loadslipUtilizationData.truckNumber;
        this.containerNum = this.loadslipUtilizationData.containerNum;
        this.invoiceDataList = truckRepsonseData['delInvHeaders'];
        this.truckT = this.loadslipUtilizationData.truckType;
        this.transporter = this.loadslipUtilizationData.servprov;
        this.countryOfDestination = this.loadslipUtilizationData.countryName;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.invoiceDataList);
        // setTimeout(() => {
        this.isLoading = false;
        // }, 500);
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error")
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }


  // Check multi stop 
  checkMultiStop() {
    //check multi stop on based on the shipmentNumber,TruckNumber,Typeof truck if we get from the Route Params
    // We can the Boolean of MULTI stop 
    if ((this.route_shipmentNumber) || (this.IS_MULTI_STOP)) {
      return true
    } else {
      return false;
    }
  }
  // loadslip same trcuk navigation
  loadslipOnSameTruckNavigation() {
    if (this.shipmentNumber) {
      this.router.navigate(['/fgs/create-load-slip-for-export'], { queryParams: { shipmentNumber: this.shipmentNumber } })
    } else {
      this.toastr.error('Please Create a Loadslip')
    }

  }

  //share Truck destination list
  shareTruckDestinationList() {
    if (this.loadslipID) {
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.shareTruckDestions).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.shareTrcukDestinations = response['data'];
          if (this.shareTrcukDestinations) {
            $('#shareTruckModal').modal('show');
          }
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error")
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    } else {
      this.toastr.warning("Please create a Loadslip", "!! Warning");
    }
  }
  //share truck Server API
  shareTruck() {
    this.isLoading = true;
    if(this.shareTruckLocation){
    let data = {};
    this.service.post_service(ApiserviceService.apisList.shareTruck + "?shipmentId=" + this.shipmentNumber + '&pickupLoc=' + this.shareTruckLocation, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.toastr.success(response['message']);
        // this.shareTrcukDestinations = response['data'];
        this.shareTrcukDestinations = [];
        $('#shareTruckModal').modal('hide');
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error")
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }else{
    this.toastr.warning("Please select a pickup location...", 'Warning!');
    this.isLoading = false;
  }
}


  // get master variants data
  getvariants() {
    //this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getVariants).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'];
        this.variant_one_List = responseData.variant1;
        this.variant_two_List = responseData.variant2;
        //this.isLoading = false;
        // get the list of actual trucktypes
       // this.getActualTruckTypeList();
      } else {
        // this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error")
      }
    })
  }

  // get the list of actual truck type
  getActualTruckTypeList() {
    this.actualTruckTypeList = [];
    //this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getMasterTruckstype).subscribe(response => {
      console.log("respio", response)
      this.actualTruckTypeList = response['data'];
      //this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

     // Truck types based on destination
     getTruckTypesForDest(destination){
      if(destination){
        this.service.get_service(ApiserviceService.apisList.getMasterTruckTypesWithDest+'?sourceLoc='+this.userSource+'&destLoc='+destination).subscribe(response => {
          if(response['statusCode'] == 200){
            this.truckTypeClass = response['data'];
          }else{
            this.toastr.error(response['message'] ? response['message'] : 'Something went wrong...!', 'errError!');
          }
        }, err =>{
          this.toastr.error(err ? err : 'Something went wrong...', 'Error!')
        })
        }
    }

  // for getting gate in container list 
  getGateInContainer() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getExportGateInContainer + "?type=FGS_EXP&loadslipId=").subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'];
        this.truckTypes = responseData['gatedInTrucks'];
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong !", "!Error")
        this.isLoading = false;
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    });
  }

  // for getting load slip details by load slip id from server
  getLoadSlipsDetailsById() {
    this.isLoadslipIdAvaliable = true;
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getLoadSlipDetailsByID + "/" + this.loadslipID).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'];
        this.destination = responseData.destination;
        this.description = responseData.description;
        this.indentCategory = responseData.truckIndentCategory;
        this.city = responseData.city;
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
        this.multistopTruckNumber = responseData.truckNumber;
        this.indentCategory = responseData.truckIndentCategory;
        this.IS_MULTI_STOP = responseData.multiStop;
        this.totalTyres = responseData.totalTyres;
        this.totalTubes = responseData.totalTubes;
        this.totalFlaps = responseData.totalFlaps;
        this.totalValves = responseData.totalValves;
        this.totalPctr = responseData.totPctr;
        this.totalValves = responseData.totalValves;
        this.totalOthersCount=responseData.otherQty;
        this.totalQuantity = responseData.totQty;
        this.dropSeq = responseData.dropSeq;
        this.freightAvailableflag = responseData.freightAvailableflag;
        // Shipment level values
        this.totalTTESeletecd = responseData.shipmentTTEUtil;
        this.totalMaterialWeight = responseData.shipmentWeightUtil;
        this.totalTruckVolume = responseData.shipmentVolumeUtil;
        //Loads slip values 
        this.loadslipTteUtil = responseData.tteUtil;
        this.loadslipWtUtil = responseData.weightUtil;
        this.loadslipVolUtil = responseData.volumeUtil;
        this.totalLoadedQty = responseData.totalLoadedQty;
        this.totalTTE = responseData.totalTTE;
        this.totalWeight = responseData.totalWeight;
        this.totalVolume = responseData.totalVolume;
        // variants & Actual Truck Type
        this.variant_ONE = responseData.variant1;
        this.actualTruckType = responseData.actualTruckType;
        this.containerNum = responseData.containerNum
        this.invoiceDataList = responseData['delInvHeaderList'];
        this.IS_MULTI_STOP = responseData.multiStop;
        this.isDraftMode = responseData.isInDraft;
        this.truckT = responseData.truckType;
        this.transporter = responseData.servprov;
        this.countryOfDestination = responseData.countryName;
        // if view type is print checking condition for display invoice list else 
        if (this.isDraftMode) {
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.invoiceDataList);
          let selectedItems = [];
          for (let i = 0; i < this.invoiceDataList.length; i++) {
            if (this.invoiceDataList[i].loadslipId == this.loadslipID) {
              selectedItems.push(this.invoiceDataList[i]);
            }
          }
          this.selection = new SelectionModel<PeriodicElement>(true, selectedItems);
          this.IS_RELEASE = (selectedItems.length > 0) ? false : true;
        } else {
          for (let i = 0; i < this.invoiceDataList.length; i++) {
            if (this.invoiceDataList[i].loadslipId == this.loadslipID) {
              this.selectedInvoiceListItems.push(this.invoiceDataList[i]);
              this.dataSource = new MatTableDataSource<PeriodicElement>(this.selectedInvoiceListItems);
            }
          }
          this.IS_RELEASE = (this.selectedInvoiceListItems.length > 0) ? false : true;
          this.selection = new SelectionModel<PeriodicElement>(true, this.selectedInvoiceListItems);
        }
        this.getTruckTypesForDest(this.destination);


        // for getting container list based on loadslipId and type in draft mode
        this.getContainerListBaseLoadslipId(responseData);

      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong")
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // for getting container list based on loadslipId and type in draft mode
  getContainerListBaseLoadslipId(responseData) {
    this.service.get_service(ApiserviceService.apisList.getExportGateInContainer + "?type=FGS_EXP&loadslipId=" + this.loadslipID).subscribe(response => {
      if (response['statusCode'] == 200) {
        let dataResponse = response['data'];
        this.truckTypes = dataResponse['gatedInTrucks'];
        let newObject = {
          "CONTAINER_NUM": responseData.containerNum,
          "DEST_LOC": responseData.destination,
          "TRUCK_NUMBER": responseData.truckNumber,
          "TRUCK_TYPE": responseData.truckType,
          "SERVPROV": responseData.servprov,
          "ITEM_CATEGORY" : responseData.truckIndentCategory,
          "DEST_DESC" : responseData.description
        }
        let findTrcuk = this.truckTypes.findIndex(data => data.TRUCK_NUMBER == responseData.truckNumber);
        if (findTrcuk == -1) {
          this.truckTypes.push(newObject);
        }
        this.shiptoPlaceList = responseData.shipmentToLocs;
        let trackingObj = this.truckTypes.find(truckObj => truckObj.TRUCK_NUMBER == this.truckType);
        let respData = trackingObj;

        // for getting loadslip utilization data for export from server
        this.getLoadSlipUtilizationsForExport(respData.TRUCK_NUMBER, respData.TRUCK_TYPE, this.shipmentNumber);

        // this.isLoading = false;
        // Set table data
        this.setLoadSlipDraftData(responseData);
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong !", "!Error")
        this.isLoading = false;
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    });
  }
  // for getting loadslip utilization data for export from server
  getLoadSlipUtilizationsForExport(truckNumber, truckType, shipmentNumber) {
    this.isLoading = true;
    let data = {
      'truckNumber': truckNumber,
      'trucktype': truckType,
      'shipmentId': shipmentNumber,
      'destLoc': this.destination,
      'loadSlipId': this.loadslipID,
      'type': 'FGS_EXP',
      'actucaltrucktype': this.actualTruckType,
      'variant1': this.variant_ONE
    }
    this.service.post_service(ApiserviceService.apisList.getLoadSlipUtlizationsForExport, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        let truckRepsonseData = response['data'];
        // this.loadSlipData = [];
        this.loadslipUtilizationData = truckRepsonseData['loadSlipUtilizationDto'];
        this.totalTTESeletecd = this.loadslipUtilizationData.shipmentTotalTTEUtil;
        this.totalMaterialWeight = this.loadslipUtilizationData.shipmentTotalWtUtil;
        this.totalTruckVolume = this.loadslipUtilizationData.shipmentTotalVolUtil;
        // this.multistopTruckNumber = this.loadslipUtilizationData.truckNumber;
        // this.multistopTruckType = this.loadslipUtilizationData.truckType;
        // this.actualTruckType = this.loadslipUtilizationData.actualTruckType;
        // this.variant_ONE = this.loadslipUtilizationData.variant1;
        // this.destination = this.loadslipUtilizationData.destLoc;
        // this.containerNum = this.loadslipUtilizationData.containerNum;
        // this.truckType = this.loadslipUtilizationData.truckNumber;
        // this.invoiceDataList = truckRepsonseData['delInvHeaders'];
        // this.dataSource = new MatTableDataSource<PeriodicElement>(this.invoiceDataList);
        if (truckRepsonseData.delInvHeaders && this.invoiceDataList.length == 0) {
          this.invoiceDataList = truckRepsonseData.delInvHeaders;
          this.dataSource = new MatTableDataSource<PeriodicElement>(this.invoiceDataList);
        }
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error")
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // for setting loadslip details data 
  setLoadSlipDraftData(responseData) {
    // this.isLoading = true;
    this.IS_RELEASE = ((responseData.loadslipDraftDataDtos) ? (responseData.loadslipDraftDataDtos.length > 0) : []) ? false : true;
    if (responseData.loadslipDraftDataDtos) {
      // this.totalTyres = 0;
      // this.totalTubes = 0;
      // this.totalFlaps = 0;
      // this.totalValves = 0;
      // this.totalPctr = 0;
      responseData.loadslipDraftDataDtos.forEach(data => {
        let newData = {
          "BATCH_CODE": data.batchCode,
          "QTY": data.loadedQty,
          "lineNumber": data.lineNumber,
          "ITEM_DESCRIPTION": data.itemDesc,
          "ITEM_ID": data.itemId,
          "VOLUME": data.grossVol,
          "WEIGHT": data.weight,
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
          "LINE_NUMBER": data.lineNumber
          // "weight": data.weight
        };
        this.loadSlipData.push(newData);
        this.loadSlipData = [...this.loadSlipData];
      });
      this.weightSumm = 0;
      this.qtySumm = 0;
      this.metricTon = 0;
      this.weightSummaryCell()
      // this.totalTyres = responseData.totalTyres;
      // this.totalTubes = responseData.totalTubes;
      // this.totalFlaps = responseData.totalFlaps;
      // this.totalValves = responseData.totalValves;
      // this.totalPctr = responseData.totalpctr;
      // this.totalTTESeletecd = responseData.tteUtil;
      // this.totalMaterialWeight = responseData.weightUtil;
      // this.totalTruckVolume = responseData.volumeUtil;
      // this.totalLoadedQty = responseData.totalLoadedQty;
      // this.totalTTE = responseData.totalTTE;
      // this.totalWeight = responseData.totalWeight;
      // this.totalVolume = responseData.totalVolume;
    }
    // this.isLoading = false;
  }


  onPageSizeChanged(event) {
    this.page.limit = event;
    this.page.pageSize = this.pageSize;
  }

  createLoadSlip() {
    this.createLoadSlipSuccess = true;
  }

  // get Load slip Utilizations for export
  getLoadSlipUtilazations(containerNumber) {
    this.isLoading = true;
    // this.clearFields();

    // Here we getting only truck number based on the truck number we are getting container number ,destination location,truck type
    let trackingObj = this.truckTypes.find(truckObj => truckObj.CONTAINER_NUM == containerNumber);
    // whole object
    let respData = trackingObj;
    //splitting those details
    this.truckType = respData.TRUCK_NUMBER;
    this.containerNum = trackingObj.CONTAINER_NUM;
    this.destination = trackingObj.DEST_LOC
    this.truckT = trackingObj.TRUCK_TYPE;
    this.transporter = trackingObj.SERVPROV;
    this.indentCategory = trackingObj.ITEM_CATEGORY;
    this.description = trackingObj.DEST_DESC;
    this.countryOfDestination = trackingObj.COUNTRYNAME;
    let data = {
      'truckNumber': respData.TRUCK_NUMBER,
      'trucktype': respData.TRUCK_TYPE,
      'shipmentId': this.shipmentNumber,
      'destLoc': this.destination,
      'loadSlipId': this.loadslipID,
      'type': 'FGS_EXP',
      'actucaltrucktype': this.actualTruckType,
      'variant1': this.variant_ONE,
      'souceLoc':this.userSource,
      'trasporter':this.transporter
    }
    this.service.post_service(ApiserviceService.apisList.getLoadSlipUtlizationsForExport, data).subscribe(response => {
      if (response['statusCode'] == 200) {
        let repsonseData = response['data']
        this.invoiceDataList = repsonseData.delInvHeaders;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.invoiceDataList);
        this.loadslipUtilizationData = repsonseData['loadSlipUtilizationDto']
        // If we selected the Container Table data is populated ,then Actual truck type or variant selected manual calculate the values
        this.ManualTTE_Weight_volume_Calculation();
        this.city = this.loadslipUtilizationData.city;
        this.variant_ONE = this.loadslipUtilizationData.variant1;
        this.getTruckTypesForDest(this.destination);
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error")
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // Calculate manual TTE ,Material Weight ,Total Volume
  ManualTTE_Weight_volume_Calculation() {
    let loadslipItemLevelTTE = 0;
    let LoadslipItemLevelWeight = 0;
    let LoadslipItemLevelVolume = 0;
    this.loadSlipData.forEach(row => {
      if (row.QTY != null) {
        let QTY = Number(row.QTY)
        // Item Level Calculations
        loadslipItemLevelTTE += QTY * (row.TTE ? row.TTE : 0);
        //TODO
        LoadslipItemLevelWeight += 1 * (row.WEIGHT ? row.WEIGHT : 0);
        LoadslipItemLevelVolume += QTY * (row.VOLUME ? row.VOLUME : 0);
      }
    })
    //total Material Weight  filled In the Truck
    if (this.loadslipUtilizationData.truckWeightCapacity != null && this.loadslipUtilizationData.truckWeightCapacity != 0) {
      this.totalMaterialWeight = ((LoadslipItemLevelWeight / this.loadslipUtilizationData.truckWeightCapacity) * 100);
    }
    else {
      this.totalMaterialWeight = 0;
    }
    //Total  TTE filled int the Truck
    if (this.loadslipUtilizationData.tteCapacity != null && this.loadslipUtilizationData.tteCapacity != 0) {
      //Check TTE Util for Multi-Drop or Noramal Loadslip creation

      this.totalTTESeletecd = ((loadslipItemLevelTTE / this.loadslipUtilizationData.tteCapacity) * 100);
    } else {
      this.totalTTESeletecd = 0;
    }
    // Total Volume Occupied in The Truck 
    if (this.loadslipUtilizationData.truckVolumeCapacity != null && this.loadslipUtilizationData.truckVolumeCapacity != 0) {
      this.totalTruckVolume = ((LoadslipItemLevelVolume / this.loadslipUtilizationData.truckVolumeCapacity) * 100)
    } else {
      this.totalTruckVolume = 0;
    }
  }
  // Load slips events trigger
  eventCall(loadSlipID, eventType) {
    if (loadSlipID) {
      this.isLoading = true;
      let data = {
        loadslipID: loadSlipID,
        eventType: eventType
      }
      this.service.post_service(ApiserviceService.apisList.updateLoadSlipevent, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.toastr.success(response['message']);
          //Event type if Draft
          let responseData = response['data']['data'];
          this.bayArrivedDate = responseData.bayArrivedDate;
          this.loadingStartDate = responseData.loadingStartDate;
          this.loadingEndDate = responseData.loadingEndDate;
          this.confirmedDate = responseData.confirmedDate;
          this.releasedDate = responseData.releasedDate;
          this.lsPrintDate = responseData.lsPrintDate;
          this.bay = responseData.bay;

          this.isLoading = false;

        } else {
          this.isLoading = false;
          this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error")
        }

      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    } else {
      this.toastr.warning("Please create a Loadslip", "!! Warning");
    }

  }

  //save as draft or print eEvents trigger
  saveAsDraft_Print_trigger(eventType) {
    this.isLoading = true;
    let linenumber;
    let newDraftableDataArray = [];
    this.loadSlipData.forEach((data, index) => {
      if (data.QTY) {
        linenumber = index + 1;
        let newArray = {
          "batchCode": data.BATCH_CODE,

          "falpQty": data.totalFlapQty,
          "flapBatch": data.flapBatch,
          "flapSKU": data.FLAP_CODE,

          "grossVol": data.VOLUME,
          "grossWt": data.WEIGHT,
          "itemDesc": data.ITEM_DESCRIPTION,
          "itemId": data.ITEM_ID,
          "lineNumber": linenumber,
          "loadedQty": data.QTY,
          'itemCategory': data.ITEM_CATEGORY,
          "tte": data.TTE,
          "invoiceNumber": data.INVOICE_NUMBER,

          "tubeBatch": data.tubeBatch,
          "tubeQty": data.totalTubeQty,
          "tubeSKU": data.TUBE_CODE,
          // "valveBatch": data.VALVE_DESC,
          "valveBatch": '',
          "valveQty": data.totalValueQty,
          "valveSKU": data.VALVE_CODE,
          // 'invoiceNumber': data.INVOICE_NUMBER
        }
        newDraftableDataArray.push(newArray);
      }
    });
    if (this.loadslipID) {
      if (!this.isConfirmed) {
        this.finalInvoiceList = [];
        for (let i = 0; i < this.invoiceDataList.length; i++) {
          if (this.invoiceDataList[i].loadslipId == this.loadslipID) {
            this.finalInvoiceList.push(this.invoiceDataList[i].invoiceNumber);
          }
        }
      }
      //Check whether it is save or Update
      this.IsUpdate = true
    } else {
      this.IsUpdate = false;
    }
    let sendbleTTEUtil = 0;
    let sendableWEIGHTUtil = 0;
    let sendableVOLUMEUtil = 0;
    let multiloadslipItemLevelTTE = 0;
    let multiLoadslipItemLevelWeight = 0;
    let multiLoadslipItemLevelVolume = 0;
    if (this.checkMultiStop()) {
      // MULTI STOP TTE , WEIGHT, VOLUME
      this.loadSlipData.forEach(row => {
        if (row.QTY != null) {
          let QTY = Number(row.QTY)
          multiloadslipItemLevelTTE += QTY * (row.TTE ? row.TTE : 0);
          //Todo
          multiLoadslipItemLevelWeight += 1 * (row.WEIGHT ? row.WEIGHT : 0);
          multiLoadslipItemLevelVolume += QTY * (row.VOLUME ? row.VOLUME : 0);
        }
      })
      //total Material Weight  filled In the Truck
      if (this.loadslipUtilizationData.truckWeightCapacity != null && this.loadslipUtilizationData.truckWeightCapacity != 0) {
        sendableWEIGHTUtil = ((multiLoadslipItemLevelWeight / this.loadslipUtilizationData.truckWeightCapacity) * 100);
      }
      //Total  TTE filled int the Truck
      if (this.loadslipUtilizationData.tteCapacity != null && this.loadslipUtilizationData.tteCapacity != 0) {
        //Check TTE Util for Multi-Drop or Noramal Loadslip creation
        sendbleTTEUtil = ((multiloadslipItemLevelTTE / this.loadslipUtilizationData.tteCapacity) * 100);
      }
      // Total Volume Occupied in The Truck 
      if (this.loadslipUtilizationData.truckVolumeCapacity != null && this.loadslipUtilizationData.truckVolumeCapacity != 0) {
        sendableVOLUMEUtil = ((multiLoadslipItemLevelVolume / this.loadslipUtilizationData.truckVolumeCapacity) * 100)
      }
      // sendbleTTEUtil = Number(this.totalTTESeletecd - this.loadslipUtilizationData.shipmentTotalTTEUtil);
      // sendableWEIGHTUtil = Number(this.totalMaterialWeight ? (this.totalMaterialWeight - this.loadslipUtilizationData.shipmentTotalWtUtil) : 0);
      // sendableVOLUMEUtil = Number(this.totalTruckVolume ? (this.totalTruckVolume - this.loadslipUtilizationData.shipmentTotalVolUtil) : 0);
    } else {
      // SINGLE STOP TTE ,WEIGHT, VOLUME
      sendbleTTEUtil = Number(this.totalTTESeletecd);
      sendableWEIGHTUtil = Number(this.totalMaterialWeight ? this.totalMaterialWeight : 0);
      sendableVOLUMEUtil = Number(this.totalTruckVolume ? this.totalTruckVolume : 0)
    }


    let saveasDraftData = {
      'source': this.userSource,
      'destination': this.destination,
      'truckNumber': this.truckType,
      'containerNum': this.containerNum,
      'loadslipDraftDataDtos': newDraftableDataArray,
      'action': eventType,
      'loadSlipId': this.loadslipID,
      'tteUtil': sendbleTTEUtil,
      'weightUtil': sendableWEIGHTUtil,
      'volumeUtil': sendableVOLUMEUtil,
      'totalTyres': this.totalTyres,
      'totalTubes': this.totalTubes,
      'totalFlaps': this.totalFlaps,
      'totalValves': this.totalValves,
      'totPctr': this.totalPctr,
      'otherQty':this.totalOthersCount,
      'totalLoadedQty': this.totalLoadedQty,
      'totalTTE': this.totalTTE,
      'totalWeight': this.totalWeight,
      'totalVolume': this.totalVolume,
      'shipTo': this.ShipTo,
      'invoiceList': this.finalInvoiceList,
      'type': 'FGS_EXP',
      'shipmentID': this.shipmentNumber,
      'actualTruckType': this.actualTruckType,
      'variant1': this.variant_ONE,
      'dropSeq': this.dropSeq
    }
    // if (eventType != 'PRINT') {
    //   //check type of Save Single Stop or Multi Stop
    //   if (this.checkMultiStop()) {
    //     this.saveAsDraftMultiStopAPI(saveasDraftData)
    //   } else {
    //     // for saving loadslip for export in draft mode
    //     this.saveLoadslipDraftForExport(saveasDraftData);
    //   }
    // }
    // else {
    //   //check type of Save Single Stop or Multi Stop
    //   if (this.checkMultiStop()) {
    //     this.MultiStopPrintServerAPI(saveasDraftData)
    //   } else {
    //     // for print  loadslip for export 
    //     this.saveLoadslipPrintForExport(saveasDraftData);
    //   }
    // }
    let HTTPAPI;
    if (this.truckType) {
      if (this.checkMultiStop()) {
        HTTPAPI = ApiserviceService.apisList.multipleDropLoadSlip;
        this.saveLoadslipDraftForExport(saveasDraftData, HTTPAPI)
      } else {
        HTTPAPI = ApiserviceService.apisList.loadslidSaveasDraft
        // for saving loadslip for export in draft mode
        this.saveLoadslipDraftForExport(saveasDraftData, HTTPAPI);
      }
    } else {
      this.isLoading = false;
      this.toastr.error("Please select a Truck", " ! Error ")

    }
  }

  // for saving loadslip for export in draft mode
  saveLoadslipDraftForExport(saveasDraftData, HTTPAPI) {
    this.isLoading = true;
    this.service.post_service(HTTPAPI, saveasDraftData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.toastr.success(response['message']);
        this.loadSlipData = [];
        // let responseData = response['data'].loadslipDraftDto.loadslipDraftDataDtos;
        let responseData = response['data'].loadslipDraftDto ? (response['data'].loadslipDraftDto) : {};
        this.totalOthersCount=response['data'].otherQty;
        this.totalQuantity = response['data'].totQty;
        this.setLoadSlipDraftData(responseData);
        // responseData.forEach(data => {
        //   let newData = {
        //     "BATCH_CODE": data.batchCode,
        //     "qty": data.loadedQty,
        //     "QTY": data.loadedQty,
        //     "lineNumber": data.lineNumber,
        //     "ITEM_DESCRIPTION": data.itemDesc,
        //     "ITEM_ID": data.itemId,
        //     "VOLUME": data.grossVol,
        //     "WEIGHT": data.grossWt,
        //     "TTE": data.tte,
        //     "SUM_QTY": data.availableQty,
        //     "ITEM_CATEGORY": data.itemCategory,
        //     "MIN_PRIORITY": data.priority,
        //     "isScannable": data.isScannable,
        //     // flap details
        //     // "FLAP_DESC": data.flapSKU,
        //     "flapBatch": data.flapBatch,
        //     "FLAP_CODE": data.flapSKU,
        //     "FLAP_COMP_QTY": data.flapCompQty,
        //     "totalFlapQty": data.falpQty,

        //     //tube details
        //     "tubeBatch": data.tubeBatch,
        //     "TUBE_CODE": data.tubeSKU,
        //     "TUBE_COMP_QTY": data.tubeCompQty,
        //     "totalTubeQty": data.tubeQty,

        //     //value details
        //     "VALVE_DESC": data.valveBatch,
        //     "VALVE_CODE": data.valveSKU,
        //     "VALVE_COMP_QTY": data.valveCompQty,
        //     "totalValueQty": data.valveQty,
        //     "INVOICE_NUMBER": data.invoiceNumber,
        //     "LINE_NUMBER": data.lineNumber
        //   };
        //   this.loadSlipData.push(newData);
        //   this.loadSlipData = [...this.loadSlipData];
        // });
        if (this.loadslipID) {
          this.lsPrintDate = response['data'].lsPrintDate;
        }
        let BASE64 = response['data'].loadslip;
        if (BASE64) {
          const linkSource = 'data:application/pdf;base64,' + BASE64;
          var element = document.createElement('a');
          element.setAttribute('href', linkSource);
          element.setAttribute('download', response['data'].loadSlipId);
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
        }
        if (response['data'].loadSlipId) {
          // this.showLoadslipInModal(response['data'].loadSlipId, "DRAFT");
          this.showLoadslipInModal(response['data'].loadSlipId, saveasDraftData.action, this.IsUpdate, response['data']);
        }
        this.isLoading = false;

      } else {
        // this.openloadsliperrorPopup(response['data'])
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error")
      }

    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    });
  }
  // // for print  loadslip for export 
  // saveLoadslipPrintForExport(saveasDraftData) {
  //   this.isLoading = true;
  //   this.service.downloadPDF(ApiserviceService.apisList.loadslidSaveasDraft, saveasDraftData).subscribe((response: any) => {
  //     if (response.statusCode == 200) {
  //       if (this.loadslipID) {
  //         this.lsPrintDate = response['data'].lsPrintDate;
  //       }
  //       const linkSource = 'data:application/pdf;base64,' + response['data'].PDF_DATA;
  //       var element = document.createElement('a');
  //       element.setAttribute('href', linkSource);
  //       element.setAttribute('download', response['data'].LOADSLIP_ID);
  //       document.body.appendChild(element);
  //       element.click();
  //       document.body.removeChild(element);
  //       if (response['data'].LOADSLIP_ID) {
  //         // PRINT
  //         // this.showLoadslipInModal(response['data'].LOADSLIP_ID, "PRINT");
  //         this.showLoadslipInModal(response['data'].LOADSLIP_ID, "PRINT", this.IsUpdate, response['data']);
  //       }
  //       this.isLoading = false;
  //     } else {
  //       if (response['data']) {
  //         this.openloadsliperrorPopup(response['data'])
  //       }
  //       this.isLoading = false;
  //     }
  //   }, (err) => {
  //     this.toastr.error(err ? err : "Something went wrong..", "Error!");
  //     this.isLoading = false;
  //   });
  // }


  // // save As Draft Multi stop API
  // saveAsDraftMultiStopAPI(saveasDraftData) {
  //   this.isLoading = true;
  //   this.service.post_service(ApiserviceService.apisList.multipleDropLoadSlip, saveasDraftData).subscribe(response => {
  //     if (response['statusCode'] == 200) {

  //       this.toastr.success(response['message']);
  //       this.loadSlipData = [];
  //       let responseData = response['data'].loadslipDraftDto.loadslipDraftDataDtos;
  //       responseData.forEach(data => {
  //         let newData = {
  //           "BATCH_CODE": data.batchCode,
  //           "qty": data.loadedQty,
  //           "QTY": data.loadedQty,
  //           "lineNumber": data.lineNumber,
  //           "ITEM_DESCRIPTION": data.itemDesc,
  //           "ITEM_ID": data.itemId,
  //           "VOLUME": data.grossVol,
  //           "WEIGHT": data.grossWt,
  //           "TTE": data.tte,
  //           "SUM_QTY": data.availableQty,
  //           "ITEM_CATEGORY": data.itemCategory,
  //           "MIN_PRIORITY": data.priority,
  //           "isScannable": data.isScannable,
  //           // flap details
  //           // "FLAP_DESC": data.flapSKU,
  //           "flapBatch": data.flapBatch,
  //           "FLAP_CODE": data.flapSKU,
  //           "FLAP_COMP_QTY": data.flapCompQty,
  //           "totalFlapQty": data.falpQty,

  //           //tube details
  //           "tubeBatch": data.tubeBatch,
  //           "TUBE_CODE": data.tubeSKU,
  //           "TUBE_COMP_QTY": data.tubeCompQty,
  //           "totalTubeQty": data.tubeQty,

  //           //value details
  //           "VALVE_DESC": data.valveBatch,
  //           "VALVE_CODE": data.valveSKU,
  //           "VALVE_COMP_QTY": data.valveCompQty,
  //           "totalValueQty": data.valveQty,
  //           "INVOICE_NUMBER": data.invoiceNumber,
  //           "LINE_NUMBER": data.lineNumber
  //         };
  //         this.loadSlipData.push(newData);
  //         this.loadSlipData = [...this.loadSlipData];
  //         console.log(this.loadSlipData, "this.loadSlipData")
  //       });
  //       if (response['data'].loadSlipId) {
  //         // this.showLoadslipInModal(response['data'].loadSlipId, "DRAFT");
  //         this.showLoadslipInModal(response['data'].loadSlipId, "DRAFT", this.IsUpdate, response['data']);
  //       }
  //       this.isLoading = false;

  //     } else {
  //       if (response['data']) {
  //         this.openloadsliperrorPopup(response['data'])
  //       }
  //       this.isLoading = false;
  //     }
  //   })
  // }


  // // Signle stop or Loadslip updation Print API
  // MultiStopPrintServerAPI(saveasDraftData) {
  //   this.isLoading = true;
  //   this.service.downloadPDF(ApiserviceService.apisList.multipleDropLoadSlip, saveasDraftData).subscribe((response: any) => {
  //     if (response.statusCode == 200) {
  //       if (this.loadslipID) {
  //         this.lsPrintDate = response['data'].lsPrintDate;
  //       }
  //       const linkSource = 'data:application/pdf;base64,' + response['data'].PDF_DATA;
  //       var element = document.createElement('a');
  //       element.setAttribute('href', linkSource);
  //       element.setAttribute('download', response['data'].LOADSLIP_ID);
  //       document.body.appendChild(element);
  //       element.click();
  //       document.body.removeChild(element);
  //       //PRINT
  //       // this.showLoadslipInModal(response['data'].LOADSLIP_ID, "PRINT");
  //       this.showLoadslipInModal(response['data'].LOADSLIP_ID, "PRINT", this.IsUpdate, response['data']);
  //       this.isLoading = false;
  //     } else {
  //       if (response['data']) {
  //         this.openloadsliperrorPopup(response['data'])
  //       }
  //       this.isLoading = false;
  //     }
  //     console.log(response)
  //   }, (err) => {
  //     console.log("Error", err);
  //     this.toastr.error(err ? err : "Something went wrong..", "Error!");
  //     this.isLoading = false;
  //   })
  // }


  //open loadslip error list 
  openloadsliperrorPopup(errorList) {
    const dialogRef = this.dialog.open(CreateLoadslipsErrorPopupComponent, {
      data: errorList,
      disableClose: true
    });
  }


  // Show loadslipId with success POPUP
  showLoadslipInModal(value, typeofevent, IsUpdate, response) {
    const dialogRef = this.dialog.open(LoadslipSuccessDialogComponent, {
      data: {
        loadslipId: value,
        type: typeofevent,
        isupdate: IsUpdate,
        loadslipData: response
      },
      disableClose: true
    });
    //reset the data which user selected after successful load slip creation
    if (!this.loadslipID) {
      this.clearFields();
      this.ShipTo = '';
    }
  }

  clearFields() {
    if (!this.checkMultiStop()) {
      this.totalMaterialWeight = ''
      this.totalTTESeletecd = ''
      this.totalTruckVolume = '';
    }
    this.totalTyres = '';
    this.totalTubes = '';
    this.totalFlaps = '';
    this.totalValves = '';
    this.destination = '';
    this.truckType = '';
    this.containerNum = ''
    // this.loadSlipData = [];
    // this.invoiceDataList = [];
    // this.masterToggle();
  }

  //clear user enter data
  cancelLoadslipCreation() {
    this.isLoading = true;
    const dialogRef = this.dialog.open(LoadslipCancelPopupComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.totalMaterialWeight = ''
        this.totalTTESeletecd = ''
        this.totalTruckVolume = '';
        this.totalTyres = '';
        this.totalTubes = '';
        this.totalValves = '';
        this.destination = '';
        this.totalFlaps = '';
        this.truckType = '';
        this.loadSlipData = [];
        this.containerNum = '';
        this.truckT = '';
        this.transporter = '';
        this.loadslipCategory = '';
        this.ShipTo = '';
        this.actualTruckType = '';
        this.variant_ONE = '';
        this.freightAvailableflag = '';
        this.loadSlipData.forEach(data => {
          data.qty = 0;
        })
        this.loadSlipData = [...this.loadSlipData];
        this.description ='';
        this.indentCategory='';
        this.city='';
      }
      this.isLoading = false;
    })
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
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    if (this.viewType) {
      const numSelected = this.selection.selected.length;
      const numRows = this.selectedInvoiceListItems.length;
      return numSelected === numRows;
    } else {
      const numSelected = this.selection.selected.length;
      const numRows = this.invoiceDataList.length;
      return numSelected === numRows;
    }

  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.viewType) {
      this.isAllSelected() ? this.selection.clear() : this.selectedInvoiceListItems.forEach(row => this.selection.select(row));
    } else {
      this.isAllSelected() ? this.selection.clear() : this.invoiceDataList.forEach(row => this.selection.select(row));
    }
  }

  // for confirm invoice list for export
  confirmInvoiceForExport() {
    this.isConfirmed = true;
    this.finalInvoiceList = [];
    for (const iterator of this.selection.selected) {
      this.invoiceData = iterator['invoiceNumber'];
      this.finalInvoiceList.push(this.invoiceData);
    }
    let body = {
      'invoiceList': this.finalInvoiceList
    }
    if (this.finalInvoiceList.length) {
      this.loadSlipData = [];
      $('#myModal').modal('hide');
      this.isLoading = true;
      this.service.post_service(ApiserviceService.apisList.sendInvoiceList, body).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.isLoading = false;
          let data = response['data'];
          this.totalTyres = 0;
          this.totalTubes = 0;
          this.totalFlaps = 0;
          this.totalValves = 0;
          this.totalLoadedQty = 0;
          this.totalTTE = 0;
          this.totalWeight = 0;
          this.totalPctr = 0;
          
          this.totalVolume = 0;this.totalOthersCount=0;
          data['exportInfoDtoList'].forEach(data => {
            let newData = {
              "BATCH_CODE": data.batchCode,
              "qty": data.loadedQty,
              "lineNumber": data.lineNumber,
              "ITEM_DESCRIPTION": data.description,
              "ITEM_ID": data.itemId,
              "VOLUME": data.grossVol,
              "WEIGHT": data.weight,
              "TTE": data.tte,
              "SUM_QTY": data.availableQty,
              "QTY": data.qty,
              "ITEM_CATEGORY": data.category,
              "MIN_PRIORITY": data.priority,
              "isScannable": data.isScannable,
              // flap details
              // "FLAP_DESC": data.flapSKU,
              "flapBatch": data.flapBatch,
              "FLAP_CODE": data.flapSKU,
              "FLAP_COMP_QTY": data.flapCompQty,
              "totalFlapQty": data.falpQty,
              "LINE_NUMBER": data.sapLineNo,

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
              // "weight": data.weight
            };
            let qty = Number(data.qty)
            // totalweight += qty * (data.grossWt ? data.grossWt : 0);
            // totalTTE += qty * (data.tte ? data.tte : 0);
            // totalVolume += qty * (data.volume ? data.volume : 0);
            this.totalTTE += qty * (data.tte ? data.tte : 0);
            this.totalWeight += 1 * (data.weight ? data.weight : 0);
            this.totalVolume += qty * (data.grossVol ? data.grossVol : 0);

            // if (data.classification == 'TYRE') {
            //   this.totalTyres += qty;
            // } else if (data.classification == 'TUBE') {
            //   this.totalTubes += qty;
            // } else if (data.classification == 'FLAP') {
            //   this.totalFlaps += qty;
            // } else if (data.classification == 'VALVE') {
            //   this.totalValves += qty;
            // } else if (data.classification == 'PCTR') {
            //   this.totalPctr += qty;
            // }
            switch (data.classification) {
              // for Total tubes
              case 'TUBE':
                this.totalTubes += parseInt(data.qty ? data.qty : 0);
                break;
              // for total Flaps
              case 'FLAP':
                this.totalFlaps += parseInt(data.qty ? data.qty : 0);
                break;
              // for Valves
              case 'VALVE':
                this.totalValves += parseInt(data.qty ? data.qty : 0);
                break;
    
              case 'TYRE':
                // if it is PCTR
                if (data.category === 'PCTR') {
                  this.totalPctr += parseInt(data.qty ? data.qty : 0);
                  //It it is tyre
                } else {
                  this.totalTyres += parseInt(data.qty);
                  this.totalTubes += parseInt(data.totalTubeQty ? data.totalTubeQty : 0);
                  this.totalFlaps += parseInt(data.totalFlapQty ? data.totalFlapQty : 0);
                  this.totalValves += parseInt(data.totalValueQty ? data.totalValueQty : 0);
                }
                break;
              //  default is tyres
              default:
                // For others 
                this.totalOthersCount += Number(data.qty ? data.qty : 0);
                break;
            }
            // this.totalTyres += qty;
            // this.totalTubes += qty * (data.TUBE_COMP_QTY ? data.TUBE_COMP_QTY : 0);
            // this.totalFlaps += qty * (data.FLAP_COMP_QTY ? data.FLAP_COMP_QTY : 0);
            // this.totalValves += qty * (data.VALVE_COMP_QTY ? data.VALVE_COMP_QTY : 0);

            this.totalLoadedQty += qty;
            this.loadSlipData.push(newData);
            this.loadSlipData = [...this.loadSlipData];
          });
          this.weightSumm = 0;
          this.qtySumm = 0;
          this.metricTon = 0;
          this.weightSummaryCell();
          if (this.loadslipUtilizationData != undefined && this.loadslipUtilizationData.truckWeightCapacity != null && this.loadslipUtilizationData.truckWeightCapacity != 0) {
            if (this.checkMultiStop()) {
              this.totalMaterialWeight = ((this.totalWeight / this.loadslipUtilizationData.truckWeightCapacity) * 100);
              this.totalMaterialWeight = (this.totalMaterialWeight + this.loadslipUtilizationData.shipmentTotalWtUtil) - this.loadslipWtUtil;
            } else {
              this.totalMaterialWeight = ((this.totalWeight / this.loadslipUtilizationData.truckWeightCapacity) * 100);
            }

            // this.totalMaterialWeight = ((this.totalWeight / this.loadslipUtilizationData.truckWeightCapacity) * 100);
          }

          if (this.loadslipUtilizationData != undefined && this.loadslipUtilizationData.tteCapacity != null && this.loadslipUtilizationData.tteCapacity != 0) {
            //Check TTE Util for Multi-Drop or Noramal Loadslip creation
            if (this.checkMultiStop()) {
              this.totalTTESeletecd = ((this.totalTTE / this.loadslipUtilizationData.tteCapacity) * 100);
              this.totalTTESeletecd = (this.totalTTESeletecd + this.loadslipUtilizationData.shipmentTotalTTEUtil) - this.loadslipTteUtil;
            } else {
              this.totalTTESeletecd = ((this.totalTTE / this.loadslipUtilizationData.tteCapacity) * 100);
            }

            // this.totalTTESeletecd = ((this.totalTTE / this.loadslipUtilizationData.tteCapacity) * 100);
          }

          if (this.loadslipUtilizationData != undefined && this.loadslipUtilizationData.truckVolumeCapacity != null && this.loadslipUtilizationData.truckVolumeCapacity != 0) {
            if (this.checkMultiStop()) {
              this.totalTruckVolume = ((this.totalVolume / this.loadslipUtilizationData.truckVolumeCapacity) * 100);
              this.totalTruckVolume = (this.totalTruckVolume + this.loadslipUtilizationData.shipmentTotalVolUtil) - this.loadslipVolUtil;
            } else {
              this.totalTruckVolume = ((this.totalVolume / this.loadslipUtilizationData.truckVolumeCapacity) * 100)
            }



            // this.totalTruckVolume = ((this.totalVolume / this.loadslipUtilizationData.truckVolumeCapacity) * 100)
          }
        } else {
          this.isLoading = false;
          this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error")
        }
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      });
    } else {
      // this.toastr.error("Please select invoice", "!Error");
      // without Selection of invoices we have clear values of tteutile,weightutil,volumeUtil,tubes,flaps,valves,tteQty,totalLoadedQty

      // for multistop no need empty the values tteUtil,weightUtil,volumeUtil
      // get the utlization values assign those values
      // we can't reset the values because previous loadslip contains the tte util values
      // without shipment , in multistop selected invoices, not created loadslip, then again unselected invoices at this situtation we need take values from utlization values  
      if (this.checkMultiStop()) {
        this.totalTTESeletecd = this.loadslipUtilizationData.shipmentTotalTTEUtil;
        this.totalMaterialWeight = this.loadslipUtilizationData.shipmentTotalWtUtil;
        this.totalTruckVolume = this.loadslipUtilizationData.shipmentTotalVolUtil;
      } else {
        this.totalMaterialWeight = '';
        this.totalTTESeletecd = '';
        this.totalTruckVolume = '';
      }

      this.totalTyres = '';
      this.totalTubes = '';
      this.totalFlaps = '';
      this.totalValves = '';
      this.totalLoadedQty = '';
      this.loadSlipData = [];
      this.totalTTE = 0;
      this.totalVolume = 0;
      this.totalWeight = 0;
      this.totalPctr = '';
    }


  }

  // for open invoice list modal
  onOpenModal() {

    // if (!this.isConfirmed || !this.selection.selected.length) {
    let selectedItems = [];
    for (let i = 0; i < this.invoiceDataList.length; i++) {
      // if (this.invoiceDataList[i].loadslipId != null) {
      //   selectedItems.push(this.invoiceDataList[i]);
      // } else {
      this.loadSlipData.forEach(element => {
        if (element.INVOICE_NUMBER == this.invoiceDataList[i].invoiceNumber) {
          selectedItems.push(this.invoiceDataList[i]);
          return;
        }
      });

      // }
      // }
      this.selection = new SelectionModel<PeriodicElement>(true, selectedItems);
    }
    $('#myModal').modal('show');
  }


  weightSummaryCell() {
    //  return "Total Weight: " + 10
    // return 'Weight summary: ' + this.loadSlipData.map(row => row['WEIGHT'])
    //   .reduce((res, cell) => res += cell, 0);

    this.loadSlipData.forEach((item) => {
      this.weightSumm += item.WEIGHT;
      this.qtySumm += item.QTY;
    });

    this.metricTon = this.weightSumm / 1000;
  }

    // Print Excel
    export(): void {
      this.isLoading = true;
      this.service.get_service_DownLoadExcel(ApiserviceService.apisList.printLoadslip + '?loadslipId=' + this.loadslipID + '&excel=' + true).subscribe(response => {
        if (response) {
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

  // qtySummaryCell() {
  //   // return 'QTY summary: ' + this.loadSlipData.map(row => row['QTY'])
  //   //   .reduce((res, cell) => res += cell, 0);
  //   return "QY" + 10
  // }

  // summaryForProp1(cells: any[]) {
  //   return 'Inline summary: ' + cells[0];
  // }

  // summaryForProp2() {
  //   return this.loadSlipData.map(row => row['QTY'])
  //     .reduce((res, cell) => res += cell, 0);
  // }
}



export interface State {
  value: string;
  viewValue: string;
}
export interface TruckType {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}