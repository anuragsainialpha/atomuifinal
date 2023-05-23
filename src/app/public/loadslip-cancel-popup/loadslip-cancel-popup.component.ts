import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-loadslip-cancel-popup',
  templateUrl: './loadslip-cancel-popup.component.html',
  styleUrls: ['./loadslip-cancel-popup.component.scss']
})
export class LoadslipCancelPopupComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LoadslipCancelPopupComponent>,
  ) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
