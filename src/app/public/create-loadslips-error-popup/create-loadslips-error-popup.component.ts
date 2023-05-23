import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-create-loadslips-error-popup',
  templateUrl: './create-loadslips-error-popup.component.html',
  styleUrls: ['./create-loadslips-error-popup.component.scss']
})
export class CreateLoadslipsErrorPopupComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<CreateLoadslipsErrorPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: createLoadslipErrors
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

}

export interface createLoadslipErrors{
  errorMsgs:''
}