import { Routes } from '@angular/router';
import {AuthGuard} from '../../_helpers/auth.guard';

export const CommonLayout_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../dashboard/dashboard.module').then(m => m.DashboardModule),
    },
    {
        path: 'client',
        loadChildren: () => import('../../client/client.module').then(m => m.ClientModule)
    },
    {
        path: 'leads',
        loadChildren: () => import('../../leads/leads.module').then(m => m.LeadsModule)
    }
];
