import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-approve-plan-errors',
  templateUrl: './approve-plan-errors.component.html',
  styleUrls: ['./approve-plan-errors.component.scss']
})
export class ApprovePlanErrorsComponent implements OnInit {

  errorData:any;
  constructor(
    public dialogRef: MatDialogRef<ApprovePlanErrorsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: approvePlanErrors
  ) { }

  ngOnInit() {
  }

}
export interface approvePlanErrors{
  errorData:''
}