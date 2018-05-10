import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './core/firebase/firebase.service';
import { MatDialog } from '@angular/material';
import { AddActivityDialog } from './shared/dialog/addActivityDialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public firebaseService: FirebaseService,
    public dialog: MatDialog
  ) { }
  sports = [
    { name: "Natation", path: "natation" },
    { name: "Cyclisme", path: "cyclisme" },
    { name: "Running", path: "running" }
  ]

  ngOnInit() {
    this.readActivity();
  }

  addActivity() {
    let dialogRef = this.dialog.open(AddActivityDialog);
    dialogRef.afterClosed().subscribe(res => console.log("cool"));
  }

  readActivity() {
    this.firebaseService.readData();
  }
}
