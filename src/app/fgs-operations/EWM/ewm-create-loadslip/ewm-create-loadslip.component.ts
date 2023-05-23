import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';
import { LoadslipCancelPopupComponent } from 'src/app/public/loadslip-cancel-popup/loadslip-cancel-popup.component';
import { constants } from 'src/app/constants';
import { LoadslipSuccessDialogComponent } from 'src/app/public/loadslip-success-dialog/loadslip-success-dialog.component';
import { CreateLoadslipsErrorPopupComponent } from 'src/app/public/create-loadslips-error-popup/create-loadslips-error-popup.component';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
declare var $: any;
@Component({
  selector: 'app-ewm-create-loadslip',
  templateUrl: './ewm-create-loadslip.component.html',
  styleUrls: ['./ewm-create-loadslip.component.scss']
})
export class EwmCreateLoadslip implements OnInit {
  shareTrcukDestinations = [];
  shareTruckLocation: string;
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
  destinationWisePlans = [];
  page = {
    limit: 100,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  actualTruckTypeList = [];
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
  itemLevelTotalTTE: number;
  itemLevelTotalWeight: number;
  itemLevelTotalVolume: any;
  totalLoadedQty: any;
  loadslipCategory: any;
  marketSegmentMap: any;
  roles: any;
  trackDetailsObj: any;
  multistopTruckNumber: string;
  multistopTruckType: string;
  IS_MULTI_STOP: boolean;
  loadslipTteUtil: number = 0;
  loadslipWtUtil: number = 0;
  loadslipVolUtil: number = 0;
  sendForBarcodeDate: any;
  variant_one_List = [];
  variant_two_List = [];
  route_shipmentNumber: string;
  variant_ONE: string;
  variant_TWO: string;
  actualTruckType: any;
  dropSeqList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  dropSeq: string;
  freightAvailableflag: string;
  lastSplittedItems = {};
  userRoles: any;
  isDraftMode: boolean = true;
  truckT: string;
  transporter: string;
  sostoNumber: boolean;
  sapInvoice: string;
  IsUpdate: boolean;
  confirmeventmessage: string;
  isScanItemCheck: boolean = false;
  STOSONumber: any;
  totalTTEQty: number = 0;
  elrFlag: boolean;
  lrNum: any;
  generateLr: boolean = false;
  printLr: boolean;
  totalQuantity: any;
  totalOthersCount: number = 0;
  IS_Truck_Part_of_Loadslip: string;
  categoryList: any;
  category: any;
  selectedCategories = [];
  @ViewChild('categorySelect') categorySelect: any;
  indentCategory: any;
  description: any;
  city:any;
  descriptionList: any;
  truckTypeClass: any;
  totalWeight:number;
  constructor(public service: ApiserviceService, private router: Router, private ActivatedRoute: ActivatedRoute, private toastr: ToastrService, private dialog: MatDialog) { }
  ngOnInit() {
    localStorage.setItem("userMenu", "load-slip");
    this.isLoading = true;
    this.userSource = localStorage.getItem("sourceID");
    this.loadslipID = this.ActivatedRoute.snapshot.params['loadslipId'];
    this.viewType = this.ActivatedRoute.snapshot.params['viewType'];
    this.route_shipmentNumber = this.ActivatedRoute.snapshot.queryParams['shipmentNumber'];
    this.shipmentNumber = this.route_shipmentNumber;
    this.roles = constants.roles;
    this.pageSize = 20;
    this.page.limit = 20;
    // For Normal Loadslip Procress
    if (this.loadslipID) {
      this.isLoadslipIdAvaliable = true;
      // Get If Transpoter is registered for e-load receipt
      // this.getElrFlag();
      this.getLoadSlipDetailsById();
    } else if (this.route_shipmentNumber) {
      this.getLoadSlipUtilazationFromServer('', '', this.route_shipmentNumber);
      this.getDestinationList();
    } else {
      this.getDestinationList();
    }
    // get variants 
    this.getvariants();
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

  // Generate Lr number
  generateLrNum() {
    console.log("**** generateLrNum");
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.generateLrNum + "?loadslipId=" + this.loadslipID).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.lrNum = response["opsId"];
        this.generateLr = false;
        this.printLr = true;
        this.isLoading = false;
      }
    });
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


  getLoadSlipDetailsById() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getLoadSlipDetailsByID + "/" + this.loadslipID).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responseData = response['data'];
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
        this.sendForBarcodeDate = responseData.sendForBarcodeDate;
        this.bay = responseData.bay;
        this.ShipTo = responseData.shipTo;
        this.truckType = responseData.truckNumber;
        this.IS_Truck_Part_of_Loadslip = responseData.truckNumber;
        this.multistopTruckNumber = responseData.truckNumber;
        this.IS_MULTI_STOP = responseData.multiStop;
        this.totalTyres = responseData.totalTyres;
        this.totalTubes = responseData.totalTubes;
        this.totalFlaps = responseData.totalFlaps;
        this.totalValves = responseData.totalValves;
        this.totalPctr = responseData.totPctr;
        this.totalOthersCount = responseData.otherQty;
        this.dropSeq = responseData.dropSeq;
        this.freightAvailableflag = responseData.freightAvailableflag;
        this.sostoNumber = responseData.sostoNumber;
        this.sapInvoice = responseData.sapInvoice;
        this.STOSONumber = responseData.sostoNumberVal;
        this.totalTTEQty = responseData.totalTTE;
        this.totalQuantity = responseData.totQty;
        this.totalWeight = responseData.totalWeight;

        // loadslip selecte categories 
        this.selectedCategories = responseData.selectedItemCategories;
        // Last splitted object
        this.lastSplittedItems = responseData.splitNumbersMap;
        // Shipment level values
        this.totalTTESeletecd = responseData.shipmentTTEUtil;
        this.totalMaterialWeight = responseData.shipmentWeightUtil;
        this.totalTruckVolume = responseData.shipmentVolumeUtil;
        //Loads slip values 
        this.loadslipTteUtil = responseData.tteUtil;
        this.loadslipWtUtil = responseData.weightUtil;
        this.loadslipVolUtil = responseData.volumeUtil;
        this.totalLoadedQty = responseData.totalLoadedQty;
        this.itemLevelTotalTTE = responseData.totalTTE;
        this.itemLevelTotalWeight = responseData.totalWeight;
        this.itemLevelTotalVolume = responseData.totalVolume;
        this.truckT = responseData.truckType;
        this.transporter = responseData.servprov;
        this.indentCategory = responseData.truckIndentCategory;
        // variants & Actual Truck Type
        this.variant_ONE = responseData.variant1;
        this.actualTruckType = responseData.actualTruckType;
        this.isDraftMode = responseData.isInDraft;
        // ELR Flag, LR Number
        this.elrFlag = responseData.elrFlag;
        this.lrNum = responseData.elrNumber;
        // Set if LR is to be Generated or Printed
        this.setLrButton();
        this.isLoading = false;
        this.getTruckTypesForDest(this.destination);
        
        //get the loadslip plans & truckdetails
        this.getLoadslipPlanByDestination(responseData, this.destination, '');
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong")
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      // this.isLoading = false;
    })
  }
  getLoadslipPlanByDestination(responseData, destination, category) {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getLoadSlipsPlans + "?destLoc=" + destination + "&loadslipId=" + this.loadslipID + "&itemCategory=" + category).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        let repsonseData = response['data'];
        // Trucktype save data from server
        this.truckTypes = repsonseData.gatedInTrucks;
        // Form Market segment (TUBE,FLAP,VALVE batch code )
        this.marketSegmentMap = repsonseData.marketSegmentMap;
        // destination related plans list
        this.destinationWisePlans = repsonseData.loadSlipPlans;

        // category list 
        this.categoryList = repsonseData.itemCategories
        // this.category = this.selectedCategories;
        // Logic for Tube Batch & Flap batch 
        // 1. Currently we are defaulting Batch Code for Tube and Flap as below:
        //If tyre batch code ends with CC(last 2 digits), then default Tube and Flap batch code to BOCC.
        // If tyre batch code ends with KZ(last 2 digits), then default Tube and Flap batch code to BOKZ.
        //a.Marketing segment is REP: BOAW
        //b.Marketing segment is OE: BOOE
        //c.Marketing segment is EXPORT: BOEX
        this.destinationWisePlans.forEach((data) => {
          if (data.BATCH_CODE.endsWith('CC')) {
            if (data['TUBE_CODE']) {
              data['tubeBatch'] = 'BOCC';
            }
            if (data['FLAP_CODE']) {
              data['flapBatch'] = 'BOCC';
            }
          } else if (data.BATCH_CODE.endsWith('KZ')) {
            if (data['TUBE_CODE']) {
              data['tubeBatch'] = 'BOKZ';
            }
            if (data['FLAP_CODE']) {
              data['flapBatch'] = 'BOKZ';
            }
          } else {
            if (data['TUBE_CODE']) {
              data['tubeBatch'] = this.getBOMbatchCode(data.MARKET_SEGMENT);
            }
            if (data['FLAP_CODE']) {
              data['flapBatch'] = this.getBOMbatchCode(data.MARKET_SEGMENT);
            }
          }
        })

        this.destinationWisePlans = [...this.destinationWisePlans]
        //Add a new Object Which are getting from server
        let newObject = {
          "TRUCK_NUMBER": responseData.truckNumber,
          "TRUCK_TYPE": responseData.truckType,
          "SERVPROV": responseData.servprov,
          "ITEM_CATEGORY": responseData.truckIndentCategory
        }
        // Push the data into the object If it is not availble in the data for Default Selection
        let findTruck = this.truckTypes.findIndex(data => data.TRUCK_NUMBER == responseData.truckNumber);
        if (findTruck == -1 && newObject.TRUCK_NUMBER) {
          // To avoid adding empty object
          this.truckTypes.push(newObject);
        }
        this.shiptoPlaceList = repsonseData.shipmentToLocs;
        this.trackDetailsObj = this.truckTypes.find(truckObj => truckObj.TRUCK_NUMBER == this.truckType);
        let respData = this.trackDetailsObj;
        this.isLoading = false;
        if (respData) {
          //get the Utilization data
          this.getLoadSlipUtilazationFromServer(respData.TRUCK_NUMBER, respData.TRUCK_TYPE, this.shipmentNumber);
        }

        // this.isLoading = false;
        // Set table data
        this.setLoadslipDatatableData(responseData);


      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
        return false
      }

    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      //this.isLoading = false;
      return false
    })
  }


  //get Destination wise plans after save as Draft
  destinationwisePlans(destination) {
    this.service.get_service(ApiserviceService.apisList.getLoadSlipsPlans + "?destLoc=" + destination + "&loadslipId=" + this.loadslipID).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        let repsonseData = response['data'];
        // destination related plans list
        this.destinationWisePlans = repsonseData.loadSlipPlans;
        this.destinationWisePlans = [...this.destinationWisePlans]
        this.marketSegmentMap = repsonseData.marketSegmentMap;
        this.categoryList = repsonseData.itemCategories;
        this.destinationWisePlans.forEach((data) => {
          if (data.BATCH_CODE.endsWith('CC')) {
            if (data['TUBE_CODE']) {
              data['tubeBatch'] = 'BOCC';
            }
            if (data['FLAP_CODE']) {
              data['flapBatch'] = 'BOCC';
            }
          } else if (data.BATCH_CODE.endsWith('KZ')) {
            if (data['TUBE_CODE']) {
              data['tubeBatch'] = 'BOKZ';
            }
            if (data['FLAP_CODE']) {
              data['flapBatch'] = 'BOKZ';
            }
          } else {
            if (data['TUBE_CODE']) {
              data['tubeBatch'] = this.getBOMbatchCode(data.MARKET_SEGMENT);
            }
            if (data['FLAP_CODE']) {
              data['flapBatch'] = this.getBOMbatchCode(data.MARKET_SEGMENT);
            }
          }
          if (this.service.checkRole() == this.roles.rdc_PLN) {
            data['qty'] = data.SUM_QTY;
          }
        })
        this.destinationWisePlans = [...this.destinationWisePlans];
      }

    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    })
  }


  setLoadslipDatatableData(responseData) {
    this.loadSlipData = [];
    if (responseData.loadslipDraftDataDtos) {
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
          "ITEM_CLASSIFICATION": data.itemClassification,
          "MIN_PRIORITY": data.priority,
          "isScannable": data.isScannable,
          "scannedQty": data.scannedQty,
          "isSplit": data.isSplit,
          // flap details
          "FLAP_DESC": data.flapDesc,
          "flapBatch": data.flapBatch,
          "FLAP_CODE": data.flapSKU,
          "FLAP_COMP_QTY": data.flapCompQty,
          "totalFlapQty": data.falpQty,

          //tube details
          "tubeBatch": data.tubeBatch,
          "TUBE_CODE": data.tubeSKU,
          "TUBE_COMP_QTY": data.tubeCompQty,
          "totalTubeQty": data.tubeQty,
          "TUBE_DESC": data.tubeDesc,
          //value details
          "valveBatch": data.valveBatch,
          "VALVE_DESC": data.valveDesc,
          "VALVE_CODE": data.valveSKU,
          "VALVE_COMP_QTY": data.valveCompQty,
          "totalValueQty": data.valveQty,
          "canLSItemDeleted": data.canLSItemDeleted
        };
        this.loadSlipData.push(newData);
        this.loadSlipData = [...this.loadSlipData];
      });
    }
  }
  getLoadSlipUtilazationFromServer(truckNumber, truckType, shipmentNumber) {
    this.isLoading = true;
    let data = {
      truckNumber: truckNumber,
      trucktype: truckType,
      shipmentId: shipmentNumber,
      actucaltrucktype: this.actualTruckType,
      variant1: this.variant_ONE
    }
    this.service.post_service(ApiserviceService.apisList.getLoadSlipUtlizations, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        let truckRepsonseData = response['data'];
        this.loadslipUtilizationData = truckRepsonseData;
        this.totalTTESeletecd = this.loadslipUtilizationData.shipmentTotalTTEUtil;
        this.totalMaterialWeight = this.loadslipUtilizationData.shipmentTotalWtUtil;
        this.totalTruckVolume = this.loadslipUtilizationData.shipmentTotalVolUtil;
        this.multistopTruckNumber = this.loadslipUtilizationData.truckNumber;
        this.multistopTruckType = this.loadslipUtilizationData.truckType;
        this.actualTruckType = this.loadslipUtilizationData.actualTruckType;
        this.variant_ONE = this.loadslipUtilizationData.variant1;
        this.truckT = this.loadslipUtilizationData.truckType;
        this.transporter = this.loadslipUtilizationData.servprov;
        this.indentCategory = this.loadslipUtilizationData.truckIndentCategory;
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
  }

  // get the destination list which are under Approval & partiallty Apporved
  getDestinationList() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getOpenDestinations).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.destinationList = response['data'].destinationList;
        this.descriptionList = response['data'].descriptionList;
        this.isLoading = false;
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong !", "!Error")
        this.isLoading = false;
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  //get the Truck type list
  getTrucksList(destination, category, filterType) {
    // Before loadslip creation we can change destination,description
    // after loadslip creation those are not editble fields,destination list also not available
    if (!this.isLoadslipIdAvaliable) {
      let index: number = null;
      index = this.destinationList.findIndex(item => item.dest_loc == destination);
      if (index == -1) {
        index = this.destinationList.findIndex(item => item.dest_desc == destination);
      }
      this.destination = this.destinationList[index].dest_loc;
      this.description = this.destinationList[index].dest_desc;
      destination = this.destination;
    }
    this.getLoadSlipsPlansData(destination, category, filterType);
    
    // Empty below fields if we changed destination
    if (filterType == 'destinationFilter') {
      this.totalTyres = '';
      this.totalTubes = '';
      this.totalValves = '';
      this.truckType = '';
      // If the Shipemnt is not a multistop clear data of TTE Util ,VOUEME Util, Weight Util
      if (!this.checkMultiStop()) {
        this.totalMaterialWeight = 0;
        this.totalTTESeletecd = 0;
        this.totalTruckVolume = 0;
        this.truckT = '';
        this.transporter = '';
        this.indentCategory = '';
        this.totalTTEQty = 0;
        this.variant_ONE = '';
        this.actualTruckType = '';
      }
    }

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


  getLoadSlipsPlansData(dest, category, filterType) {
    this.isLoading = true;
    // to close Category Select 
    this.categorySelect.close()
    let destination = dest;
    let cat = category ? category.toString() : ''
    if (filterType == 'destinationFilter') {
      this.category = [];
      cat = "";
    }
    let loadslipId = this.loadslipID ? this.loadslipID : '';
    this.service.get_service(ApiserviceService.apisList.getLoadSlipsPlans + "?destLoc=" + destination + "&itemCategory=" + cat + "&loadslipId=" + loadslipId).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        let repsonseData = response['data'];
        // If it is first time creation of loadslip
        // Before Loadslip creation we are considering the data loadslip items
        if (!this.isLoadslipIdAvaliable) {
          this.loadSlipData = repsonseData.loadSlipPlans;
          this.marketSegmentMap = repsonseData.marketSegmentMap;
          this.categoryList = repsonseData.itemCategories;
          // to get city after destination selection
          this.city = repsonseData.city;
          // 1. Currently we are defaulting Batch Code for Tube and Flap as below:
          //a.Marketing segment is REP: BOAW
          //b.Marketing segment is OE: BOOE
          //c.Marketing segment is EXPORT: BOEX
          //If tyre batch code ends with CC(last 2 digits), then default Tube and Flap batch code to BOCC.
          // If tyre batch code ends with KZ(last 2 digits), then default Tube and Flap batch code to BOKZ.
          this.loadSlipData.forEach((data, index) => {
            if (data.BATCH_CODE.endsWith('CC')) {
              if (data['TUBE_CODE']) {
                data['tubeBatch'] = 'BOCC';
              }
              if (data['FLAP_CODE']) {
                data['flapBatch'] = 'BOCC';
              }
            } else if (data.BATCH_CODE.endsWith('KZ')) {
              if (data['TUBE_CODE']) {
                data['tubeBatch'] = 'BOKZ';
              }
              if (data['FLAP_CODE']) {
                data['flapBatch'] = 'BOKZ'
              }
            } else {
              if (data['TUBE_CODE']) {
                data['tubeBatch'] = this.getBOMbatchCode(data.MARKET_SEGMENT);
              }
              if (data['FLAP_CODE']) {
                data['flapBatch'] = this.getBOMbatchCode(data.MARKET_SEGMENT);
              }
            }
            if (this.service.checkRole() == this.roles.rdc_PLN) {
              // for RDC role we are defaulting qty , that why we need defalut tubeQty,FlapQty
              data['qty'] = data.SUM_QTY;
              // total tube quantity caluculation 
              data.totalTubeQty = (Number(data.TUBE_COMP_QTY) ? Number(data.TUBE_COMP_QTY) : 0) * (Number(data.qty) ? Number(data.qty) : 0);
              //total flap qunatity caluculation
              data.totalFlapQty = (Number(data.FLAP_COMP_QTY) ? Number(data.FLAP_COMP_QTY) : 0) * (Number(data.qty) ? Number(data.qty) : 0);
              this.ManualTTE_Weight_volume_Calculation();
            }
            this.loadSlipData = [...this.loadSlipData];
          })
        } else {
          // If the Loadslip created we are considering the response data as below grid loadslipItems
          let repsonseData = response['data'];
          // // Trucktype save data from server
          // this.truckTypes = repsonseData.gatedInTrucks;
          // Form Market segment (TUBE,FLAP,VALVE batch code )
          this.marketSegmentMap = repsonseData.marketSegmentMap;
          // destination related plans list
          this.destinationWisePlans = repsonseData.loadSlipPlans;

          // category list 
          // this.categoryList = repsonseData.itemCategories
          // this.category = this.selectedCategories;
          // Logic for Tube Batch & Flap batch 
          // 1. Currently we are defaulting Batch Code for Tube and Flap as below:
          //If tyre batch code ends with CC(last 2 digits), then default Tube and Flap batch code to BOCC.
          // If tyre batch code ends with KZ(last 2 digits), then default Tube and Flap batch code to BOKZ.
          //a.Marketing segment is REP: BOAW
          //b.Marketing segment is OE: BOOE
          //c.Marketing segment is EXPORT: BOEX
          this.destinationWisePlans.forEach((data) => {
            if (data.BATCH_CODE.endsWith('CC')) {
              if (data['TUBE_CODE']) {
                data['tubeBatch'] = 'BOCC';
              }
              if (data['FLAP_CODE']) {
                data['flapBatch'] = 'BOCC';
              }
            } else if (data.BATCH_CODE.endsWith('KZ')) {
              if (data['TUBE_CODE']) {
                data['tubeBatch'] = 'BOKZ';
              }
              if (data['FLAP_CODE']) {
                data['flapBatch'] = 'BOKZ';
              }
            } else {
              if (data['TUBE_CODE']) {
                data['tubeBatch'] = this.getBOMbatchCode(data.MARKET_SEGMENT);
              }
              if (data['FLAP_CODE']) {
                data['flapBatch'] = this.getBOMbatchCode(data.MARKET_SEGMENT);
              }
            }
          })

          this.destinationWisePlans = [...this.destinationWisePlans]

        }
        // if the filter was destination we need the fetch new truck list 
        // for category filter no need reset the trcuklist ,still remains same list
        if (filterType == 'destinationFilter') {
          this.truckTypes = repsonseData.gatedInTrucks;
        }
        this.shiptoPlaceList = repsonseData.shipmentToLocs;
        this.isLoading = false;
        this.getTruckTypesForDest(destination);
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error");
      }

    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }


  //
  getBOMbatchCode(key) {
    console.log(key)
    return this.marketSegmentMap[key]
  }
  // Update Angular data tablesd
  updateValue(event, cell, rowIndex, row) {
    let eventValue = event.target.value;
    this.loadSlipData[rowIndex][cell] = eventValue;
    this.loadSlipData = [...this.loadSlipData];
    console.log('UPDATED!', this.loadSlipData[rowIndex][cell]);
    console.log(this.totalMaterialWeight, "taoafaffsj")
  }



  calculateMaterialWeight(row) {
    // If the scan Qty is he can't do qty as zero 
    if ((row.scannedQty > 0) && ((row.qty == 0) || (row.qty == ''))) {
      this.isScanItemCheck = true;
      this.toastr.error("Qty sholud grather than Zero")
    } else {
      this.isScanItemCheck = false;
      this.totalLoadedQty = 0;
      this.itemLevelTotalTTE = 0;
      this.itemLevelTotalWeight = 0;
      this.itemLevelTotalVolume = 0;
      this.totalTTEQty = 0;
      // total tube quantity caluculation 
      row.totalTubeQty = (Number(row.TUBE_COMP_QTY) ? Number(row.TUBE_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0);

      //total flap qunatity caluculation
      row.totalFlapQty = (Number(row.FLAP_COMP_QTY) ? Number(row.FLAP_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0);

      //total flap quantity caluculation
      // row.totalValueQty = (Number(row.VALVE_COMP_QTY) ? Number(row.VALVE_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0);

      this.loadSlipData.forEach(row => {
        if (row.qty && (row.qty != null)) {
          let qty = Number(row.qty)
          // Item Level Calculations
          this.itemLevelTotalTTE += qty * (row.TTE ? row.TTE : 0);
          this.itemLevelTotalWeight += qty * (row.WEIGHT ? row.WEIGHT : 0);
          this.itemLevelTotalVolume += qty * (row.VOLUME ? row.VOLUME : 0);
          this.totalLoadedQty += qty;
        }

      })

      //total TTE QTY for View LS page
      this.totalTTEQty = this.itemLevelTotalTTE;
      //total Material Weight  filled In the Truck
      if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : '') != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : '') != 0) {

        // Check multi-Drop or Normal Creation for Adding Weight Util
        if (this.checkMultiStop()) {
          this.totalMaterialWeight = ((this.itemLevelTotalWeight / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : '')) * 100);
          this.totalMaterialWeight = (this.totalMaterialWeight + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalWtUtil : '')) - this.loadslipWtUtil;
        } else {
          this.totalMaterialWeight = ((this.itemLevelTotalWeight / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : '')) * 100);
        }
      }
      //Total  TTE filled int the Truck
      if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : '') != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : '') != 0) {

        //Check TTE Util for Multi-Drop or Noramal Loadslip creation
        if (this.checkMultiStop()) {
          this.totalTTESeletecd = ((this.itemLevelTotalTTE / (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : '')) * 100);
          this.totalTTESeletecd = (this.totalTTESeletecd + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalTTEUtil : '')) - this.loadslipTteUtil;
        } else {
          this.totalTTESeletecd = ((this.itemLevelTotalTTE / (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : '')) * 100);
        }
      }

      // Total Volume Occupied in The Truck 
      if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : '') != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : '') != 0) {


        if (this.checkMultiStop()) {
          this.totalTruckVolume = ((this.itemLevelTotalVolume / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : '')) * 100);
          this.totalTruckVolume = (this.totalTruckVolume + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalVolUtil : '')) - this.loadslipVolUtil;
        } else {
          this.totalTruckVolume = ((this.itemLevelTotalVolume / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : '')) * 100)
        }
      }
    }
  }



  // get Load slip Utilizations 
  getLoadSlipUtilazations(truckNumber) {

    // Before marking the service call we are checking whether truck is select or None
    // If the truck is there is there we are service
    // If the value is none we are going reset trucktype,Transporter,shipTo, Actual truck type,variant,TTE values
    if (truckNumber) {
      this.isLoading = true;
      // the below 3 lines of  code for gettting the current truck selected and get the truckNumber,TruckType,Transporter
      let trackingObj = truckNumber ? (this.truckTypes.find(truckObj => truckObj.TRUCK_NUMBER == truckNumber)) : '';
      // if (this.shipmentNumber) {
      //   this.truckT = this.loadslipUtilizationData ? this.loadslipUtilizationData.truckType : '';
      //   this.transporter = this.loadslipUtilizationData ? this.loadslipUtilizationData.servprov : '';
      // } else {
      this.truckT = trackingObj ? trackingObj.TRUCK_TYPE : '';
      this.transporter = trackingObj ? trackingObj.SERVPROV : '';
      this.indentCategory = trackingObj ? trackingObj.ITEM_CATEGORY : '';
      // }

      let data = {
        truckNumber: trackingObj ? trackingObj.TRUCK_NUMBER : '',
        trucktype: trackingObj ? trackingObj.TRUCK_TYPE : '',
        shipmentId: this.shipmentNumber,
        actucaltrucktype: this.actualTruckType,
        variant1: this.variant_ONE,
        trasporter: trackingObj ? trackingObj.SERVPROV : '',
        souceLoc: this.userSource,
        destLoc: this.destination,

      }
      this.service.post_service(ApiserviceService.apisList.getLoadSlipUtlizations, data).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          let repsonseData = response['data']
          this.loadslipUtilizationData = repsonseData;
          this.ShipTo = this.loadslipUtilizationData.shipToDestination;
          this.variant_ONE = this.loadslipUtilizationData.variant1;
          this.ManualTTE_Weight_volume_Calculation();
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
      this.totalMaterialWeight = ''
      this.totalTTESeletecd = ''
      this.totalTruckVolume = '';
      this.truckType = '';
      this.truckT = '';
      this.transporter = '';
      this.indentCategory = '';
      this.actualTruckType = '';
      this.variant_ONE = '';
      this.loadslipUtilizationData = {};
    }
  }

  // Calculate manual TTE ,Material Weight ,Total Volume
  ManualTTE_Weight_volume_Calculation() {
    this.totalLoadedQty = 0;
    this.itemLevelTotalTTE = 0;
    this.itemLevelTotalWeight = 0;
    this.itemLevelTotalVolume = 0;
    this.totalMaterialWeight = 0
    this.totalTTESeletecd = 0
    this.totalTruckVolume = 0;
    this.totalTTEQty = 0;
    this.loadSlipData.forEach(row => {
      if (row.qty != null) {
        let qty = Number(row.qty)
        // Item Level Calculations
        this.itemLevelTotalTTE += qty * (row.TTE ? row.TTE : 0);
        this.itemLevelTotalWeight += qty * (row.WEIGHT ? row.WEIGHT : 0);
        this.itemLevelTotalVolume += qty * (row.VOLUME ? row.VOLUME : 0);
        this.totalLoadedQty += qty;
        // total tube quantity caluculation 
        // row.totalTubeQty = (Number(row.TUBE_COMP_QTY) ? Number(row.TUBE_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0);
        //total flap qunatity caluculation
        // row.totalFlapQty = (Number(row.FLAP_COMP_QTY) ? Number(row.FLAP_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0);
        //total flap quantity caluculation
        // row.totalValueQty = (Number(row.VALVE_COMP_QTY) ? Number(row.VALVE_COMP_QTY) : 0) * (Number(row.qty) ? Number(row.qty) : 0)
      }
    })
    //total TTE QTY for View LS page
    this.totalTTEQty = this.itemLevelTotalTTE;
    //total Material Weight  filled In the Truck
    if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : 0) != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : 0) != 0) {
      // Check multi-Drop or Normal Creation for Adding Weight Util
      if (this.checkMultiStop()) {
        this.totalMaterialWeight = ((this.itemLevelTotalWeight / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : 0)) * 100);
        this.totalMaterialWeight = (this.totalMaterialWeight + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalWtUtil : 0)) - this.loadslipWtUtil;
      } else {
        this.totalMaterialWeight = ((this.itemLevelTotalWeight / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckWeightCapacity : 0)) * 100);
      }
    }
    else {
      this.totalMaterialWeight = 0;
    }
    //Total  TTE filled int the Truck
    if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : 0) != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : 0) != 0) {
      //Check TTE Util for Multi-Drop or Noramal Loadslip creation
      if (this.checkMultiStop()) {
        this.totalTTESeletecd = ((this.itemLevelTotalTTE / (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : 0)) * 100);
        this.totalTTESeletecd = (this.totalTTESeletecd + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalTTEUtil : 0)) - this.loadslipTteUtil;
      } else {
        this.totalTTESeletecd = ((this.itemLevelTotalTTE / (this.loadslipUtilizationData ? this.loadslipUtilizationData.tteCapacity : 0)) * 100);
      }
    } else {
      this.totalTTESeletecd = 0;
    }
    // Total Volume Occupied in The Truck 
    if ((this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : 0) != null && (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : 0) != 0) {
      if (this.checkMultiStop()) {
        this.totalTruckVolume = ((this.itemLevelTotalVolume / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : 0)) * 100);
        this.totalTruckVolume = (this.totalTruckVolume + (this.loadslipUtilizationData ? this.loadslipUtilizationData.shipmentTotalVolUtil : 0)) - this.loadslipVolUtil;
      } else {
        this.totalTruckVolume = (this.itemLevelTotalVolume / (this.loadslipUtilizationData ? this.loadslipUtilizationData.truckVolumeCapacity : 0)) * 100
      }
    } else {
      this.totalTruckVolume = 0;
    }
  }

  // Load slips events trigger
  eventCall(loadSlipID, eventType) {
    // check whether loadslip created or not
    if (loadSlipID) {
      // If is event type confirm and there is not truck should validated  
      if ((eventType == 'CONFIRM') && !this.truckType) {
        this.toastr.error("Please select truck before confirm event", "! Error");
      } else {
        this.isLoading = true;
        let data = {
          loadslipID: loadSlipID,
          eventType: eventType
        }
        this.service.post_service(ApiserviceService.apisList.updateLoadSlipevent, data).subscribe(response => {
          let stoSTOMessage = '';
          stoSTOMessage = response['message'];
          if (response['statusCode'] == 200) {
            //Event type if Draft
            if (response['data']) {
              this.toastr.success(stoSTOMessage);
              let responseData = response['data']['data'];
              this.bayArrivedDate = responseData.bayArrivedDate;
              this.loadingStartDate = responseData.loadingStartDate;
              this.loadingEndDate = responseData.loadingEndDate;
              this.confirmedDate = responseData.confirmedDate;
              this.releasedDate = responseData.releasedDate;
              this.lsPrintDate = responseData.lsPrintDate;
              this.sendForBarcodeDate = responseData.sendForBarcodeDate
              this.bay = responseData.bay;
              this.sostoNumber = responseData.sostoNumber;
              this.STOSONumber = responseData.sostoNumberVal;
              this.multistopTruckNumber = responseData.truckNumber;
              this.selectedCategories = responseData.selectedItemCategories;
              this.setLoadslipDatatableData(responseData);
            }
            // For the confirm event we are showing whether STO/SO creation success or failure
            if (eventType == 'CONFIRM') {
              $('#confirmeeventresposeModal').modal('show');
              this.confirmeventmessage = stoSTOMessage
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
      }
    } else {
      this.toastr.warning("Please create a Loadslip", "!! Warning");
    }


  }

  //save as draft or print eEvents trigger
  saveAsDraft_Print_trigger(eventType) {
    this.isLoading = true;
    this.category = [];
    let linenumber;
    let Is_Qty_entered = 0;
    this.totalTyres = 0; this.totalTubes = 0; this.totalFlaps = 0;
    this.totalValves = 0; this.totalPctr = 0; this.totalOthersCount = 0;
    let newDraftableDataArray = []; let index = 1;
    this.loadSlipData.forEach((data) => {
      if (data.qty && data.qty != 0) {
        // For the line Number value we are checking below the condition
        // If it has loadslip ID we are considering the value which is coming from backend
        // Otherwise we are considering as Index value
        if (this.loadslipID) {
          linenumber = data.lineNumber;
        } else {
          linenumber = index;
        }
        index++;
        let newArray = {
          "batchCode": data.BATCH_CODE,
          "falpQty": data.totalFlapQty,
          "flapBatch": data.flapBatch,
          "flapSKU": data.FLAP_CODE,
          "flapDesc": data.FLAP_DESC,
          "scannedQty": data.scannedQty,
          "grossVol": data.VOLUME,
          "grossWt": data.WEIGHT,
          "itemDesc": data.ITEM_DESCRIPTION,
          "itemCategory": data.ITEM_CATEGORY,
          "itemId": data.ITEM_ID,
          "lineNumber": linenumber,
          "loadedQty": data.qty,
          "tte": data.TTE,
          "isSplit": data.isSplit,
          "tubeBatch": data.tubeBatch,
          "tubeQty": data.totalTubeQty,
          "tubeSKU": data.TUBE_CODE,
          "tubeDesc": data.TUBE_DESC,
          "valveBatch": data.valveBatch,
          "valveQty": data.totalValueQty,
          "valveSKU": data.VALVE_CODE,
          "valveDesc": data.VALVE_DESC

        }
        newDraftableDataArray.push(newArray);
        // This Is_Qty_entered key checking whether any of the item Enter a valve or not
        // If the value entered we are increasing valve by one
        // Below we are checking the variable value Zero or not
        Is_Qty_entered = Is_Qty_entered + 1;

        console.log("****2 " + this.lrNum);
        switch (data.ITEM_CLASSIFICATION) {
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
            if (data.ITEM_CATEGORY === 'PCTR') {
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

      }
    });

    console.log("****3 " + this.lrNum);
    //check user entered Qty (Qty in Qty column) or Not
    if (Is_Qty_entered != 0) {
      console.log("****4 " + this.lrNum);
      //Send Different TTE based on the Type of shipment (MULTI DROP/SINGLE DROP)
      //If it is Single stop Send the  TTE what we got from calculation
      // If the Multi Stop Remove TTE (Loadslip level TTE) from Total TTE 
      let sendbleTTEUtil = 0;
      let sendableWEIGHTUtil = 0;
      let sendableVOLUMEUtil = 0;
      let multiloadslipItemLevelTTE = 0;
      let multiLoadslipItemLevelWeight = 0;
      let multiLoadslipItemLevelVolume = 0;
      if (this.checkMultiStop()) {
        // MULTI STOP TTE , WEIGHT, VOLUME
        this.loadSlipData.forEach(row => {
          if (row.qty != null) {
            let qty = Number(row.qty)
            // Item Level Calculations
            multiloadslipItemLevelTTE += qty * (row.TTE ? row.TTE : 0);
            multiLoadslipItemLevelWeight += qty * (row.WEIGHT ? row.WEIGHT : 0);
            multiLoadslipItemLevelVolume += qty * (row.VOLUME ? row.VOLUME : 0);
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
      } else {
        // SINGLE STOP TTE ,WEIGHT, VOLUME
        sendbleTTEUtil = Number(this.totalTTESeletecd);
        sendableWEIGHTUtil = Number(this.totalMaterialWeight ? this.totalMaterialWeight : 0);
        sendableVOLUMEUtil = Number(this.totalTruckVolume ? this.totalTruckVolume : 0)
      }
      let saveasDraftData = {
        source: this.userSource,
        destination: this.destination,
        truckNumber: this.truckType,
        loadslipDraftDataDtos: newDraftableDataArray,
        action: eventType,
        loadSlipId: this.loadslipID,
        tteUtil: sendbleTTEUtil,
        weightUtil: sendableWEIGHTUtil,
        volumeUtil: sendableVOLUMEUtil,
        totalTyres: this.totalTyres,
        totalTubes: this.totalTubes,
        totalFlaps: this.totalFlaps,
        totalValves: this.totalValves,
        totPctr: this.totalPctr,
        otherQty: this.totalOthersCount,
        totalLoadedQty: this.totalLoadedQty,
        totalTTE: this.itemLevelTotalTTE,
        totalWeight: this.itemLevelTotalWeight,
        totalVolume: this.itemLevelTotalVolume,
        shipTo: this.ShipTo,
        shipmentID: this.shipmentNumber,
        actualTruckType: this.actualTruckType,
        variant1: this.variant_ONE,
        variant2: this.variant_TWO,
        dropSeq: this.dropSeq
      }
      //Check whether it is save or Update
      if (this.loadslipID) {
        this.IsUpdate = true
      } else {
        this.IsUpdate = false;
      }

      // Check Whether Batchcode exit or not 
      // if condition returns the true if BATCH_CODE was null or empty, then we are checking reverse using '!' symbol
      // That means we checking , there is not empty and Null condition for BATCH_CODE
      if (!this.loadSlipData.some(item => (item.BATCH_CODE == null || item.BATCH_CODE == ""))) {
        if (this.checkMultiStop()) {
          let HTTPAPI = ApiserviceService.apisList.multipleDropLoadSlip;
          this.loadslipsave(saveasDraftData, HTTPAPI);
        } else {
          let HTTPAPI = ApiserviceService.apisList.loadslidSaveasDraft;
          this.loadslipsave(saveasDraftData, HTTPAPI);
        }
      } else {
        this.isLoading = false
        this.toastr.error("Please enter Batch code", "! Error");
      }

      this.editing = {};
    } else {
      this.isLoading = false
      this.toastr.warning("Please enter Quantity", "! Warning")
    }
  }
  // end of 









  // save as Draft Server API
  loadslipsave(saveasDraftData, HTTPAPI) {
    this.service.post_service(HTTPAPI, saveasDraftData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.isLoading = false;
        let totalResponse = response['data'];
        let responseData = totalResponse.loadslipDraftDto;
        this.loadslipCategory = responseData.loadslipCategory;

        if (this.loadslipID) {
          this.destinationwisePlans(this.destination);
        }
        // ELR Flag, LR Number
        this.elrFlag = responseData.elrFlag;
        this.lrNum = responseData.elrNumber;
        // Set if LR is to be Generated or Printed
        this.setLrButton();
        this.loadSlipData = [];
        this.actualTruckType = totalResponse.actucalTruckType;
        this.variant_ONE = totalResponse.variant1;
        this.truckT = totalResponse.loadslipDraftDto.truckType;
        // IS_Truck_Part_of_Loadslip variable for use for LS on same truck 
        // we are taking variable because "trckT" and  "TruckType " variable can modified if we select the truck
        // We dnt know whether they are part of loadslip or not (Done saveasDraft or not), that we are we are taking another variable considering the values from the backend
        this.IS_Truck_Part_of_Loadslip = this.truckT;
        this.transporter = totalResponse.loadslipDraftDto.servprov;
        this.indentCategory = totalResponse.loadslipDraftDto.truckIndentCategory;
        this.freightAvailableflag = totalResponse.loadslipDraftDto.freightAvailableflag;
        // Last splitted object
        this.lastSplittedItems = totalResponse.loadslipDraftDto.splitNumbersMap;
        this.totalQuantity = totalResponse.loadslipDraftDto.totQty;

        this.selectedCategories = totalResponse.selectedItemCategories;
        this.setLoadslipDatatableData(responseData);
        // For showing the Toaster messages
        switch (saveasDraftData.action) {
          case 'DRAFT':
            if (this.loadslipID) {
              this.toastr.success("Loadslip Updated Successfully !!", 'Success');
            } else {
              this.toastr.success("Loadslip Created Successfully !!", 'Success');
            }
            break;

          default:
            if (this.loadslipID) {
              this.lsPrintDate = response['data'].lsPrintDate;
            }
            this.toastr.success("Loadslip Printed Successfully !!", 'Success');
            break;
        }
        if (response['data'].loadSlipId) {
          this.showLoadslipInModal(response['data'].loadSlipId, saveasDraftData.action, this.IsUpdate, response['data']);
        }
        let base64Data = response['data'].loadslip;
        if (base64Data) {
          const linkSource = 'data:application/pdf;base64,' + base64Data;
          var element = document.createElement('a');
          element.setAttribute('href', linkSource);
          element.setAttribute('download', response['data'].loadSlipId);
          document.body.appendChild(element);
          element.click();
        }


      } else {
        if (response['data']) {
          this.openloadsliperrorPopup(response['data'])
        }
        this.isLoading = false;
      }

    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

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
      data: { loadslipId: value, type: typeofevent, isupdate: IsUpdate, loadslipData: response },
      disableClose: true
    });
    //reset the data which user selected after successful load slip creation
    if (!this.loadslipID) {
      this.totalMaterialWeight = ''
      this.totalTTESeletecd = ''
      this.totalTruckVolume = '';
      this.totalTyres = '';
      this.totalTubes = '';
      this.totalFlaps = '';
      this.totalValves = '';
      this.destination = '';
      this.description = '';
      this.truckType = '';
      this.loadSlipData = [];
      this.ShipTo = '';
    }
  }


  //clear user enter data
  cancelLoadslipCreation() {
    this.isLoading = true;
    const dialogRef = this.dialog.open(LoadslipCancelPopupComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.totalMaterialWeight = ''
        this.totalTTESeletecd = ''
        this.totalTruckVolume = '';
        this.totalTyres = '';
        this.totalTubes = '';
        this.totalValves = '';
        this.destination = '';
        this.totalFlaps = '';
        this.loadSlipData = [];
        this.truckType = '';
        this.truckT = '';
        this.transporter = '';
        this.indentCategory = '';
        this.actualTruckType = '';
        this.variant_ONE = '';
        this.freightAvailableflag = '';
        this.dropSeq = '';
        this.totalTTEQty = 0;
        this.description = '';
        this.loadSlipData = [...this.loadSlipData];
        this.indentCategory = '';
        this.description='';
        this.city ='';
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
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  //sent for barcode scanning
  sendForBarcode() {
    // check whether loadslip created or not
    if (this.loadslipID) {
      this.isLoading = true;
      let data = {}
      this.service.post_service(ApiserviceService.apisList.sendToSAPForCodeScan + "/" + this.loadslipID, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.isLoading = false;
          this.toastr.success(response['message']);
          this.sendForBarcodeDate = response['data'].data.sendForBarcodeDate
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


  // loadslip same trcuk navigation
  loadslipOnSameTruckNavigation() {
    if (this.shipmentNumber) {
      if (this.IS_Truck_Part_of_Loadslip) {
        this.isLoading = true;
        this.service.get_service(ApiserviceService.apisList.isLsOnSameTruckAllowed + "?shipmentId=" + this.shipmentNumber).subscribe(response => {
          if (response['statusCode'] == 200) {
            this.isLoading = false;
            if ((this.service.checkRole() == this.roles.fgsOperations1) || (this.service.checkRole() == this.roles.fgsOperations2)
              || (this.service.checkRole() == this.roles.fgsOperations3) || (this.service.checkRole() == this.roles.fgsOperations4)) {

              this.router.navigate(['/fgs/create-load-slip'], { queryParams: { shipmentNumber: this.shipmentNumber } });

            } else if (this.service.checkRole() == this.roles.rdc_PLN) {

              this.router.navigate(['/rdc/create-load-slip'], { queryParams: { shipmentNumber: this.shipmentNumber } })
            }
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
        this.toastr.error("Please select truck before Ls on same Truck", "! Error")
      }
    } else {
      this.toastr.warning('Please Create a Loadslip')
    }

  }

  //share Truck destination list
  shareTruckDestinationList() {
    if (this.shipmentNumber) {
      if (this.IS_Truck_Part_of_Loadslip) {
        this.isLoading = true;
        this.service.get_service(ApiserviceService.apisList.shareTruckDestions).subscribe(response => {
          if (response['statusCode'] == 200) {
            this.shareTrcukDestinations = response['data'];
            $('#myModal').modal('show');
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
        this.toastr.warning("Please select truck before Share Truck", "! Error")
      }
    } else {
      this.toastr.warning('Please Create a Loadslip')
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
        this.shareTrcukDestinations = [];
        $('#myModal').modal('hide');
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
    this.isLoading= false;
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


  split(data) {
    console.log(data);
    // below line code for parent, set to not splitted that why isSplit is 'N', for child isSplit will be 'Y'
    data['isSplit'] = 'N';
    let rowData = { ...data };
    rowData.BATCH_CODE = '';
    rowData.qty = 0;
    rowData.scannedQty = 0;
    rowData.totalValueQty = 0;
    // Below line child item that why isSplit was 'Y'
    rowData['isSplit'] = 'Y';
    // index here from the line number of item
    let current_index = data.lineNumber;
    let pushble_index;
    let addbleNumber: number = 0.1;
    if (this.lastSplittedItems[current_index + 'line']) {
      let lastModified = this.lastSplittedItems[current_index + 'line'];
      pushble_index = this.loadSlipData.findIndex(item => item.lineNumber === lastModified);
      let new_value = Math.round((lastModified + addbleNumber) * 1e12) / 1e12;
      this.lastSplittedItems[current_index + 'line'] = new_value;
      rowData.lineNumber = new_value;

    } else {
      pushble_index = this.loadSlipData.findIndex(item => item.lineNumber == data.lineNumber);
      rowData.lineNumber = rowData.lineNumber + addbleNumber;
      this.lastSplittedItems[data.lineNumber + "line"] = rowData.lineNumber;

    }
    //check whether the the item is present in the list or not

    if (pushble_index != -1) {
      // Add +1 for Index start with '0'
      pushble_index = pushble_index + 1;
    } else {
      pushble_index = this.loadSlipData.findIndex(item => item.lineNumber == data.lineNumber + 1);
      if (pushble_index != -1) {
        pushble_index = pushble_index;
      } else {
        let comparebleLineNumber = data.lineNumber + 1;

        for (let i = 1; i <= this.loadSlipData.length; i++) {
          const isExit_lineNumber = this.loadSlipData.some(item => item.lineNumber == comparebleLineNumber);
          if (isExit_lineNumber) {
            pushble_index = this.loadSlipData.findIndex(item => item.lineNumber == comparebleLineNumber);
            break;
          } else {
            comparebleLineNumber++;
            if (i == this.loadSlipData.length) {
              // pushble_index = data.lineNumber;
              pushble_index = this.loadSlipData.findIndex(item => item.lineNumber == data.lineNumber) + 1;
              break;
            } else {
              continue;
            }
          }
        }
      }
    }
    this.loadSlipData.splice(pushble_index, 0, rowData);
    // this.loadSlipData.push(this.lastSplittedItems)
    this.loadSlipData = [...this.loadSlipData];

    console.log(this.loadSlipData, "this.lastSplittedItems", this.lastSplittedItems);
  }

  deleteRow(data) {
    //check the deletion whether a PARENT / CHILD 
    // if child delete single record
    // if parent delete all childs aswell including parent 
    let deletebleIndex; let inboundValue; let outBiundValue;
    if (data.isSplit == 'N') {
      // For Parent 
      inboundValue = data.lineNumber;
      outBiundValue = inboundValue + 1;
      let copyLoadSlipData = [...this.loadSlipData];
      copyLoadSlipData.forEach(item => {
        // Line Number Not lessthan Inbound value && Not grather than Outbound value
        if ((item.lineNumber >= inboundValue) && (item.lineNumber < outBiundValue)) {
          // deletebleIndex = this.loadSlipData.findIndex(item => item.lineNumber == data.lineNumber);
          deletebleIndex = this.loadSlipData.findIndex(currentItem => currentItem.lineNumber == item.lineNumber);
          if (item['destinationItem'] && (item.isSplit == 'N')) {
            // Revert back the values to the intial state of the object
            item.qty = null;
            this.destinationWisePlans.push(item)
          }
          // Delete item from Loadslip Items
          this.loadSlipData.splice(deletebleIndex, 1);
        }
      })
    } else if (data.isSplit == 'Y') {
      // For Child
      deletebleIndex = this.loadSlipData.findIndex(item => item.lineNumber == data.lineNumber);
      // Delete item from Loadslip Items
      this.loadSlipData.splice(deletebleIndex, 1);
    } else if (data['destinationItem']) {
      deletebleIndex = this.loadSlipData.findIndex(currentItem => currentItem.lineNumber == data.lineNumber);
      // Revert back the values to the intial state of the object
      data.qty = null;
      this.destinationWisePlans.push(data)
      this.loadSlipData.splice(deletebleIndex, 1);
    }

    this.destinationWisePlans = [...this.destinationWisePlans];

    this.loadSlipData = [...this.loadSlipData];
    // this.ManualTTE_Weight_volume_Calculation();
    this.calculateMaterialWeight(data);
    console.log(this.loadSlipData, "this.loadSlipData")

  }



  add(data) {
    console.log(data);
    let rowData = { ...data };
    let indexofSplice = this.destinationWisePlans.findIndex(item => (item.ITEM_ID == rowData.ITEM_ID) && (item.BATCH_CODE == rowData.BATCH_CODE));

    let loadslipLength = this.loadSlipData.length;
    if (loadslipLength == 0) {
      // if length is Zero add Item at 1 Index of Loadslip items
      rowData.lineNumber = 1;
    } else {
      // rowData.lineNumber = parseInt(this.loadSlipData[loadslipLength - 1].lineNumber) + 1;
      rowData.lineNumber = parseInt(Math.max.apply(null, this.loadSlipData.map(item => item.lineNumber))) + 1;
    }
    // For Identification from the destination item ,By this parameter we are diriving color for the line as light orage color
    rowData['destinationItem'] = true;
    if (this.service.checkRole() == this.roles.rdc_PLN) {
      rowData.qty = data.SUM_QTY;
      rowData.totalTubeQty = (Number(rowData.TUBE_COMP_QTY) ? Number(rowData.TUBE_COMP_QTY) : 0) * (Number(rowData.qty) ? Number(rowData.qty) : 0);
      rowData.totalFlapQty = (Number(rowData.FLAP_COMP_QTY) ? Number(rowData.FLAP_COMP_QTY) : 0) * (Number(rowData.qty) ? Number(rowData.qty) : 0);
    }
    this.loadSlipData = [...this.loadSlipData, rowData]

    this.destinationWisePlans.splice(indexofSplice, 1);
    this.destinationWisePlans = [...this.destinationWisePlans];
    this.calculateMaterialWeight(data);

  }
  IsIntiger(n) {
    return n % 1 === 0;
  }

  getRowClass = (row) => {
    console.log('rowClass')
    return {
      'row-color': (row.isSplit == 'Y'),
      'row-red-color': (row.destinationItem)
    };
  }


  stosoDelete(loadslip) {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.stosoDelete + "?loadslipId=" + loadslip).subscribe(response => {
      if (response['statusCode'] == 200) {
        let responsedata = response['data'];
        this.sostoNumber = responsedata.sostoNumber;
        this.STOSONumber = responsedata.sostoNumberVal;
        this.lsPrintDate = responsedata.lsPrintDate;
        this.confirmedDate = responsedata.confirmedDate;
        this.setLoadslipDatatableData(responsedata);
        this.isLoading = false;
        this.toastr.success(response['message'])
      }
      else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "! Error")
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  is_Role_RDC() {
    if (this.service.checkRole() == this.roles.rdc_PLN) {
      return true
    } else {
      return false;
    }
  }

  // If the truck got chages then defalut to empty Actual trucktype,Variant1
  defaultTruckData() {
    this.actualTruckType = '';
    this.variant_ONE = '';
  }

  openedChange(opened: boolean, dest, category, typefilter) {
    console.log(opened);
    if (!opened) {
      this.getTrucksList(dest, category, typefilter)
    }

  }

   // Print Excel
   export(): void {
    this.isLoading = true;
    this.service.get_service_DownLoadExcel(ApiserviceService.apisList.printLoadslip +'?loadslipId='+this.loadslipID+'&excel='+true).subscribe(response => {
      if (response) {
        // Uncomment when export excel is generated in backend
        var blob = new Blob([response.body], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
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

