import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "../core/firebase/firebase.service";
@Component({
    selector: 'homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    constructor(
        public firebaseService: FirebaseService
    ) { }
    displayedColumns = ['Type', 'Date', 'Distance', 'Durée', 'Vitesse', 'Calories'];
    dataSource = null;//this.firebaseService.readData();

    ngOnInit() {

    }
}