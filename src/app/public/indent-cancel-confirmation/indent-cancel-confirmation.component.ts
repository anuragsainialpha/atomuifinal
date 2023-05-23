import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-indent-cancel-confirmation',
  templateUrl: './indent-cancel-confirmation.component.html',
  styleUrls: ['./indent-cancel-confirmation.component.scss']
})
export class IndentCancelConfirmationComponent implements OnInit {

  comments: any;
  titleName: string;
  constructor(
    public dialogRef: MatDialogRef<IndentCancelConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: approvePlanErrors
  ) { }

  ngOnInit() {
    if(this.data.type == 'FULLCANCEL'){
      this.titleName= 'Are you sure,do you want to cancel ?'
    }else{
      this.titleName= 'Are you sure,do you want to Update ?'
    }

  }



}
export class approvePlanErrors {
  comments: string = '';
  type: string = ''
}
