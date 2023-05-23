import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiserviceService } from 'src/app/services/api/apiservice.service';
import { constants } from 'src/app/constants';

@Component({
  selector: 'app-manual-plan-success-dialog',
  templateUrl: './manual-plan-success-dialog.component.html',
  styleUrls: ['./manual-plan-success-dialog.component.scss']
})
export class ManualPlanSuccessDialogComponent implements OnInit {
  userRoles: any;
  message:any;
  constructor(
    public service: ApiserviceService,
    public dialogRef: MatDialogRef<ManualPlanSuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: plan
  ) { }


  ngOnInit() {
    this.userRoles = constants.roles;
    console.log(this.data)
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

export interface plan {
  status: string,
  plan_ID: '',
  message:string,
  planId:any
}