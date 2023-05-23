import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modify-plan-delete-confirmation',
  templateUrl: './modify-plan-delete-confirmation.component.html',
  styleUrls: ['./modify-plan-delete-confirmation.component.scss']
})
export class ModifyPlanDeleteConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModifyPlanDeleteConfirmationComponent>,
  ) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
