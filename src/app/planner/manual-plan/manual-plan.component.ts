import { HelperServiceService } from './../../services/helper-service/helper-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MatAutocomplete, MatAutocompleteTrigger, MatDialog, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS } from '../../public/date.adapters';
import { fromEvent } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { ManualPlanSuccessDialogComponent } from '../../public/manual-plan-success-dialog/manual-plan-success-dialog.component';
import { NgForm, AbstractControl, FormGroup } from '@angular/forms';
import * as  moment from 'moment'
import { constants } from 'src/app/constants';

declare var $: any;
@Component({
  selector: 'app-manual-plan',
  templateUrl: './manual-plan.component.html',
  styleUrls: ['./manual-plan.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class ManualPlanComponent implements OnInit {
  @ViewChild('f') form: any;
  planData = [];
  planDate: string;
  plant = '';
  destination = '';
  materialCode = '';
  description = "";
  batchCode = '';
  quanitity = "";
  priority = "";
  mktsigment = "";
  source = '';
  index: number = 0;
  destinationList = [];
  materilcodelist = [];
  // batchCodelist = [];
  minDate = new Date();
  IsErrorLog: boolean = false;
  ErrorData: any;
  // formattedDate = '';
  MaterialDescription = '';
  isLoading: boolean = false;
  isValiData: boolean = false;
  manualplanDate = {
    planitems: []
  }
  roles: any;
  check_DP_REP_Role: string;
  priorityList = [1, 2, 3];
  materialDescriptionList: any[];
  batchCodeList = [];
  sourceList: any[];
  descriptionList = [];
  destinationDesc: string;
  comments: any;
  batchCodePrefixList: any = [];
  checkBatchCode: boolean = false;
  constructor(
    public service: ApiserviceService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private helperService: HelperServiceService
  ) { }


  ngOnInit() {
    this.check_DP_REP_Role = this.service.checkRole();
    this.roles = constants.roles;
    localStorage.setItem("userMenu", "create-plan");
    if (this.check_DP_REP_Role == this.roles.planner3 || this.check_DP_REP_Role == this.roles.L2MGR || this.check_DP_REP_Role == this.roles.L2MGR) {
      this.plant = '';
    } else {
      this.plant = localStorage.getItem("sourceID");
    }
    this.planDate = this.helperService.getTodayDateASString();
    // for getting batch code master data
    this.getBatchCodeMasterData();
    this.getBatchCodePrefixes();
  }

  // for getting batch code master data from server
  getBatchCodeMasterData() {
    this.isLoading = true;
    this.service.get_service(ApiserviceService.apisList.batchCodeMasterData).subscribe(response => {
      this.batchCodeList = response['data'];
      this.isLoading = false;
    }, (err) => {
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }
  deletePlan(row) {
    let findIndex = this.planData.indexOf(row);
    this.planData.splice(findIndex, 1);
    this.planData = [...this.planData];
    console.log(this.planData)
  }


  //get materialcode and coorsponding Description also
  getUserSearchMaterial(event) {
    this.MaterialDescription = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.materilcodelist = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?materialCode=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.materilcodelist = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
    if (filtervalue == '') {
      this.MaterialDescription = '';
    }

  }

  // Filter source location
  getfilterSource(event) {
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.sourceList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.sourceList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
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

  //set value destination
  setDestination(value) {
    //  this.destinationDesc = value;
    setTimeout(() => {
      this.destination = value;
    }, 200);
  }

  setDestinationDescription(value) {
    setTimeout(() => {
      this.destinationDesc = value;
    }, 200);
  }

  //filter material description 
  filterMaterialDescription(event) {
    this.materialCode = '';
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.materialDescriptionList = [];
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?materialDesc=' + filtervalue).subscribe(response => {
        console.log("respio", response)
        this.materialDescriptionList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }


  //set value for material code 
  setMaterialCode(value) {
    setTimeout(() => {
      this.materialCode = value;
        }, 300);
  }

  checkIfMaterialCodeIsTyre(form : NgForm) {
    console.log("In method");

    if (this.materialCode) {
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.checkMaterialCodeIsTyre + '?materialCode=' + this.materialCode).subscribe(response => {
        if (response['statusCode'] == 200) {
          this.isLoading = false;
          this.checkBatchCode = response['data'];
          console.log("batchCodeCheck", this.checkBatchCode);
          // Validating the form data
          this.addplan(form);

        }
      }, err => {
        this.isLoading = false;
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
      })
    }
  }

  getBatchCodePrefixes() {
    this.service.get_service(ApiserviceService.apisList.getBatchCodePrefixes).subscribe(response => {
      if (response['statusCode'] == 200) {
        this.batchCodePrefixList = response['data'];
      }
    },
      err => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
  }

  //get bactch code data
  // FilterBacthCode(event) {

  //   let filtervalue = event.target.value;
  //   if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
  //     this.batchCodelist = [];
  //     this.isLoading = true;
  //     this.service.get_service(ApiserviceService.apisList.searchFilter + '?batchCode=' + filtervalue).subscribe(response => {
  //       console.log("respio", response)
  //       this.batchCodelist = response['data'].searchResult;
  //       this.isLoading = false;
  //     }, (err) => {
  //       console.log("Error", err);
  //       this.toastr.error(err ? err : "Something went wrong..", "Error!");
  //       this.isLoading = false;
  //     })
  //   }

  // }

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

  //Add plan date to Local
  addplan(form: NgForm) {

    let data = {
      dispatchDate: this.planDate ? moment(this.planDate).format('DD/MM/YYYY') : '',
      sourceLocation: this.plant,
      destinationLocation: this.destination,
      materialCode: this.materialCode,
      materialDescription: this.MaterialDescription,
      batchCode: this.batchCode,
      quantity: this.quanitity,
      priority: this.priority,
      marketSegment: this.mktsigment,
      destDis: this.destinationDesc,
      comments: this.comments
    }

    const destinationCheck = this.destinationList.some(r => r.value === data.destinationLocation);
    const materialcodeCheck = this.materilcodelist.some(r => r.value === data.materialCode);
    if (this.planDate) {
      if (destinationCheck) {
        if (materialcodeCheck) {
          if (Number(data.quantity) == 0) {
            this.toastr.error("Quantity should be greater than 0")
          } else {

            if (data.marketSegment.length > 10) {
              this.toastr.error('Market segment length can not be more than 10 characters')
            } else {
              console.log("beforeIf");
              if (this.checkBatchCode) {
                let index = this.batchCodePrefixList.findIndex(item => item.LOCATIONID === data.sourceLocation);
                // index will be -1 when the given source has no batchCode prefix to check
                if (index != -1) {
                  // Check th batch code prefix for plant locations and ext_warehouse locs
                  let plantLocDetails = this.batchCodePrefixList[index]
                  if (this.batchCode.startsWith(plantLocDetails.BATCHCODEPREFIX)) {
                    this.addDataToTable(data)
                    form.resetForm(); // or form.reset()
                    this.checkBatchCode = false;
                  } else {
                    this.toastr.error('Batch code ' + data.batchCode + ' is not valid for source loc ' + data.sourceLocation);
                  }
                } else {
                  //When Source other than the plant locs 1007,1001,1002,1004 and ext_warehouse TNR2,TNR4,TNR5,TNR6,TNR7
                  //No need to check for batch prefix
                  this.addDataToTable(data);
                  form.resetForm(); // or form.reset()  
                  this.checkBatchCode = false;
                }
              } else {
                this.addDataToTable(data);
                form.resetForm(); // or form.reset()
                this.checkBatchCode = false;
              }

            }
          }
        } else {
          let checkMaterialDescription = this.materialDescriptionList.some(r => r.description == data.materialDescription);
          if (checkMaterialDescription) {
            this.addDataToTable(data)
            form.resetForm(); // or form.reset()
            this.checkBatchCode = false;
          } else {
            this.toastr.error('Material code not valid. Please select material code from list');
            this.materialCode = '';
            this.MaterialDescription = '';
          }
        }
      } else {
        const checkDestinationDescription = this.descriptionList.some(a => a.description == data.destDis)
        if (checkDestinationDescription) {
          this.addDataToTable(data)
          form.resetForm(); // or form.reset()
          this.checkBatchCode = false;
        } else {
          this.toastr.error('Destination code not valid. Please select destination from list');
        }
      }
    } else {
      this.toastr.error('Please enter Dispatch Date')

    }
  }

  addDataToTable(data) {
    this.planData.push(data);
    this.destinationList = [];
    this.materilcodelist = [];
    this.sourceList = [];
    setTimeout(() => {
      if (this.check_DP_REP_Role == this.roles.planner3) {
        this.plant = '';
      } else {
        this.plant = localStorage.getItem("sourceID");
      }
      this.planDate = this.helperService.getTodayDateASString();
    }, 200);
    console.log("this is not valid data")
    this.planData = [...this.planData];
  }

  //open manual plan success creationb of plan
  openDialog(value) {
    const dialogRef = this.dialog.open(ManualPlanSuccessDialogComponent, {
      // width: '250px',
      data: { planId: value },
      disableClose: true
    });
  }
  //create plan 
  createManualPlan() {
    let modifiedArr = []
    for (let i = 0; i < this.planData.length; i++) {
      let data = {
        "Dispatch Date": this.planData[i].dispatchDate,
        "Source Location": this.planData[i].sourceLocation,
        "Destination Location": this.planData[i].destinationLocation,
        "Material Code": this.planData[i].materialCode,
        "Material Description": this.planData[i].materialDescription,
        "Batch Code": this.planData[i].batchCode,
        "Quantity": this.planData[i].quantity,
        "Priority": this.planData[i].priority,
        "Marketing Segment": this.planData[i].marketSegment,
        "Comments": this.planData[i].comments
      }
      modifiedArr.push(data)
    }
    console.log("planData final changes", modifiedArr)
    let senddata = {
      planItems: modifiedArr
    }
    console.log(senddata, "senddata")
    this.isLoading = true;
    this.service.post_service(ApiserviceService.apisList.plannerService, senddata).subscribe(response => {
      console.log("repsonse of manual plan creation", response);
      if (response['statusCode'] == 200) {
        this.isLoading = false;
        this.planData = [];
        this.toastr.success(response['data'].planStatus ? response['data'].planStatus : "Plan Created successfully..", "Success!");
        let datamodal = {
          status: response['data'].status,
          planId: response['data'].planId,
          message: response['data'].message,
        }
        this.openDialog(datamodal);
      } else {
        // this.isLoading = false;
        // this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        this.isLoading = false;
        this.ErrorData = response['data'];
        $('#errorModal').modal('show');
        // this.toastr.error(this.ErrorData);
        //this.IsErrorLog = true
      }

    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }
  //set material description value 
  setMaterialDescription(value) {
    console.log(value)
    setTimeout(() => {
      this.MaterialDescription = value
      // this.checkIfMaterialCodeIsTyre();
    }, 200);
  }


  clearAll(form: NgForm) {
    // form.resetForm(); // or form.reset();
    form.reset();
    setTimeout(() => {
      this.plant = localStorage.getItem("sourceID");
    }, 200);
    this.destinationList = [];
    this.materilcodelist = [];
    // this.batchCodelist = [];
  }
}





