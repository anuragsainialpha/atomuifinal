import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-confirmation-popup',
  templateUrl: './delete-confirmation-popup.component.html',
  styleUrls: ['./delete-confirmation-popup.component.scss']
})
export class DeleteConfirmationPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationPopupComponent>,
  ) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
