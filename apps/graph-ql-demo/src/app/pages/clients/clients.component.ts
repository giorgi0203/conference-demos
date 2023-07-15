import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'org-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styles: [],
})
export class ClientsComponent {
  clients = [
    {
      id: 1,
      name: 'Client 1',
      email: 'bla@gmail.com',
      phone: '123456789',
      age: 30,
    },
    {
      id: 2,
      name: 'Client 2',
      email: 'bla2@gmail.com',
      phone: '123456789',
      age: 30,
    },

  ];

  // fake clients array
  
}
