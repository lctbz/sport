import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NatationComponent } from './sport/natation/natation.component';
import { CyclismeComponent } from './sport/cyclisme/cyclisme.component';
import { RunningComponent } from './sport/running/running.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'natation', component: NatationComponent },
    { path: 'cyclisme', component: CyclismeComponent },
    { path: 'running', component: RunningComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }