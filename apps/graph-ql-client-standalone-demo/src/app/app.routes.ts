import { Route } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ClientsComponent,
  },
];
