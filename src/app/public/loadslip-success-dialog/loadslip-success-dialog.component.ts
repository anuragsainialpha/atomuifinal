import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loadslip-success-dialog',
  templateUrl: './loadslip-success-dialog.component.html',
  styleUrls: ['./loadslip-success-dialog.component.scss']
})
export class LoadslipSuccessDialogComponent implements OnInit {
  title: string;
  url: string;
  isDraft: boolean = false;
  isPrint: boolean = false;
  isJITDraft: boolean = false;
  isJITPrint: boolean = false;
  update_event: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<LoadslipSuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: loadslipId,
    private router: Router
  ) {
    console.log("------------------->", data)
    if (data) {
      if (data['type'] == "DRAFT") {
        //Check is it a Draft or Update 
        if (data['isupdate']) {
          this.update_event = true;
          this.title = 'Loadslip Updated Successfully !! ';
        } else {
          this.title = 'Loadslip Created Successfully !! ';
        }

        this.isDraft = true;
      } else if (data['type'] == "PRINT") {
        if (data['isupdate']) {
          this.update_event = true;
        }
        this.title = 'Loadslip Printed Successfully !! ';
        this.isPrint = true;
      } else if (data['type'] == "JIT_DRAFT") {
        //Check is it a Draft or Update 
        if (data['isupdate']) {
          this.update_event = true;
          this.title = 'Loadslip Updated Successfully !! ';
        } else {
          this.title = 'Loadslip Created Successfully !! ';
        }
        this.isJITDraft = true;
      } else if (data['type'] == "JIT_PRINT") {
        if (data['isupdate']) {
          this.update_event = true;
        }
        this.title = 'Loadslip Printed Successfully !! ';
        this.isJITPrint = true;

      }
    }
  }


  ngOnInit() {

  }
  onNoClick(): void {
    this.dialogRef.close();
  }


  loadslipFullviewNavigation(data) {
    let loadSlipId; let type;
    // if (data.type == "PRINT" || data.type == 'JIT_PRINT') {
    //   loadSlipId = data.loadslipId;
    //   type = data.loadslipData.loadslipType;
    // } else if (data.type == 'DRAFT' || data.type == 'JIT_DRAFT') {
    //   loadSlipId = data.loadslipData.loadSlipId;
    //   type = data.loadslipData.loadslipDraftDto.loadslipType;
    // }
    loadSlipId = data.loadslipId;
    type = data.loadslipData.loadslipType;
    if (loadSlipId != null) {
      if (type == 'FGS_EXP') {
        this.router.navigateByUrl('/fgs/create-load-slip-for-export/' + loadSlipId);
      } else if (type == 'JIT_OEM') {
        this.router.navigateByUrl('/jit/create-load-slip-for-jit/' + loadSlipId);
      } else {
        this.router.navigateByUrl('/fgs/create-load-slip/' + loadSlipId);
      }
    }
  }

}

export interface loadslipId {
  id: '',
  value: ''
}