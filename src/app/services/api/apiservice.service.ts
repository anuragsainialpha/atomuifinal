import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { constants } from 'src/app/constants';

declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  httpHeaders = new HttpHeaders();
// Setting the maximum pagelength for EXCEL to 10000
maxPageLengthForExcel = 10000;
  baseUrl: string;
  roles : any;
  public static truckList = [];
  constructor(
    private http: HttpClient, private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.baseUrl = environment.baseUrl;
    this.roles = constants.roles;

  }

  ngOnInit() {
    //this.checkLogin();
  }



  public static apisList = {

    //Login API
    loginUrl: 'user/login',

    //search filter API
    searchFilter: 'master/search',

    //planner upload excelfile service
    plannerService: 'planner/upload-plan',

    //plan with error list
    planErrors: 'planner/error/info',

    //pending plans  list 
    pendingPlans: 'planner/pending-plans',

    //get the plan details using plan Id 
    planData: 'planner/error/count',

    //plan info 
    planinfo: 'planner/plan-info',

    //error resolve 
    errorResolve: 'planner/error/resolve',



    //Get the list pending plans for moidfy 
    pendingPlansInfo: 'planner/pending-plan-info',

    //approve plan info
    approvePlanInfo: 'planner/plan-info/approve',

    //Modify planss Delete method 
    ModifyPlansdelete: 'planner/plan-info/remove',

    // error codes Plan delete method
    errorPlansDelete: 'planner/plan-info/temp/remove',

    //create plan after error resolve
    createPlan: 'planner/create-plan',

    // modify plan service 
    modifyPlan: "planner/plan-info/modify",

  // Check if the selected material code is tyre or not
  checkMaterialCodeIsTyre : "master/check-material-code-tyre",

  // Getting the batch code prefixes for plant Locs
  getBatchCodePrefixes:"master/get-batch-code-prefixes",

    //FGS OPERATIONS API LIST

    //FGS Plan Info list
    //fgsPlannInfo:'ops/plan-info',

    //manual Indent Creation 
    manualIndent: 'ops/indent',

    //create indent for export
    createIndentForExport: 'export/indent',

    //search API && FGS view Dispatch palns
    fgsSearch: 'ops/plan-info',

    // view Indents for FGS && search Indent API
    viewSearchIndents: "ops/indents",

    //view indent for export
    viewIndentForExport: 'export/indents',

    //modify indent for export
    modifyIndentForExport: 'export/modify-indent',

    //Transporter API services 
    transporterIndent: "transporter/indents",

    //Export Truckers API services 
    exportTruckers: "export/export-trackers",

    //get the indent data based on the Id of the Indent 
    getIndentReportInfo: "ops/indent-report",

    // Checking if LS on Same Truck Is allowed Or Not
    isLsOnSameTruckAllowed : "ops/is-multi-loadslip-allowed",
    
    
    //get the destinaton list for Load slip 
    getOpenDestinations: "ops/open-destinations",

    //get the export destination
    getExportDestination: "ops/open-export-destinations",

    //get the export destination
    getExportGateInContainer: "ops/open-export-containers",

    //get the export invoice
    getExportInvoice: 'ops/open-invoices',

    //send invoice list
    sendInvoiceList: 'ops/export-load-slip-items',

    //get reported Trucks 
    getReportedTrucks: "ops/view-trucks",

    // sourceList
    getShipmentSources : "ops/shipment-source-list",

    getOpenPlansSourceLocs : 'ops/open-plans-sources',


    //get Plant truck reported
    getPlantReportedTrucks: "ops/reported",

    //get load slips plans 
    getLoadSlipsPlans: 'ops/load-slip-plans',

    //get the master bay list 
    getPlanByInfo: "master/bay-info",

    // update trcuk weight after gate In event 
    updateTruckWeight: "ops/report-truck-weight",

    // Priority List
    getPriorityList : "ops/priority-list",


    //get load slip utilization
    getLoadSlipUtlizations: 'ops/load-slip-utilization',


    //get load slip utilization
    getLoadSlipUtlizationsForExport: 'ops/load-slip-utilization-export',

    //gate security statics data
    getTruckStatus: 'ops/trucks-status',

    //save load slip as draft
    loadslidSaveasDraft: 'ops/loadslip-draft',

    // multiple Drop load slip draft
    multipleDropLoadSlip: 'ops/multi-loadslip-draft',

    // get drafted load slips 
    getDraftedLoadslips: 'ops/view-loadslips',

    //get load slip details
    getLoadSlipDetailsByID: 'ops/view-loadslip-items',


    //updateLoad slip event
    updateLoadSlipevent: 'ops/loadslip-event', 


    // print loadslip after confirm event in loadslip creation
    printLoadslip: "ops/print-loadslip",


    //post barcode scanning data

    sendToSAPForCodeScan: 'ops/sap-barcode-scan',

    //getIntransitTrucks
    // getRDCIntransitTrcks: "ops/intransit-trucks",

    //RDC report truck
    reportIntransitTruck: "ops/intransit-truck-report",

    //Modify Indent
    ModifyIndent: 'ops/modify-indent',

    //Update Indent
    updateIndent: 'transporter/update-indent',

    // Dashboard data
    getDashboardData:'ops/get-dashboard-data',

    //Update export truckers
    updateExportTruckers: 'export/update-trackers',

    //cancel loadslip 
    cancelLoadslip: "ops/cancel-loadlsip",

    //DownLoad Ident
    indentPDF: 'ops/indent-pdf',

    //sent email form FGS-Operation to Transporter
    sendEmail: "ops/mail-indentDetails",

    //Get All Plant Location for sharing the truck
    shareTruckDestions: 'ops/pickup-locations',

    // Share Truck API
    shareTruck: 'ops/share-truck',

    // get the list of all shared trucks
    getShareTrcuks: "ops/shared-trucks-info",


    //Master Variant Data
    getVariants: 'master/variants-data',

    //get master truck types
    getMasterTruckstype: "master/master-truckTypes",

    //get Master truckTypes when destination is selected
    getMasterTruckTypesWithDest : "master/master-truckTypes-dest",

    //get the list of better transportres with combination of souruce ,destination,
    getTransporterListWithCombination: 'master/transporter-freight',

    deleteMTTruckDedicated : 'master/delete-truck-dedicated',

    updateFreightDetails : 'master/update-freight',


    // Get loadslips  for coorsponging shipment
    openLoadslipDetails: "ops/open-loadslipIds",

    // STO & SO delete
    stosoDelete: 'ops/delete-sosto',

    // Truck Inventory & Truck History
    getTruckData: "ops/trucks-info",

    //getting batch code master data
    batchCodeMasterData: 'master/master-batchcodes',

    //getting category master data
    categoryMasterData: 'master/master-category',

    //getting truck type master data
    truckTypeMasterData: 'master/master-truckTypes',

    //rejectReasonList
    rejectReasonData: 'ops/truck-rejection-codes',

    //reject A Truck
    rejectTruck: 'ops/indent-report',

    // get eLR Flag
    getElrFlag: "ops/get-elr-flag",
    // Generate LR Number
    generateLrNum: "ops/generate-lrnum",
    // print load receipt
    printLoadReceipt: "ops/print-loadreceipt",
    //truck-movement
    truckMovement: "ops/view-trucks-movement",

    //to get indent list from destination
    getIndentFromDest: "ops/open-destination-indents",

    // get All Market Segment
    getMarketSegment: "master/get-all-mktseg",

    // get summary location for Truck
    getSummaryLocations: "master/get-truck-status-locs",

    // export shipping upload

    postExportShipping: "ops/uploadExportShipmentFile",

    // export shipping view API

    getExportShipping: 'ops/view-ExportShipment-data',


    // Admin API's

    // Modify Item 
    modifyItem: "",

    //saveComments In Loadslip
    saveloadslipComments: "ops/add-comments-to-loadslip",

    //planner upload excelfile service app/master/upload-freight-json
    uploadFreight: 'master/upload-freight-json',
    getFreights: "master/freights",
    updateFreight: "master/approve-freight-json",

    getMTOEBom: "master/getMTOeBomInfo",

    getMTREPBom: "master/getMTRepBomInfo",

    getMTPLANTItem: "master/getMTPlantItemInfo",

    getMtItem: "master/getMTItem",
    updateMtItem: "master/update-mtitem-formdata",
    mtItemFileUpload: "master/uploadmtitem",

    getLocationScan: "master/getLocationScan",
    addOrUploadLocationScan: 'master/addOrUploadLocationScan',
    updateLocationScan: 'master/updateLocationScan',

    getMtBatchCodes: "master/getMtBatchCodes",
    addOrUploadMtBatchCodes: "master/addOrUploadMtBatchCodes",
    updateMtBatchCodes: "master/updateMtBatchCodes",

    getMtSapTruckType: "master/getMtSapTruckType",
    updateMtSapTruckType: "master/updateMtSapTruckType",
    addOrUploadMtSapTruckType: "master/addOrUploadMtSapTruckType",

    getMtTruckType: "master/getMtTruckType",
    addOrUploadMtTruckType: "master/addOrUploadMtTruckType",
    updateMtTruckType: "master/updateMtTruckType",

    getMtMaterialGroup: "master/getMtMaterialGroup",
    addOrUploadMtMaterialGroup: "master/uploadMtMaterialGroup",
    updateMtMaterialGroup: "master/updateMtMaterialGroup",

    getMtValve: "master/getMtValve",
    addMtValve: "master/uploadMtValve",
    updateMtValve: "master/updateMtValve",

    getOrderTypeLookup: "master/getOrderTypeLookup",
    uploadOrderTypeLookup: "master/uploadOrderTypeLookup",
    updateOrderTypeLookup: "master/updateOrderTypeLookup",

    getMtTransporter: "master/getTransporters",
    updateTransporter: "master/updateTransporter",
    

    getMtElr: "master/getMtElr",
    uploadMtElr: "master/uploadMtElr",
    updateMtElr: "master/updateMtElr",

    getMtExcessWaitingLocLimit: "master/getMtExcessWaitingLocLimit",
    uploadMtExcessWaitingLocLimit: "master/uploadMtExcessWaitingLocLimit",
    updateMtExcessWaitingLocLimit: "master/updateMtExcessWaitingLocLimit",

    getMtExcessWaitingRepLimit: "master/getMtExcessWaitingRepLimit",
    uploadMtExcessWaitingRepLimit: "master/uploadMtExcessWaitingRepLimit",
    updateMtExcessWaitingRepLimit: "master/updateMtExcessWaitingRepLimit",

    getMtLocationBay: "master/getMtLocationBay",
    uploadMtLocationBay: "master/uploadMtLocationBay",
    deleteMtLocationBay: "master/deleteMtLocationBay",

    getMtLocation: "master/getMtLocation",
    uploadMtLocation: "master/uploadMtLocation",
    updateMtLocation: "master/updateMtLocation",

    getUser: "master/getUser",
    uploadUser: "master/uploadUser",
    updateUser: "master/updateUser",

    changePassword: "master/updatePassword",

    getUserRole: "master/getUserRole",
    uploadUserRole: "master/uploadUserRole",
    updateUserRole: "master/updateUserRole",

    getUserAssociation: "master/getUserAssociation",
    uploadUserAssociation: "master/uploadUserAssociation",
    updateUserAssociation: "master/updateUserAssociation",

    getCtOtmFreightBasis: "master/getCtOtmFreightBasis",
    uploadCtOtmFreightBasis: "master/uploadCtOtmFreightBasis",
    updateCtOtmFreightBasis: "master/updateCtOtmFreightBasis",

    getLocationIdsList: "master/getLocationIdsList",
    getUserIdsList: "master/getUserIdsList",
    getUserRoleIdsList: "master/getUserRoleIdsList",

    getServProList: "master/getServProList",
    addServProv: "master/addServProv",

    getServPros: "master/getServPros",
    getScmgroupsList: "master/getDistinctScmGroupList",

    getTruckDedicatedList : 'master/truck-dedicated',
    saveTruckDedicated : 'master/save-truck-dedicated',

    getPaasTruckTypeList: "master/getPaasTruckTypeList",

    getTruckTypeList: "master/getTruckTypeList",
    getVariantsList: "master/getVariantsList",
    getItemGroupsList: "master/getItemGroupsList",
    getbatchCategoryList: "master/getbatchCategoryList",
    getItemIdList: "master/getItemIdList",

    getLocationClasses: "master/getLocationClasses",
    getbatchCodesForValves: "master/getbatchCodesForValves",

    // Delete Freight
    deleteFreight : 'master/delete-freight-record',


    //saveCommentsInTruckInfo
    saveTruckComments: 'ops/add-comments-to-truck-report',

    //get Reported Driver Details
    getReportedDriverDetails: 'ops/reported-driver-details?truckNumber=',

    //getInvoiceDetailsById
    getInvoiceDetailsById: 'ops/loadslip-invoice-data?loadslipId=',

    //getDestinationDescriptionDataList
    getDestinationDescriptionDataList: 'master/search?description=',

    //loadslipmovement-data
    getLoadslipMomentDetails: 'ops/view-loadslips-movement',

    //updateTruckInventoryDetails
    updateTruckInventoryDetails: 'ops/update-truck-inventory',

    //getPort Of Discharge Master Data
    getDischargePortData: '',

    //get Country of Destination Master Data
    gatCountryofDestinationMasterData: '',

    getMTCustomerDetails : 'master/get-mt-customers',
    
    searchCustLoc : 'master/search-cust-loc',

    getLSCategoryList : 'ops/loadslip-categories',

    getTransporterList : 'master/get-transporter-list',

    getMTCustTypes : 'master/get-cust-types',

    getMTStateCode : 'master/get-state-codes',

    getClsData : 'ops/get-cls-data',

    postOTMService: '/documents'

  }



  checkLogin() {
    if (localStorage.getItem("authToken") && localStorage.getItem("authToken") != null) {
      return true
    }
    else {
      return false;
    }
  }
  checkRole() {
    if (localStorage.getItem('role') && localStorage.getItem("role") != null) {
      return localStorage.getItem("role");
    } else {
      return null
    }
  }
  isDPREPRole(){
    if(this.checkRole() == this.roles.planner3 || this.checkRole() == this.roles.L1MGR 
    || this.checkRole() == this.roles.L2MGR ){
      return true;
    }else{
      return false;
    }
  }


  CheckExtWareHouse() {
    if (localStorage.getItem('isExtWarehouse') && localStorage.getItem("isExtWarehouse") != null) {
      if (localStorage.getItem('isExtWarehouse') == 'true') {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  customDateFormat(date) {
    if (date) {
      var mydate = moment(date, 'DD/MM/YYYY');
      return moment(mydate).format('DD-MMM-YYYY');
    }

  }
  customDateTimeFormat(date) {
    if (date) {
      var mydate = moment(date, 'DD/MM/YYYY hh:mm:ss a');
      return moment(mydate).format('DD-MMM-YYYY HH:mm');
    }
  }


  get_service(url) {

    var localStorageVariable = '';
    if (localStorage.getItem('authToken')) {
      localStorageVariable = localStorage.getItem('authToken');
    }
    let headerJson = {
      'Content-Type': 'application/json',
      'Authorization': localStorageVariable
    };
    const httpOptions = {
      headers: new HttpHeaders(headerJson)
    };

    return this.http.get(this.baseUrl + url, httpOptions).map((response) => {
      return response;
    }).catch(this.handleError);

  }

  post_multipart(url, formData) {
    var localStorageVariable = '';
    if (localStorage.getItem('authToken')) {
      localStorageVariable = localStorage.getItem('authToken');
    }
    let headerJson = {
      // 'Content-Type': 'application/json',
      'Authorization': localStorageVariable
    };
    const httpOptions = {
      headers: new HttpHeaders(headerJson)
    };
    return this.http.post(this.baseUrl + url, formData, httpOptions).map((response) => {
      return response;
    }).catch(this.handleError);
  }

  delete_service(url) {

    var localStorageVariable = '';
    if (localStorage.getItem('authToken')) {
      localStorageVariable = localStorage.getItem('authToken');
    }
    let headerJson = {
      'Content-Type': 'application/json',
      'Authorization': localStorageVariable
    };
    const httpOptions = {
      headers: new HttpHeaders(headerJson)
    };

    return this.http.delete(this.baseUrl + url, httpOptions).map((response) => {
      return response;
    }).catch(this.handleError);

  }

  delete_service_multiParam(url, data) {

    var localStorageVariable = '';
    if (localStorage.getItem('authToken')) {
      localStorageVariable = localStorage.getItem('authToken');
    }
    let headerJson = {
      'Content-Type': 'application/json',
      'Authorization': localStorageVariable
    };
    const httpOptions = {
      headers: new HttpHeaders(headerJson),
      body: data
    };

    return this.http.delete(this.baseUrl + url, httpOptions).map((response) => {
      return response;
    }).catch(this.handleError);

  }


  post_service(url, data) {
    var localStorageVariable = '';
    if (localStorage.getItem('authToken')) {
      localStorageVariable = localStorage.getItem('authToken');
    }
    let headerJson = {
      'Content-Type': 'application/json',
      'Authorization': localStorageVariable
    };
    const httpOptions = {
      headers: new HttpHeaders(headerJson)
    };

    return this.http.post(this.baseUrl + url, data, httpOptions).map((response) => {
      return response;
    }).catch(this.handleError);

  }

  post_otm_service(url,data) {
    var localstorageVariable='';

    let headerJson = {
    //   'Content-Type': 'application/vnd.oracle.resource+json; type=singular',
      'Authorization': "Basic " + btoa("ATL.ATOMDOCUMENT:Changeme@123"),
    //   'Access-Control-Allow-Origin': '*',
    //    "Access-Control-Allow-Credentials": "true",
    //   'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTION',
    // //  "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Allow-Methods, Access-Control-Request-Headers, Authorization, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, ",
    // 'Access-Control-Allow-Headers': 'Origin, X-Api-Key, x-requested-with, Content-Type, Accept, Authorization',
    'cors': 'true'



    };
    const httpOptions = {
      headers: new HttpHeaders(headerJson)
    };

    return this.http.post(url, data, httpOptions).map((response) => {
      return response;
    }).catch(this.handleError);

  }

  post_service_DownLoadExcel(url, data) {
    var localStorageVariable = '';
    if (localStorage.getItem('authToken')) {
      localStorageVariable = localStorage.getItem('authToken');
    }
    let headerJson = {
      'Content-Type': 'application/json',
      'Authorization': localStorageVariable,
    };
    // const httpOptions = {
    //   headers: new HttpHeaders(headerJson),
      
    // };

    return this.http.post(this.baseUrl + url, data, { headers: new HttpHeaders(headerJson),observe: 'response', responseType: 'blob'}).map((response) => {
      return response;
    }).catch(this.handleError);

  }

  get_service_DownLoadExcel(url) {
    var localStorageVariable = '';
    if (localStorage.getItem('authToken')) {
      localStorageVariable = localStorage.getItem('authToken');
    }
    let headerJson = {
      'Content-Type': 'application/json',
      'Authorization': localStorageVariable,
    };
    // const httpOptions = {
    //   headers: new HttpHeaders(headerJson),
      
    // };

    return this.http.get(this.baseUrl + url, { headers: new HttpHeaders(headerJson),observe: 'response', responseType: 'blob'}).map((response) => {
      return response;
    }).catch(this.handleError);

  }

  print_post_service(url, data) {
    var localStorageVariable = '';
    if (localStorage.getItem('authToken')) {
      localStorageVariable = localStorage.getItem('authToken');
    }
    let headerJson = {
      'Content-Type': 'application/json',
      'Authorization': localStorageVariable
    };
    const httpOptions = {
      headers: new HttpHeaders(headerJson)
    };

    return this.http.post(this.baseUrl + url, data, httpOptions).map((response) => {
      console.log(response)
      return response;
    }).catch(this.handleError);

  }
  downloadPDF(url, data): any {

    var localStorageVariable = '';
    if (localStorage.getItem('authToken')) {
      localStorageVariable = localStorage.getItem('authToken');
    }
    let headerJson = {
      'Content-Type': 'application/json',
      'Authorization': localStorageVariable
    };
    const httpOptions = {
      headers: new HttpHeaders(headerJson),
      // responseType: ResponseContentType.Blob,
    };

    return this.http.post(this.baseUrl + url, data, httpOptions).map(
      (res) => {
        return res;
      })
    // return this.http.post(this.baseUrl + url, data,{headers: new HttpHeaders(headerJson), responseType: 'blob', observe: 'response' }).map(
    //   (res) => {
    //       return <Blob>res.blob()
    //   })
  }

// $("#siteDownModal").modal('show');
  private handleError(errorObj: HttpErrorResponse | any) {
    const _self = this;
    let errorMessage: string;
    let body: any;

    // check whether we are connected to the internet not using navigator online
    if (navigator.onLine) {
      if (errorObj instanceof HttpErrorResponse) {
        // if ((errorObj.ok === false && errorObj.status === 0) ) {
        //   errorMessage = 'ATOM Site is Under Maintenance. Please try again after sometime.';
          
        // } else 
        if (errorObj.status === 500) {
          errorMessage = "Something went wrong from server side.. Please try again later", "Error!";
        }
        else if (errorObj.status == 403 || errorObj.status == 401) {
          localStorage.setItem("authToken", '');
          localStorage.setItem("role", "");
          localStorage.setItem("sourceID", "");
          localStorage.setItem("userMenu", "");
          localStorage.setItem("userName", "");
          //  this.router.navigateByUrl('/');
          if (errorObj.error.message == 'Invalid credentials !') {
            errorMessage = errorObj.error.message;
          } else {
            errorMessage = "User unauthorized or Token Expired", "Error!";
            setTimeout(() => {
              window.location.href = "/";
            }, 600);

          }


        }
        else {
          body = errorObj.error || '';
          errorMessage = body.message;
          if (body.status === 101 || body.status === 107 || body.status === 500 || body.status === 403 || body.message === 'Session Expired') {
            this.toastr.error(errorMessage, "Error!");
          }
        }
      }
    } else {
      errorMessage = "No internet connection..Please try again after sometime!!"
    }

    // Removed the SITE UNDER MAINTAINANCE error msg
    // if(!navigator.onLine){
    //   errorMessage = "No internet connection..Please try again after sometime!!"
    // }
    return Observable.throw(errorMessage);
  }


   //Number only Method 

   numberOnly(event): boolean {
    // const charCode = (event.which) ? event.which : event.keyCode;
    // if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    //   return false;
    // }
    // return true;
    var x = event.which || event.keycode;
    if ((x >= 48 && x <= 57) || x == 8 ||
      (x >= 35 && x <= 40) || x == 46)
      return true;
    else
      return false;
  }

}
