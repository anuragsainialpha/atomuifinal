import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ConformationPopupComponent } from '../../public/conformation-popup/conformation-popup.component';
import { ApiserviceService } from '../../services/api/apiservice.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FileUploadErrorsDialogComponent } from '../../public/file-upload-errors-dialog/file-upload-errors-dialog.component';
import { ManualPlanSuccessDialogComponent } from '../../public/manual-plan-success-dialog/manual-plan-success-dialog.component';
import { PlanWithMulipleErrorPopupComponent } from '../../public/plan-with-muliple-error-popup/plan-with-muliple-error-popup.component';
import { constants } from 'src/app/constants';

@Component({
  selector: 'app-plan-with-errors',
  templateUrl: './plan-with-errors.component.html',
  styleUrls: ['./plan-with-errors.component.scss']
})
export class PlanWithErrorsComponent implements OnInit {
  datatablesDestinationList: any[];
  datatablesSourceList: any;
  datatablesBatchcodeList: any[];
  materilcodelist: any[];
  status: boolean = false;
  editing = {};
  batchCodeList = [];
  somedata: {};
  ELEMENT_DATA = [];
  plant: string;
  dispDate: string;
  destination: string;
  materialCode: string;
  MeterialDesc: string;
  batchCode: string;
  mktSigment: string;
  quantity: number;
  priority: number
  plan: any;
  planId: number;
  errorCode = '';
  duplicateRecords = [];
  locationRecords = [];
  materialCodeRecords = [];
  itemTtecodeRecords = [];
  itemCategoryCodeRecords = [];
  batchCodeRecords = [];
  planwithError: boolean = false;
  isLoading: boolean = false;
  NoSKUediting = {};
  batchCodeEditing = {};
  locationRecordsEditing = {};
  userRoles: any;
  constructor(
    public dialog: MatDialog,
    private service: ApiserviceService,
    private toastr: ToastrService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.isLoading = true;
    if (this.activatedRoute.snapshot.params['planData']) {
      this.planId = this.activatedRoute.snapshot.params['planData'];
      this.service.get_service(ApiserviceService.apisList.planData + "?planId=" + this.planId).subscribe(repsonse => {
        if (repsonse['statusCode'] == 200) {
          this.plan = repsonse['data'];
          this.getRecords(this.plan.codesInfo.DUPLICATE_RECORD_CODE);
          this.getRecords(this.plan.codesInfo.BATCH_CODE);
          this.getRecords(this.plan.codesInfo.ITEM_CATEGORY_CODE);
          this.getRecords(this.plan.codesInfo.ITEM_TTE_CODE);
          this.getRecords(this.plan.codesInfo.MATERIAL_CODE);
          this.getRecords(this.plan.codesInfo.LOCATION_CODE);
          this.planwithError = false;
          if (this.plan.c1Count == 0 && this.plan.c2Count == 0
            && this.plan.c3Count == 0 && this.plan.c4Count == 0
            && this.plan.c5Count == 0 && this.plan.c6Count == 0) {
            this.isLoading = false;
          }
        } else {
          this.planwithError = true;
          this.isLoading = false;
        }
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }

    console.log("constructor");

  }

  ngOnInit() {
    console.log("ng onInit");

    console.log("asa", this.ELEMENT_DATA);
    this.userRoles = constants.roles;
  }


  // material code filter api for datatables
  filterMaterialCodeDatatables(event, rowIndex) {
    let indexdata = rowIndex;
    let filtervalue = event.target.value;
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.materialCodeRecords[indexdata]['materialDescription'] = '';
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
  }
  // set values for materila description for datatable
  setMaterialDesDatatable(value, rowIndex) {
    console.log("value of material description", value)
    this.materialCodeRecords[rowIndex]['materialDescription'] = value;
  }


  // filter batch code in datatable
  datatablesBatchcode(event) {
    console.log(event.target.value);
    let destinationKey = event.target.value;
    if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.datatablesBatchcodeList = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?batchCode=' + destinationKey + "&index=" + index).subscribe(response => {
        console.log("respio", response)
        this.datatablesBatchcodeList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  //filter source list
  datatableSoureceLocation(event) {
    console.log(event.target.value);
    let sourceKey = event.target.value;
    if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.datatablesSourceList = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + sourceKey + "&index=" + index).subscribe(response => {
        console.log("respio", response)
        this.datatablesSourceList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  datatableDestinationLocation(event) {
    console.log(event.target.value);
    let sourceKey = event.target.value;
    if (event.target.value.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.datatablesDestinationList = [];
      let index = 0;
      this.isLoading = true
      this.service.get_service(ApiserviceService.apisList.searchFilter + '?destination=' + sourceKey + "&index=" + index).subscribe(response => {
        console.log("respio", response)
        this.datatablesDestinationList = response['data'].searchResult;
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }

  openDialog(row, code, indexvalue) {
    const dialogRef = this.dialog.open(ConformationPopupComponent, { disableClose: true });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.errorPlandDelete(row, code, indexvalue, this.status)
      } else {
        console.log("Nothing to Do")
      }
    });
  }


  //show the duplicate error list in the modal
  showDuplicateErrorModal(data) {
    const dialogRef = this.dialog.open(FileUploadErrorsDialogComponent, {
      data: { ErrorData: data },
      disableClose: true
    });
  }

  //get Records Data  (C6 count )
  getRecords(errorCode) {
    this.isLoading = true;
    this.planId = this.plan.planId;
    this.errorCode = errorCode;
    let index = 0;

    if (errorCode == 'C6') {
      if (this.plan.c6Count > 0) {
        this.service.get_service(ApiserviceService.apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(response => {
          console.log("duplicateRecords", response);
          this.duplicateRecords = response['data'];
          this.duplicateRecords = [... this.duplicateRecords]
          this.isLoading = false;
        }, (err) => {
          console.log("Error", err);
          this.toastr.error(err ? err : "Something went wrong..", "Error!");
          this.isLoading = false;
        })
      } else {
        this.duplicateRecords.length = 0;
      }

    } else if (errorCode == 'C1') {
      if (this.plan.c1Count > 0) {
        this.service.get_service(ApiserviceService.apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(response => {
          console.log("locationRecords", response);
          this.locationRecords = response['data'];
          this.locationRecords = [...this.locationRecords]
          this.isLoading = false;
        }, (err) => {
          console.log("Error", err);
          this.toastr.error(err ? err : "Something went wrong..", "Error!");
          this.isLoading = false;
        })
      } else {
        this.locationRecords.length = 0;
      }

    } else if (errorCode == 'C2') {
      if (this.plan.c2Count > 0) {
        this.service.get_service(ApiserviceService.apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(response => {
          console.log("materialCodeRecords", response);
          this.materialCodeRecords = response['data'];
          this.materialCodeRecords = [...this.materialCodeRecords]
          this.isLoading = false;
        }, (err) => {
          console.log("Error", err);
          this.toastr.error(err ? err : "Something went wrong..", "Error!");
          this.isLoading = false;
        })
      } else {
        this.materialCodeRecords.length = 0;
      }

    }
    else if (errorCode == 'C3') {
      if (this.plan.c3Count > 0) {
        this.service.get_service(ApiserviceService.apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(response => {
          console.log("after delte tte response", response);
          this.itemTtecodeRecords = response['data'];
          this.itemTtecodeRecords = [...this.itemTtecodeRecords];
          this.isLoading = false;
        }, (err) => {
          console.log("Error", err);
          this.toastr.error(err ? err : "Something went wrong..", "Error!");
          this.isLoading = false;
        })
      } else {
        this.itemTtecodeRecords.length = 0;
      }

    }
    else if (errorCode == 'C4') {
      if (this.plan.c4Count > 0) {
        this.service.get_service(ApiserviceService.apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(response => {
          console.log("itemCategoryCodeRecords", response);
          this.itemCategoryCodeRecords = response['data'];
          this.itemCategoryCodeRecords = [...this.itemCategoryCodeRecords];
          this.isLoading = false;
        }, (err) => {
          console.log("Error", err);
          this.toastr.error(err ? err : "Something went wrong..", "Error!");
          this.isLoading = false;
        })
      } else {
        this.itemCategoryCodeRecords.length = 0;
      }

    }
    else if (errorCode == 'C5') {
      if (this.plan.c5Count > 0) {
        this.service.get_service(ApiserviceService.apisList.planErrors + "?planId=" + this.planId + "&errorCode=" + this.errorCode + "&index=" + index).subscribe(response => {
          console.log("batchCodeRecords", response);
          this.batchCodeRecords = response['data'];
          this.batchCodeRecords = [...this.batchCodeRecords];
          this.isLoading = false;
        }, (err) => {
          console.log("Error", err);
          this.toastr.error(err ? err : "Something went wrong..", "Error!");
          this.isLoading = false;
        })
      } else {
        this.batchCodeRecords.length = 0;
      }

    }


  }
  updateValue(event, cell, rowIndex, row) {
    //this.editing[rowIndex + '-' + cell] = false;
    this.locationRecords[rowIndex][cell] = event.target.value;
  }
  //get filter result of bacth code
  getfilterBactchCode(event) {
    let filtervalue = event.target.value
    if (filtervalue.length > 1 && !(event.keyCode == 40 || event.keyCode == 38 || event.keyCode == 13 || event.keyCode == 8)) {
      this.isLoading = true;
      this.service.get_service(ApiserviceService.apisList.searchFilter + "?batchCode=" + filtervalue).subscribe(response => {
        console.log(response);
        this.batchCodeList = response['data'].searchResult
        this.isLoading = false;
      }, (err) => {
        console.log("Error", err);
        this.toastr.error(err ? err : "Something went wrong..", "Error!");
        this.isLoading = false;
      })
    }
  }



  //update NO SKU master material code on inline edit the values
  updateNoSKU(event, cell, rowIndex) {
    //this.editing[rowIndex + '-' + cell] = false;
    this.materialCodeRecords[rowIndex][cell] = event.target.value;
    this.materialCodeRecords = [...this.materialCodeRecords];
  }

  //bacth code update the fileds values on edit
  batchCodeEditvalues(event, cell, rowIndex) {
    this.batchCodeRecords[rowIndex][cell] = event.target.value;
    this.batchCodeRecords = [...this.batchCodeRecords];
  }


  //location records blur event on edit
  locationRecordsBlur(event, cell, rowIndex) {
    this.locationRecords[rowIndex][cell] = event.target.value;
    this.locationRecords = [...this.locationRecords];
  }
  //update no SKU online click
  updateNoSKUMaster(data, errorData, indexvalue) {
    this.isLoading = true;
    let values = {
      errorCode: errorData,
      planItemId: data.id,
      materialCode: data.materialCode
    }
    this.service.post_service(ApiserviceService.apisList.errorResolve, values).subscribe(response => {
      if (response['statusCode'] == '200') {
        let delebleIndex = this.materialCodeRecords.indexOf(data);
        this.materialCodeRecords.splice(delebleIndex, 1);
        this.plan = response['data'];
        this.checkIdAnotherTab(errorData, data);
        this.NoSKUediting = {};
        this.isLoading = false;
        this.toastr.success("Error Resolved Successfully", 'Success!');
      } else {
        let data = response['data']
        this.showDuplicateErrorModal(data)
        this.isLoading = false
      }


    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  updateBatchCode(data, errorData, indexvalue) {
    this.isLoading = true;
    let values = {
      errorCode: errorData,
      planItemId: data.id,
      batchCode: data.batchCode
    }
    this.service.post_service(ApiserviceService.apisList.errorResolve, values).subscribe(response => {
      if (response['statusCode'] == '200') {
        let delebleBatchCodeIndex = this.batchCodeRecords.indexOf(data);
        this.batchCodeRecords.splice(delebleBatchCodeIndex, 1);
        this.batchCodeEditing = {};
        this.batchCodeRecords = [...this.batchCodeRecords];
        this.plan = response['data'];
        this.isLoading = false;
        this.toastr.success("Error Resolved Successfully", 'Success!');
      } else {
        let data = response['data']
        this.showDuplicateErrorModal(data)
        this.isLoading = false
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  //Check  TTE Not avaliable 
  updateTTENotavailable(data, errorData, indexvalue) {
    this.isLoading = true;
    let values = {
      errorCode: errorData,
      planItemId: data.id,
      materialCode: data.materialCode
    }
    this.service.post_service(ApiserviceService.apisList.errorResolve, values).subscribe(response => {
      if (response['statusCode'] == '200') {
        let deletebleTTEIndex = this.itemTtecodeRecords.indexOf(data);
        this.itemTtecodeRecords.splice(deletebleTTEIndex, 1);
        this.itemTtecodeRecords = [...this.itemTtecodeRecords];
        this.plan = response['data'];
        this.isLoading = false;
        this.toastr.success("Error Resolved Successfully", 'Success!');
      } else {
        let data = response['data']
        this.showDuplicateErrorModal(data)
        this.isLoading = false
      }


    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }


  //update location codes 
  locationRecordsUpdate(data, errorData, indexvalue) {
    this.isLoading = true;
    let values = {
      errorCode: errorData,
      planItemId: data.id,
      sourceCode: data.sourceLocation,
      destinationCode: data.destinationLocation
    }
    console.log(values);
    this.service.post_service(ApiserviceService.apisList.errorResolve, values).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == '200') {
        let deletebleLocationRecordsIndex = this.locationRecords.indexOf(data);
        this.locationRecords.splice(deletebleLocationRecordsIndex, 1);
        this.locationRecordsEditing = {};
        this.locationRecords = [...this.locationRecords];
        this.plan = response['data'];
        this.isLoading = false;
        this.toastr.success("Error Resolved Successfully", 'Success!');
      } else {
        let data = response['data']
        this.showDuplicateErrorModal(data)
        this.isLoading = false
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }


  //update Item category 
  updateItemCategory(data, errorData, indexvalue) {
    this.isLoading = true;
    let values = {
      errorCode: errorData,
      planItemId: data.id,
      materialCode: data.materialCode,
    }
    console.log(values);
    this.service.post_service(ApiserviceService.apisList.errorResolve, values).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == '200') {
        let deletebleItemCategoryIndex = this.itemCategoryCodeRecords.indexOf(data);
        this.itemCategoryCodeRecords.splice(deletebleItemCategoryIndex, 1);
        this.itemCategoryCodeRecords = [...this.itemCategoryCodeRecords];
        this.plan = response['data'];
        this.isLoading = false;
        this.toastr.success("Error Resolved Successfully", 'Success!');
      } else {
        let data = response['data']
        this.showDuplicateErrorModal(data)
        this.isLoading = false
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }


  //Comman delete plan method
  errorPlandDelete(row, errorCode, rowIndex, status) {
    let plan_id = row.id;
    //Delte if the error code was ITEM_CATEGORY_CODE (Item category Tab)
    if (errorCode == 'C4') {
      this.isLoading = true;
      this.service.delete_service(ApiserviceService.apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          // this.itemCategoryCodeRecords.splice(rowIndex, 1);
          let errorPlanDeleteIndex = this.itemCategoryCodeRecords.indexOf(row);
          this.itemCategoryCodeRecords.splice(errorPlanDeleteIndex, 1);

          this.itemCategoryCodeRecords = [...this.itemCategoryCodeRecords]
          this.plan = response['data'];
          this.checkIdAnotherTab(errorCode, row);
          this.isLoading = false;
          this.status = false;
          this.toastr.success("Plan Record deleted Successfully", 'Success!');
        }
        else if (response['statusCode'] == 405) {
          this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status)
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
    //Delete if the error code was BATCH_CODE (Wrong Batch Code   tab)
    else if (errorCode == 'C5') {
      this.isLoading = true;
      this.service.delete_service(ApiserviceService.apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          // this.batchCodeRecords.splice(rowIndex, 1);
          let errorCodeC5Index = this.batchCodeRecords.indexOf(row);
          this.batchCodeRecords.splice(errorCodeC5Index, 1);

          this.batchCodeRecords = [...this.batchCodeRecords]
          this.checkIdAnotherTab(errorCode, row);
          this.plan = response['data'];
          this.isLoading = false;
          this.status = false;
          this.toastr.success("Plan Record deleted Successfully", 'Success!');
        } else if (response['statusCode'] == 405) {
          this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status)
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
    //Delete if the error code was DUPLICATE_RECORD_CODE (Duplicate Records    tab)
    else if (errorCode == 'C6') {
      this.isLoading = true;
      this.service.delete_service(ApiserviceService.apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          // this.duplicateRecords.splice(rowIndex, 1);
          let DuplicateDeleteIndex = this.duplicateRecords.indexOf(row);
          this.duplicateRecords.splice(DuplicateDeleteIndex, 1);

          this.duplicateRecords = [...this.duplicateRecords]
          this.checkIdAnotherTab(errorCode, row);
          this.plan = response['data'];
          this.isLoading = false;
          this.status = false;
          this.toastr.success("Plan Record deleted Successfully", 'Success!');
        } else if (response['statusCode'] == 405) {
          this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status)
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
    //Delete if the error code was LOCATION_CODE (Location codes  tab)
    else if (errorCode == 'C1') {
      this.isLoading = true;
      this.service.delete_service(ApiserviceService.apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          // this.locationRecords.splice(rowIndex, 1);
          let locationRecordsDeleteIndex = this.locationRecords.indexOf(row);
          this.locationRecords.splice(locationRecordsDeleteIndex, 1);

          this.locationRecords = [...this.locationRecords];
          this.checkIdAnotherTab(errorCode, row);
          this.plan = response['data'];
          this.isLoading = false;
          this.status = false;
          this.toastr.success("Plan Record deleted Successfully", 'Success!');
        } else if (response['statusCode'] == 405) {
          this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status)
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
    //Delete if the error code was MATERIAL_CODE (NO SKU Master  tab)
    else if (errorCode == 'C2') {
      this.isLoading = true;
      this.service.delete_service(ApiserviceService.apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          // this.materialCodeRecords.splice(rowIndex, 1);
          let materialCodeDeleteIndex = this.materialCodeRecords.indexOf(row);
          this.materialCodeRecords.splice(materialCodeDeleteIndex, 1);

          this.materialCodeRecords = [...this.materialCodeRecords]
          this.checkIdAnotherTab(errorCode, row);
          this.plan = response['data'];
          this.isLoading = false;
          this.status = false;
          this.toastr.success("Plan Record deleted Successfully", 'Success!');
        }
        else if (response['statusCode'] == 405) {
          this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status)
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

    //Delete if the error code was TTE (TTE tab)
    else if (errorCode == 'C3') {
      this.isLoading = true;
      this.service.delete_service(ApiserviceService.apisList.errorPlansDelete + "?id=" + plan_id + "&code=" + errorCode + "&status=" + this.status).subscribe(response => {
        console.log(response);
        if (response['statusCode'] == 200) {
          // this.itemTtecodeRecords.splice(rowIndex, 1);
          let itemTteCodeDelteIndex = this.itemTtecodeRecords.indexOf(row);
          this.itemTtecodeRecords.splice(itemTteCodeDelteIndex, 1);

          this.itemCategoryCodeRecords = [...this.itemCategoryCodeRecords]
          this.checkIdAnotherTab(errorCode, row);
          this.plan = response['data'];
          this.isLoading = false;
          this.status = false;
          this.toastr.success("Plan Record deleted Successfully", 'Success!');
        }
        else if (response['statusCode'] == 405) {
          this.multipleErrorPlanModal(response['message'], row, errorCode, rowIndex, status)
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

  //create plan after error resolve 
  createManualPlan() {
    this.isLoading = true;
    let planId = this.planId;
    this.service.get_service(ApiserviceService.apisList.createPlan + "?id=" + planId).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == 200) {
        this.toastr.success(response['message'], 'Success!');
        this.plan['status'] = 'PLAN_SUCCESS';
        console.log(" this.plan", this.plan)
        this.isLoading = false
      } else {
        this.toastr.error(response['message'] ? response['message'] : "Something went wrong..", "Error!");
        this.isLoading = false
      }

    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }


  //check database id exit in another Tab
  checkIdAnotherTab(code, row) {
    //check the whether id present in any other tab if the there to refetch the data
    if (code != 'C1') {
      //check in Location Codes
      const checkLocationCodes = this.locationRecords.some(a => a.id === row.id);
      if (checkLocationCodes)
        this.getRecords(this.plan.codesInfo.LOCATION_CODE);
    }


    // check in NO SKU Master
    if (code != 'C2') {
      const checkNoSKUMaster = this.materialCodeRecords.some(a => a.id === row.id);
      if (checkNoSKUMaster)
        this.getRecords(this.plan.codesInfo.MATERIAL_CODE);
    }

    if (code != 'C3') {
      //check in TTE Not avaliable 
      const checkTTENotavaliable = this.itemTtecodeRecords.some(a => a.id === row.id);
      if (checkTTENotavaliable)
        this.getRecords(this.plan.codesInfo.ITEM_TTE_CODE);
    }

    if (code != 'C4') {
      //check in Item Category
      const checkItemCategory = this.itemCategoryCodeRecords.some(a => a.id === row.id);
      this.getRecords(this.plan.codesInfo.ITEM_CATEGORY_CODE);
    }

    if (code != 'C5') {
      //check in Wrong Batch Code
      const checkWrongBatchCode = this.batchCodeRecords.some(a => a.id === row.id);
      if (checkWrongBatchCode)
        this.getRecords(this.plan.codesInfo.BATCH_CODE);
    }

    if (code != 'C6') {
      const checkDuplicateRecords = this.duplicateRecords.some(a => a.id === row.id);
      if (checkDuplicateRecords)
        this.getRecords(this.plan.codesInfo.DUPLICATE_RECORD_CODE);
    }
  }


  multipleErrorPlanModal(dataoferror, row, errorCode, rowIndex, status) {
    const dialogRef = this.dialog.open(PlanWithMulipleErrorPopupComponent, {
      data: { multipleError: dataoferror },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.status = true;
        this.errorPlandDelete(row, errorCode, rowIndex, this.status)
      } else {
        this.status = false;
        this.isLoading = false;
      }
    })
  }

  allowDuplicate(data, errorData, indexvalue) {
    this.isLoading = true;
    let values = {
      errorCode: errorData,
      planItemId: data.id,
      duplicateAllowed: true,
    }
    console.log(values);
    this.service.post_service(ApiserviceService.apisList.errorResolve, values).subscribe(response => {
      console.log(response);
      if (response['statusCode'] == '200') {
        let deletebleItemCategoryIndex = this.duplicateRecords.indexOf(data);
        this.duplicateRecords.splice(deletebleItemCategoryIndex, 1);
        this.duplicateRecords = [...this.duplicateRecords];
        this.plan = response['data'];
        this.isLoading = false;
        this.toastr.success("Error Resolved Successfully", 'Success!');
      } else {
        let data = response['data']
        this.showDuplicateErrorModal(data)
        this.isLoading = false
      }
    }, (err) => {
      console.log("Error", err);
      this.toastr.error(err ? err : "Something went wrong..", "Error!");
      this.isLoading = false;
    })
  }

  // tabs change action
  tabsChange(tabIndex) {
    if (tabIndex.index == 0) {
      this.duplicateRecords = [...this.duplicateRecords]
    } else if (tabIndex.index == 1) {
      this.materialCodeRecords = [...this.materialCodeRecords]
    } else if (tabIndex.index == 2) {
      this.batchCodeRecords = [...this.batchCodeRecords]
    } else if (tabIndex.index == 3) {
      this.itemTtecodeRecords = [...this.itemTtecodeRecords]
    } else if (tabIndex.index == 4) {
      this.locationRecords = [...this.locationRecords];
    } else if (tabIndex.index == 5) {
      this.itemCategoryCodeRecords = [...this.itemCategoryCodeRecords]
    }
  }

}









