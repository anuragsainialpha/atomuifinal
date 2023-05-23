import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-file-upload-errors-dialog',
  templateUrl: './file-upload-errors-dialog.component.html',
  styleUrls: ['./file-upload-errors-dialog.component.scss']
})
export class FileUploadErrorsDialogComponent implements OnInit {
  ErrorData:any;
  constructor(
    public dialogRef: MatDialogRef<FileUploadErrorsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {
  }
onNoClick(): void {
    this.dialogRef.close();
  }
}
export interface DialogData {
  ErrorData:''
}