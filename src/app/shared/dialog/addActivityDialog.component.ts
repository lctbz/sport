import { Component } from "@angular/core";
import { FirebaseService } from "../../core/firebase/firebase.service";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: 'addActivityDialog',
  templateUrl: './addActivityDialog.component.html',
  styleUrls: ['./addActivityDialog.component.css']
})
export class AddActivityDialog {
  constructor(
    public firebaseService: FirebaseService,
    public dialogRef: MatDialogRef<AddActivityDialog>
  ) { }

  onYesClick() {
    this.firebaseService.writeData();
    this.dialogRef.close()
  }

  onNoClick() {
    this.dialogRef.close()
  }
}