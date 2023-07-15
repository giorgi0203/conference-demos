import { ChangeDetectionStrategy, Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';

@Injectable()
export class HammerConfig extends HammerGestureConfig {
  override overrides = {
    pinch: { enable: true },
    rotate: { enable: false },
  };
}

@Component({
  selector: 'org-clients',
  standalone: true,
  imports: [CommonModule, HammerModule],
  templateUrl: './clients.component.html',
  styles: [],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent {
  clients = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1-869-548-3095',
      age: 42,
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      phone: '1-462-868-0581',
      age: 27,
    },
    {
      id: 3,
      name: 'Michael Johnson',
      email: 'michaeljohnson@example.com',
      phone: '1-688-837-0367',
      age: 56,
    },
    {
      id: 4,
      name: 'Emily Brown',
      email: 'emilybrown@example.com',
      phone: '1-115-539-9377',
      age: 34,
    },
    {
      id: 5,
      name: 'William Davis',
      email: 'williamdavis@example.com',
      phone: '1-823-505-8359',
      age: 22,
    },
    {
      id: 6,
      name: 'Olivia Wilson',
      email: 'oliviawilson@example.com',
      phone: '1-792-890-8222',
      age: 44,
    },
    {
      id: 7,
      name: 'James Miller',
      email: 'jamesmiller@example.com',
      phone: '1-934-371-4993',
      age: 38,
    },
    {
      id: 8,
      name: 'Sophia Taylor',
      email: 'sophiataylor@example.com',
      phone: '1-843-428-1515',
      age: 51,
    },
    {
      id: 9,
      name: 'Alexander Anderson',
      email: 'alexanderanderson@example.com',
      phone: '1-635-193-0363',
      age: 29,
    },
    {
      id: 10,
      name: 'Emma Thomas',
      email: 'emmathomas@example.com',
      phone: '1-275-523-1459',
      age: 31,
    },
  ];
  
  
  swipeLeftHandler(e: any) {
    console.log('swipeLeftHandler()',e);
  }
}
