import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../public/date.adapters';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { constants } from 'src/app/constants';
import { HelperServiceService } from 'src/app/services/helper-service/helper-service.service';
import * as moment from 'moment';
@Component({
  selector: 'app-report-truck',
  templateUrl: './report-truck.component.html',
  styleUrls: ['./report-truck.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class ReportTruckComponent implements OnInit {
  gpsProviderList: any[];
  reportingIndentId: any;
  gpsStatus = [];
  index: number;
  gateSecurityTransportReport = [];
  gateSecurityIndents = [];
  transporterList: any[];
  isLoading: boolean = false;
  truckData = [];
  truckInformation = [];
  truckDetailsData = [];
  addedTruckData = [];
  reportedTruckData = [];
  truckNumber = '';
  
 
  //May 2023 - adding fields to truck reporting
  truckCapacity = '';
 //April 2023
 fuelType =['CNG','Petrol','Diesel','Electric']
 bsNorms= ['BS-3','BS-4','BS-6','Others']
  truckgrossVehicleWt = '';
  truckUnladenwt = '';
  GOApprovalReason = '';
  GOApprovedBy = '';
  GOApprovedDate = '';
  containerNum = '';
  driverName = '';
  driverNumber = '';
  driverLicenseNumber = '';
  isClicked: number;
  showDetails = false;
  reportSuccess = false;
  transporter = '';
  indentID = '';
  currentDateAsString = this.helperService.getTodayDateASString();
  fromDate = this.helperService.getTodayDateASString();
  ToDate = this.helperService.getTodayDateASString(); countryList: any[];
  destCountryName: any;
  items = [
    {
      "key": "Yes",
      "value": true
    },
    {
      "key": "No",
      "value": false
    }
  ]

  reportTruckTableShow: boolean = false;
  IsReportedIndentsShow: boolean = false;
  
  page = {
    limit: 10,
    count: 0,
    offset: 0,
    orderBy: 'myColumn1',
    orderDir: 'desc',
    pageSize: 10
  };
  reportedTrucks = [];
  numberofManualEntries: number;
  isCompletedReport: boolean = false;
  gateSecurityStatics: any;
  userRoles: any;
  title: string;
  truckList = [];
  destinationList = [];
  destination: string;
  destinationDesc: any;
  descriptionList = [];
  netRequestedSum = 0;
  reportedSum = 0;
  rejectedSum = 0;
  netBalanceSum = 0;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private helperService: HelperServiceService,
  ) {
    this.gpsStatus = [
      {
        "key": "Yes",
        "viewValue": true
      },
      {
        "key": "No",
        "viewValue": false
      }
    ]

    // get gatesecurity statics like reporting ,Wating,Gated In,Loading
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getTruckStatus).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.gateSecurityStatics = response['data'];
        this.isLoading = false;
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong ", "! Error");
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  ngOnInit() {
    this.userRoles = constants.roles;
    //Activation of Tabs
    if (this.service.checkRole() == this.userRoles.rdc_PLN || (this.service.checkRole() == this.userRoles.JIT_OPERATION)) {
      localStorage.setItem("userMenu", "RDC-GAT-REPORT");
    } else if ((this.service.checkRole() == this.userRoles.gateSecurity) || (this.service.checkRole() == this.userRoles.rdc_GAT) || (this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY)) {
      localStorage.setItem("userMenu", "GAT-REPORT");
    }
    else {
      localStorage.setItem("userMenu", "fgs-truck-status");
    }
    // For title show
    if ((this.service.checkRole() == this.userRoles.rdc_GAT) || (this.service.checkRole() == this.userRoles.rdc_PLN)) {
      this.title = "Receiving RDC > Report Trucks > Against Indent";
    } else if (this.service.checkRole() == this.userRoles.JIT_GATE_SECURITY) {
      this.title = " FGS-JIT > Report Truck > Against Indent";
    } else {
      this.title = " FGS > Report Truck > Against Indent";
    }

    // for getting truck type master
    this.getTruckTypeMasterData();
  }
  // for getting truck type master
  getTruckTypeMasterData() {
    this.service.get_service(ApiserviceService.apisList.truckTypeMasterData).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.truckList = response['data'];
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Some thing went wrong", "!Error");
      }
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    });
  }
  // formateDate(data) {
  //   console.log(data)
  //   let formatted = new Date(data),
  //     mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
  //     day = ("0" + formatted.getDate()).slice(-2);
  //   this.formattedDate = [day, mnth, formatted.getFullYear()].join("/");
  // }

  getTruckDetails(id, i) {
    this.isClicked = i;
    const idx = this.truckInformation.findIndex((item) => {
      return item.indentId == id;
    });
    if (idx !== -1) {
      this.addedTruckData.push(this.truckInformation[idx]);
    } else {
      this.showDetails = true;
    }
  }

  onFooterPage(pageInfo){
    console.log(pageInfo);
    
  }

  // filter transporter list 
  getfilterTransporter(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.transporterList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?transporter=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.transporterList = response['data'].searchResult;
        this.transporterList = [...this.transporterList]
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  // filter gsp provide api
  // getfilterGpsProvider(event) {
  //   let filtervalue = event.target.value;
  //   if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
  //     this.gpsProviderList = [];
  //     this.isLoading = true;
  //     this.service.get_service(ApiserviceService.apisList.searchFilter + '?gpsProvider=' + filtervalue).subscribe(response => {
  //       console.log("respio", response)
  //       this.gpsProviderList = response['data'].searchResult;
  //       this.gpsProviderList = [...this.gpsProviderList]
  //       this.isLoading = false;
  //     }, (err) => {
  //       console.log("Error", err);
  //       this.toastr.error(err ? err : "Something went wrong..", "Error!");
  //       this.isLoading = false;
  //     })
  //   }
  // }
  dateValidation() {
    let isValidDate = true;
    if (this.fromDate) {
      if (this.ToDate == '' || this.ToDate == null || this.ToDate == undefined) {
        this.toastr.error('Please enter Todate');
        isValidDate = false;
      }
    }
    return isValidDate;
  }


  //Search filter 
  indentSearch() {
    if (this.dateValidation()) {
      this.isLoading = true;
      this.IsReportedIndentsShow = false;
      let obj = this.countryList ? (this.countryList.find(a => a.description == this.destCountryName)) : {};
      let searchData = {
        fromDispatchDate: this.fromDate ? (moment(this.fromDate).format("DD/MM/YYYY")) : '',
        toDispatchDate: this.ToDate ? (moment(this.ToDate).format("DD/MM/YYYY")) : '',
        indentID: this.indentID,
        transporter: this.transporter,
        destination: this.destination,
        destCountry: obj ? (obj.value) : ''
      }
      this.service.post_service(ApiserviceService.apisList.viewSearchIndents, searchData).subscribe(response => {
        console.log(response);
        this.gateSecurityIndents = [];
        if (response['statusCode'] == 200) {
          this.clearSummaryData();
          this.gateSecurityIndents = response['data'].indents;
          this.gateSecurityIndents = [... this.gateSecurityIndents];
          this.page.limit = response['data'].pageLength;
          this.page.count = response['data'].total;
          this.reportTruckTableShow = true;
          this.calculateSummaryData();
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong ", "! Error");
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }


  //clear all  the data
  clearAll() {
    this.indentID = '';
    this.transporter = '';
    this.fromDate = '';
    this.ToDate = '';
    this.destinationDesc = "";
    this.descriptionList = [];
    this.transporterList = [];
    this.destination = '';
    this.destinationList = [];
    this.destCountryName = '';
  }

  //data table server side pagination
  datatablePageData(pageInfo: { count?: number, pageSize?: number, limit?: number, offset?: number }) {
    this.index = pageInfo.offset;
    this.isLoading = true;
    // this.page.offset = pageInfo.offset;
    console.log("page info", pageInfo);
    let datatabledata = {
      index: pageInfo.offset,
      pageLength: pageInfo.pageSize,
      fromDispatchDate: this.fromDate ? (moment(this.fromDate).format("DD/MM/YYYY")) : '',
      toDispatchDate: this.ToDate ? (moment(this.ToDate).format("DD/MM/YYYY")) : '',
      indentID: this.indentID,
      transporter: this.transporter,
      destination: this.destination
    }
    this.service.post_service(ApiserviceService.apisList.viewSearchIndents, datatabledata).subscribe(response => {
      this.clearSummaryData();
      this.gateSecurityIndents = response['data'].indents;
      this.gateSecurityIndents = [... this.gateSecurityIndents];
      this.page.limit = response['data'].pageLength;
      this.page.count = response['data'].total;
      this.calculateSummaryData();
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })

  }


//   reportIndent(reportIndentData) {
//     //Check TruckNumber Is entered or not
//     if (reportIndentData.truckNumber && reportIndentData.truckNumber != null) {
//       //Check Truck Type Is entered or not
//       if (reportIndentData.truckType && reportIndentData.truckType != null) {
//         //Check Driver Name Is entered or not
//         if (reportIndentData.driverName && reportIndentData.driverName != null) {
//           //Check DRIVER Contact Is entered or not
//           if (reportIndentData.driverContact && reportIndentData.driverContact != null) {
//             //Check DRIVER License Is entered or not
//             if (reportIndentData.driverLicense && reportIndentData.driverLicense != null) {
//               //Check Gps Enabled  Is entered or not
//               // if (reportIndentData.gpsEnabled && reportIndentData.gpsEnabled != null) {
//               //check GPS provider Data entered or not
//               // if (reportIndentData.gpsProvider && reportIndentData.gpsProvider != null) {
//               //   this.reportTruckSendableData(reportIndentData);
//               // } else {
//               //   this.toastr.error("Please enter Gps Provider");
//               // }

//               //} else {
//               if (reportIndentData.truckGrossVehicleWt && reportIndentData.truckGrossVehicleWt != null){
//                 console.log(reportIndentData.truckCapacity);
//                 this.reportTruckSendableData(reportIndentData);
  
//               } else {
//                 this.toastr.error("Please enter Truck Capacity");  
//               }
            
            
// //            // }
//             } else {
//               this.toastr.error("Please enter driver license number");
//             }
//           } else {
//             this.toastr.error("Please enter driver number");
//           }

//         } else {
//           this.toastr.error("Please enter driver name");
//         }
//       } else {
//         this.toastr.error("Please enter truck type");
//       }
//     } else {
//       this.toastr.error("Please enter truck number");
//     }


//   }

//May 2023
reportIndent(reportIndentData) {
  console.log("Printing Data");
  console.log(reportIndentData);
  
//Calculate truck capacity 
reportIndentData.truckCapacity= reportIndentData.truckGrossVehicleWt - reportIndentData.truckUnladenWt;
  //May 2023
  if ((reportIndentData.bsNorms && reportIndentData.bsNorms !=null) ||
  (this.service.checkRole() == this.userRoles.RDC_GAT || 
  this.service.checkRole() == this.userRoles.rdc_PLN 
  || (this.service.checkRole() == this.userRoles.JIT_OPERATION))) {
  if ((reportIndentData.fuelType && reportIndentData.fuelType !=null) ||
  (this.service.checkRole() == this.userRoles.RDC_GAT || 
  this.service.checkRole() == this.userRoles.rdc_PLN 
  || (this.service.checkRole() == this.userRoles.JIT_OPERATION))) {
  if ((reportIndentData.truckGrossVehicleWt && reportIndentData.truckGrossVehicleWt !=null) ||
  (this.service.checkRole() == this.userRoles.RDC_GAT || 
  this.service.checkRole() == this.userRoles.rdc_PLN 
  || (this.service.checkRole() == this.userRoles.JIT_OPERATION))) {
  if ((reportIndentData.truckUnladenWt && reportIndentData.truckUnladenWt !=null) ||
  (this.service.checkRole() == this.userRoles.RDC_GAT || 
  this.service.checkRole() == this.userRoles.rdc_PLN 
  || (this.service.checkRole() == this.userRoles.JIT_OPERATION))) {
  //Check TruckNumber Is entered or not
  if (reportIndentData.truckNumber && reportIndentData.truckNumber != null) {
    //Check Truck Type Is entered or not
    if (reportIndentData.truckType && reportIndentData.truckType != null) {
      //Check Driver Name Is entered or not
      if (reportIndentData.driverName && reportIndentData.driverName != null) {
        //Check DRIVER Contact Is entered or not
        if (reportIndentData.driverContact && reportIndentData.driverContact != null) {
          //Check DRIVER License Is entered or not
          if (reportIndentData.driverLicense && reportIndentData.driverLicense != null) {
            //Check Gps Enabled  Is entered or not
            // if (reportIndentData.gpsEnabled && reportIndentData.gpsEnabled != null) {
            //check GPS provider Data entered or not
            // if (reportIndentData.gpsProvider && reportIndentData.gpsProvider != null) {
            //   this.reportTruckSendableData(reportIndentData);
            // } else {
            //   this.toastr.error("Please enter Gps Provider");
            // }

            //} else {
            this.reportTruckSendableData(reportIndentData);
            // }
          
          



          
            } else { this.toastr.error("Please enter driver license number");}       
                 
        
             } else { this.toastr.error("Please enter driver number"); }

             } else { this.toastr.error("Please enter driver name"); }  
   
   
              } else {this.toastr.error("Please enter truck type");}
  
              } else {this.toastr.error("Please enter truck number ");}
   
             } else { this.toastr.error("Please enter Unladen Weight");}
 
            } else {this.toastr.error("Please enter Gross Vehicle Weight");}

            } else {this.toastr.error ("Please select fuel type");}
            } else { this.toastr.error ("Please select BS Norms");}



}


  addEvent(type, event) {
    console.log(event.target.value);
    if (event.target.value) {
      switch (type) {
          /* Checking if selected from date greater than to date.
      Clearing the toDate field when from date greater than to date */
        case "fromDateReport":
            let checkToDate: any = this.ToDate;
            console.log("Check--->1", checkToDate);
            if (this.ToDate == this.currentDateAsString) {
              // on page load we are defaluting the  to date with string. Comparing string with date is not possible
              // If toDate is equal to currentDate then chagetingthe checkDate to new Date() otherwise defaulting with toDate
              checkToDate = new Date();
              console.log("Check--->2", checkToDate);
        
            }
          if (this.ToDate && (this.fromDate > checkToDate)) {
            this.ToDate = '';
          }
          // this.ToDate = '';
          break;
        default:
          break;
      }
    }
  }

  //get filter destination result
  getfilterDestination(event) {
    this.destinationDesc = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.destinationList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.destinationList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  //Report truck Sendable data
  reportTruckSendableData(reportIndentData) {
    this.isLoading = true;
    let data = reportIndentData;
    data['indentId'] = this.reportingIndentId;
    data['status'] = "REPORTED";
    let indentdata = this.gateSecurityIndents.find(item => item.indentId == data.indentId)
    data.destDis = indentdata.destDis;
    console.log(data)
    this.service.post_service(ApiserviceService.apisList.getIndentReportInfo, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        let deleteRowIndex = this.gateSecurityTransportReport.indexOf(reportIndentData);
        this.gateSecurityTransportReport.splice(deleteRowIndex, 1);
        let resposneData = response['data'];
        // let noOfTrucksReported = resposneData.reported;
        this.numberofManualEntries = resposneData.netBalance;
        // if (resposneData.reported < resposneData.netRequested) {
        if (this.numberofManualEntries) {
          // this.gateSecurityTransportReport = [];
          let removebleIndex = this.gateSecurityTransportReport.indexOf(reportIndentData);
          if (removebleIndex != -1) {
            this.gateSecurityTransportReport.splice(removebleIndex, 1);
          }
          // Default the truck type from Indent ID
          let currentIndentObj = this.gateSecurityIndents.find(item => item.indentId == this.reportingIndentId);

          if (this.gateSecurityTransportReport.length == 0) {
            this.gateSecurityTransportReport.push({
              truckNumber: '',
              containerNum: '',
              driverName: '',
              driverContact: '',
              driverLicense: '',
              truckType: currentIndentObj.truckType,
              puc: true,
              insurance: true,
              seatBelt: true,
              firstAid: true,
              fireExtenguisher: true,
              fitnessCert: true,
              emergencyCard: true,
              sparKArrestor: true
            });
          }

          // this.numberofManualEntries = resposneData.netRequested - resposneData.reported;

          //   this.gpsProviderList = [];
        } else {
          this.gateSecurityTransportReport = [];
        }
        let updatebleIndex = this.gateSecurityIndents.findIndex(data => data.indentId == this.reportingIndentId);
        this.gateSecurityIndents[updatebleIndex] = resposneData;
        this.gateSecurityIndents = [...this.gateSecurityIndents];
        this.reportedTrucks = [];
        this.reportedTrucks = resposneData['reportedTrucks'];
        this.reportedTrucks = [...this.reportedTrucks];
        this.isLoading = false;
        this.toastr.success(response['message'] ? response['message'] : " Truck assigned sucessfully", "success")
      } else {
        this.isLoading = false;
        this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong ", "!Error")
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    });
  }

  // submit data

  // create manual trcuk assign
  manualTruckAssign(row) {
    // Default the truck type from Indent ID
    let currentIndentObj = this.gateSecurityIndents.find(item => item.indentId == this.reportingIndentId);
    if (this.numberofManualEntries > this.gateSecurityTransportReport.length) {
      this.gateSecurityTransportReport.push({
        truckNumber: '',
        driverName: '',
        driverContact: '',
        driverLicense: '',
        truckType: currentIndentObj.truckType,
        puc: true,
        insurance: true,
        seatBelt: true,
        firstAid: true,
        fireExtenguisher: true,
        fitnessCert: true,
        emergencyCard: true,
        sparKArrestor: true
      })
      this.gateSecurityTransportReport = [...this.gateSecurityTransportReport]
    } else {
      if (!this.truckDetails) {
        this.toastr.error("Can't add more than requested")
      } else {

      }

    }

  }

  //set value destination
  setDestination(value) {
    //  this.destinationDesc = value;
    this.destination = value;
  }

  //set value to destination description
  setDestDescription(value) {
    this.destinationDesc = value;
  }

  getUserDestinationList(event) {
    this.destination = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.getDestinationDescriptionDataList + event.target.value).subscribe(response => {
        if (response['data']) {
          this.descriptionList = response['data'].searchResult;
        }
        this.isLoading = false;
      }, (err) => {
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  //getReportedDriversDetails
  getReportedDriverDetails(truckNumber, Index) {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getReportedDriverDetails + truckNumber + "&indentId=" + this.reportingIndentId).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.isLoading = false;
        //        this.gateSecurityTransportReport[Index].truckNumber = response['data'].
        this.gateSecurityTransportReport[Index].containerNum = response['data'].containerNum;
        this.gateSecurityTransportReport[Index].driverName = response['data'].driverName;
        this.gateSecurityTransportReport[Index].driverContact = response['data'].driverContact;
        this.gateSecurityTransportReport[Index].driverLicense = response['data'].driverLicense;
        this.gateSecurityTransportReport[Index].puc = response['data'].puc;
        this.gateSecurityTransportReport[Index].insurance = response['data'].insurance;
        this.gateSecurityTransportReport[Index].seatBelt = response['data'].seatBelt;
        this.gateSecurityTransportReport[Index].firstAid = response['data'].firstAid;
        this.gateSecurityTransportReport[Index].fireExtenguisher = response['data'].fireExtenguisher;
        this.gateSecurityTransportReport[Index].fitnessCert = response['data'].fitnessCert;
        this.gateSecurityTransportReport[Index].emergencyCard = response['data'].emergencyCard;
        this.gateSecurityTransportReport[Index].sparKArrestor = response['data'].sparKArrestor;
        this.gateSecurityTransportReport[Index].truckUnladenWt=response['data'].truckUnladenWt;
        this.gateSecurityTransportReport[Index].truckGrossVehicleWt=response['data'].truckGrossVehicleWt;
        this.gateSecurityTransportReport[Index].fuelType=response['data'].fuelType;
        this.gateSecurityTransportReport[Index].bsNorms=response['data'].bsNorms;

        // this.gateSecurityTransportReport[Index].truckType = response['data'].truckType;
        // this.gateSecurityTransportReport[Index].driverContact = response['data'].driverName;
      } else {
        this.isLoading = false;
        this.gateSecurityTransportReport[Index].containerNum = '';
        this.gateSecurityTransportReport[Index].driverName = '';
        this.gateSecurityTransportReport[Index].driverContact = '';
        this.gateSecurityTransportReport[Index].driverLicense = '';
        // this.gateSecurityTransportReport[Index].puc = '';
        // this.gateSecurityTransportReport[Index].insurance = '';
        // this.gateSecurityTransportReport[Index].seatBelt = '';
        // this.gateSecurityTransportReport[Index].firstAid = '';
        // this.gateSecurityTransportReport[Index].fireExtenguisher = '';
        // this.gateSecurityTransportReport[Index].fitnessCert = '';
        // this.gateSecurityTransportReport[Index].emergencyCard = '';
        // this.gateSecurityTransportReport[Index].sparKArrestor = '';
        // this.gateSecurityTransportReport[Index].truckType = '';   
        // this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong ", "! Error");
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // report truck details
  truckDetails(row) {
    this.IsReportedIndentsShow = true;
    this.reportingIndentId = row.indentId;
    let totalTrucksRequested = row.netRequested;
    this.reportedTrucks = row.reportedTrucks;
    this.reportedTrucks = [...this.reportedTrucks];
    // this.numberofManualEntries = totalTrucksRequested - this.reportedTrucks.length;
    this.numberofManualEntries = row.netBalance;
    this.gateSecurityTransportReport = [];
    // for (let i = 0; i < this.numberofManualEntries; i++) {
    this.manualTruckAssign(row);
    console.log(this.gateSecurityTransportReport)
    // }
    // this.isLoading = true;
    // this.reportingIndentId = row.indentId;
    // let totalTrucksRequested = row.indented;
    // this.gateSecurityTransportReport = [];
    // this.service.get_service(ApiserviceService.apisList.getIndentReportInfo + "?indentId=" + this.reportingIndentId).subscribe(response => {
    //   console.log(response);
    //   if (response['statusCode'] == 200) {
    //     this.reportedTrucks = response['data'];
    //     this.reportedTrucks = [...this.reportedTrucks];
    //     this.reportTruckTableShow = true;
    //     this.numberofManualEntries = totalTrucksRequested - this.reportedTrucks.length;

    //     //for (let i = 0; i < numberofManualEntries; i++) {
    //     this.manualTruckAssign();
    //     console.log(this.gateSecurityTransportReport)
    //     // }

    //     this.isLoading = false;
    //   } else {
    //     this.isLoading = false;
    //     this.toastr.error(response['message'] ? response['message'] : "Some thing Went Wrong", "!Error")
    //   }
    // }, (err) => {
    //   console.log("Error", err);
    //   this.toastr.error(err ? err : "Something went wrong..", "Error!");
    //   this.isLoading = false;
    // })
  }

  //get filter destination result
  countryOfDestinationFilter(event, type) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?' + type + '=' + filtervalue).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.countryList = [];
          this.countryList = response['data'].searchResult;
          this.isLoading = false;
        } else {
          this.isLoading = false;
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        }

      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }

  }

  //manual truck assign removal line 
  removeManualTruckAssign(index) {
    this.gateSecurityTransportReport.splice(index, 1)
  }

  calculateSummaryData(){
    if(this.gateSecurityIndents.length > 0){
      this.netRequestedSum = this.gateSecurityIndents.reduce((sum, { netRequested }) => sum + netRequested, 0);
      this.reportedSum = this.gateSecurityIndents.reduce((sum, { reported }) => sum + reported, 0);
      this.rejectedSum = this.gateSecurityIndents.reduce((sum, { rejected }) => sum + rejected, 0);
      this.netBalanceSum = this.gateSecurityIndents.reduce((sum, { netBalance }) => sum + netBalance, 0);
    }
  }
  clearSummaryData(){
    this.netRequestedSum = 0;
    this.reportedSum = 0;
    this.rejectedSum = 0;
    this.netBalanceSum = 0;
  }
}
