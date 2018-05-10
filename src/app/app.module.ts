import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { MatToolbarModule, MatTabsModule, MatButtonModule, MatIconModule, MatTableModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { NatationComponent } from './sport/natation/natation.component';
import { CyclismeComponent } from './sport/cyclisme/cyclisme.component';
import { RunningComponent } from './sport/running/running.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FirebaseService } from './core/firebase/firebase.service';
import { AddActivityDialog } from './shared/dialog/addActivityDialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CyclismeComponent,
    HomepageComponent,
    NatationComponent,
    RunningComponent,
    AddActivityDialog
  ],
  entryComponents: [
    AddActivityDialog
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
