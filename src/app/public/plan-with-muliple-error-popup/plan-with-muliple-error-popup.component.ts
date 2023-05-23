import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ManualPlanSuccessDialogComponent } from '../manual-plan-success-dialog/manual-plan-success-dialog.component';
@Component({
  selector: 'app-plan-with-muliple-error-popup',
  templateUrl: './plan-with-muliple-error-popup.component.html',
  styleUrls: ['./plan-with-muliple-error-popup.component.scss']
})
export class PlanWithMulipleErrorPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PlanWithMulipleErrorPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: planWithMultipleErrorDatae
  ) { }

  ngOnInit() {
  }

}
export interface planWithMultipleErrorDatae{
  multipleError:'';
}