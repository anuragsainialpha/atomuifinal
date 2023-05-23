import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-conformation-popup',
  templateUrl: './conformation-popup.component.html',
  styleUrls: ['./conformation-popup.component.scss']
})
export class ConformationPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConformationPopupComponent>,
  ) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
