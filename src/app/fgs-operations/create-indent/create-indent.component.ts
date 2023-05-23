import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatDialog } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../public/date.adapters';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { DeleteConfirmationPopupComponent } from '../../public/delete-confirmation-popup/delete-confirmation-popup.component';
import * as  moment from 'moment'
declare var $: any;

@Component({
  selector: 'app-create-indent',
  templateUrl: './create-indent.component.html',
  styleUrls: ['./create-indent.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class CreateIndentComponent implements OnInit {

  materialGrpList: any[];
  portList = [];
  countryList = [];
  transporterName: any;
  transporterList: any;
  truckTypeList: any[];
  formattedDate: string;
  destinationList = [];
  isLoading: boolean = false;
  disPort: any;
  destCountryName: any;
  indentData = [];
  pod: any;
  indentDate = '';
  indentId = '';
  transporter = '';
  source = '';
  destination = '';
  truckType = '';
  materialGrp: string = '';
  count: number;
  minDate = new Date();
  comments = '';
  tte = '';
  materialGroup: string;
  isFrightAvailble_or_not_for_indent: string;
  modalTransporterListvalues = [];
  modalTransporterList: any;
  categoryList = [];
  descriptionList = []; destinationDesc: string;
  truckTypeForDestList = [];
  tempList = [];
  selectedTruckTypeFromSubList: string;
  truckTypeClass: any;
  ;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    public helperService: HelperServiceService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.source = localStorage.getItem("sourceID")
    this.indentDate = this.helperService.getTodayDateASString();
    localStorage.setItem("userMenu", "fgs-indents");
    // Commented because we are getting truck types when DESTINATION is deselected
     this.getTruckTypesList();

    //for getting category master data
    this.getCategoryMasterData();
  }

  //for getting category master data
  getCategoryMasterData() {
    this.service.get_service(ApiserviceService.apisList.categoryMasterData).subscribe(response => {
      this.categoryList = response['data'];
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    })
  }

  //for getting Port Of Discharge master data
  getDischargePortMasterData() {
    this.service.get_service(ApiserviceService.apisList.getDischargePortData).subscribe(response => {
      this.portList = response['data'];
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    })
  }

  //for getting Country Of Destination master data
  getDestinationPortMasterData() {
    this.service.get_service(ApiserviceService.apisList.gatCountryofDestinationMasterData).subscribe(response => {
      this.countryList = response['data'];
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
    })
  }

  createIndent() {
    this.isLoading = true;

    let modifiedData = [];
    for (let i = 0; i < this.indentData.length; i++) {
      let newData = {
        "Dispatch Date": this.indentData[i].dispatchDate,
        "Source Location": this.indentData[i].source,
        "Port Of Discharge": this.indentData[i].pod,
        "Country Of Destination": this.indentData[i].destCountryName,
        "Destination Location": this.indentData[i].destination,
        "Truck Type": this.indentData[i].truckType,
        "TTE": this.indentData[i].tte,
        "Transporter": this.indentData[i].transporter,
        "Category": this.indentData[i].materailGrp,
        "Count": this.indentData[i].indented,
        "comments": this.indentData[i].comments,
        "DEST DESCRIPTION": this.indentData[i].destDis
      }
      modifiedData.push(newData);
    }
    let data = {
      indents: modifiedData
    }
    this.service.post_service(ApiserviceService.apisList.manualIndent, data).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.isLoading = false;
        this.indentData = [];
        this.isFrightAvailble_or_not_for_indent = response['data'];
        // If freight no availble we will show modal otherwise not showing
        if (this.isFrightAvailble_or_not_for_indent) {
          $('#freightModal').modal('show');
        }
        this.toastr.success(response['message'] ? response['message'] : "Indent Created Successfully");

      } else {
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        this.isLoading = false;
      }

    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  //add Indent to the table 
  addIndent(form: NgForm) {
    // if (this.indentDate != '' && this.indentData != null) {
    //   this.formattedDate = this.formattedDate
    // } else {
    //   this.formattedDate = ''
    // }
    console.log('destinationList', this.destinationList);

    if (this.materialGrp) {
      this.materialGrp = this.materialGrp
    }
    else {
      this.materialGrp = ''
    }
    let data = {
      dispatchDate: this.indentDate ? moment(this.indentDate).format('DD/MM/YYYY') : '',
      source: this.source,
      destination: this.destination,
      pod: this.pod,
      destCountryName: this.destCountryName,
      truckType: this.truckType,
      transporter: this.transporterName,
      materailGrp: this.materialGrp,
      indented: this.count,
      comments: this.comments,
      tte: this.tte,
      destDis: this.destinationDesc
    }
    const checkDestination = this.destinationList.some(a => a.value == data.destination);
    const checkPort = (data.pod) ? this.portList.some(a => a.value == data.pod) : true;
    const checkCountry = (data.destCountryName) ? this.countryList.some(a => a.description == data.destCountryName) : true;
    const checkTruckType = this.truckTypeList.some(a => a.value == data.truckType);
    const checkTransporter = this.transporterList ? this.transporterList.some(a => a.value == data.transporter) : '';
    const checkInCombinationListTransporter = this.modalTransporterListvalues ? this.modalTransporterListvalues.some(a => a.trasporter == data.transporter) : '';
    //const checkMaterialGrp =this.materialGrpList.some(a=>a.value == data.materailGrp);

    if (data.dispatchDate) {
      if (checkDestination) {
        if (checkTruckType) {
          if (checkPort) {
            if (checkCountry) {
              if (checkTransporter || checkInCombinationListTransporter) {
                if (Number(data.indented != 0)) {
                  this.appendDataToTable(data);
                  form.resetForm();
                  this.portList = [];
                  this.countryList = [];
                  this.truckTypeClass = [];

                } else {
                  this.toastr.error("Count should be greater than 0")
                }
              } else {
                this.toastr.error("Please select valid Transporter")
              }
            } else {
              this.toastr.error("Please select valid Country")
            }
          } else {
            this.toastr.error("Please select valid Port")
          }
        } else {
          this.toastr.error("Please select valid Truck type")
        }
      } else {
        const checkDestinationDescription = this.descriptionList.some(a => a.description == data.destDis)
        if (checkDestinationDescription) {
          this.appendDataToTable(data);
          form.resetForm();
        } else {
          this.toastr.error("Please select valid destination & Destination Description");
        }

      }
    } else {
      this.toastr.error("Please select indent date")
    }

  }


  appendDataToTable(data) {
    this.indentData.push(data);
    this.indentData = [...this.indentData];
    console.log(this.indentData);
    this.destinationList = [];
    this.truckType = '';
    this.transporterList = [];
    this.materialGrpList = [];
    this.modalTransporterListvalues = [];
    this.modalTransporterList = '';
    this.descriptionList = [];
    this.tte = '';
    this.formattedDate = '';
    setTimeout(() => {
      this.source = localStorage.getItem("sourceID");
      this.indentDate = this.helperService.getTodayDateASString();
    }, 200);
  }

  //delete Indent  
  deleteIndent(row) {
    // let index = this.indentData.indexOf(row);
    // this.indentData.splice(index, 1);
    // this.indentData = [...this.indentData]
    this.openDialog(row);
  }


  //get filter destination result
  getfilterDestination(event, type) {
    if (type == 'destination') {
      this.destinationDesc = '';
    }
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?' + type + '=' + filtervalue+'&forIndent='+true).subscribe(response => {
        console.log("respio", response)
        if(response['statusCode'] == 200){
          switch (type) {
            case "destination":
              this.destinationList = [];
              this.destinationList = response['data'].searchResult;
              console.log('destinationList', this.destinationList.length);
              break;
            case "podSearch":
              this.portList = [];
              this.portList = response['data'].searchResult;
              break;
            case "destCountrySearch":
              this.countryList = [];
              this.countryList = response['data'].searchResult;
              break;
            default:
              break;
          }
          this.isLoading = false;
        }else{
          this.isLoading = false;
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }

  }

  //filter truck type list 
  getTruckTypesList() {
    this.truckTypeList = [];
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getMasterTruckstype).subscribe(response => {
      console.log("respio", response)
      this.truckTypeList = response['data'];
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  //filter truck type list 
  getTruckTypesForDestList() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.getMasterTruckTypesWithDest + "?sourceLoc=" + this.source + "&destLoc=" + this.destination).subscribe(response => {
      console.log("respio", response)
      // this.truckTypeList = response['data'];
      // this.truckTypeForDestList = [...this.truckTypeList];
      // this.tempList = [...this.truckTypeForDestList];
      this.truckTypeClass = response['data'];
      this.isLoading = false;
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
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

  //filter material group
  getfilterMaterialGrp(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.materialGrpList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?materialGrp=' + filtervalue).subscribe(response => {
        this.materialGrpList = response['data'].searchResult;
        console.log("this.materialGrpList", this.materialGrpList)
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }


  //set tte value 
  setTTEvalue(data) {
    this.tte = data;
  }
  //formatting the date from datepicker 
  // formateDate(data) {
  //   console.log(data)
  //   if (data != null && data) {
  //     let formatted = new Date(data),
  //       mnth = ("0" + (formatted.getMonth() + 1)).slice(-2),
  //       day = ("0" + formatted.getDate()).slice(-2);
  //     this.formattedDate = [day, mnth, formatted.getFullYear()].join("/");
  //     console.log(this.formattedDate, "formattedDate")
  //   }
  // }

  openDialog(row) {
    const dialogRef = this.dialog.open(DeleteConfirmationPopupComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        let deletebleIndex = this.indentData.indexOf(row);
        this.indentData.splice(deletebleIndex, 1);
        this.indentData = [...this.indentData];
      }
    })
  }

  // get the list of transporter list with combination of Destination ,source , Truck Type
  getListOfTransporterCombination(transporter) {
    this.isLoading = true;
    this.transporterName = '';
    this.modalTransporterList = '';
    let data = {
      "destLoc": this.destination,
      "souceLoc": this.source,
      "trucktype": transporter,
      'date': moment(this.indentDate).format('DD/MM/YYYY')
    }
    let descriptionObj = this.truckTypeList.find(item => item.value == transporter)
    if (descriptionObj) {
      this.setTTEvalue(descriptionObj.description);
    }
    if (data) {
      this.service.post_service(ApiserviceService.apisList.getTransporterListWithCombination, data).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.modalTransporterListvalues = response['data'];
          if (this.modalTransporterListvalues.length > 0) {
            $('#TransporterListModal').modal('show');
          }
          this.isLoading = false;
        } else {
          this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
          this.isLoading = false;
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    } else {
      this.isLoading = false;
    }
  }

  // setTransporterValue
  setTransporterValue(modalTransporterList) {
    $('#TransporterListModal').modal('hide');
    this.transporterName = modalTransporterList;
  }
  getUserDestinationList(event) {
    this.destination = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.getDestinationDescriptionDataList + filtervalue+'&forIndent='+true).subscribe(response => {
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

  //set value destination
  setDestination(value) {
    //  this.destinationDesc = value;
    setTimeout(() => {
      this.destination = value;
      this.truckType='';
      this.getTruckTypesForDestList();
    }, 200);
  }

  setDestinationDescription(value) {
    setTimeout(() => {
      this.destinationDesc = value;
      this.truckType='';
      this.getTruckTypesForDestList();
    }, 200);
  }

  // openOtherTypesModal() {
  //   if (this.truckType == 'OTHER') {
  //     this.tempList = [...this.truckTypeForDestList];
  //     $('#otherTruckTypesModal').modal('show');
  //     this.getTruckTypesList();
  //   }
  // }
  // closeOtherTruckTypeModal() {
  //   $('#otherTruckTypesModal').modal('hide');
  //   this.truckTypeList = [...this.tempList];
  // }
  // setSelectedTruckType() {
  //   this.selectedTruckTypeFromSubList = this.truckType;
  //   this.tempList = [...this.truckTypeForDestList];
  //   console.log("selected ", this.selectedTruckTypeFromSubList);
  //   let index = this.truckTypeList.findIndex(a => a.value == this.selectedTruckTypeFromSubList);
  //   this.tempList.push(this.truckTypeList[index])

  // }
}


