import { SideNavInterface } from '../../interfaces/side-nav.type';
export const ROUTES: SideNavInterface[] = [
    {
        path: '',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },

            {
                path: '',
                title: 'Client Menu',
                iconType: '',
                icon: '',
                iconTheme: '',
                submenu: [
                    {
                        path: 'client/view',
                        title: 'Clients',
                        iconType: 'nzIcon',
                        iconTheme: 'outline',
                        icon: '',
                        submenu: []
                    }, {
                        path: 'client/add',
                        title: 'Add Client',
                        iconType: 'nzIcon',
                        iconTheme: 'outline',
                        icon: '',
                        submenu: []
                    }, {
                        path: 'client/admin-url',
                        title: 'Assets',
                        iconType: 'nzIcon',
                        iconTheme: 'outline',
                        icon: '',
                        submenu: []
                    },
                ]
            },

    {
        path: 'client/view',
        title: 'client View',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    }
];
