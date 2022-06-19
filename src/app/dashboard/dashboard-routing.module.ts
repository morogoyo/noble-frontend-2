import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {ViewClientComponent} from '../client/view-client/view-client.component';
import {AuthGuard} from '../_helpers/auth.guard';

const routes: Routes = [
    {
        path: 'home',
        component: DashboardComponent,
        data: {
            title: 'Dashboard ',
            headerDisplay: 'none'
        },
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
