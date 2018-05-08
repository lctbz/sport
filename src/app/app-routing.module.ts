import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NatationComponent } from './sport/natation/natation.component';
import { CyclismeComponent } from './sport/cyclisme/cyclisme.component';
import { RunningComponent } from './sport/running/running.component';

const routes: Routes = [
    { path: '', redirectTo: '/app-root', pathMatch: 'full' },
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