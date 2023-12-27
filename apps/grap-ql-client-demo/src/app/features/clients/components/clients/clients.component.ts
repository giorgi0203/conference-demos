import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Dialog, DialogRef } from "@angular/cdk/dialog";
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';
import { ClientFormDialogComponent } from '../client-form-dialog/client-form-dialog.component';

export interface IClient {
  id?: number;
  name: string;
  email: string;
  phone: string;
  age: number;
}

@Component({
  selector: 'org-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients$ = this.apollo
    .watchQuery({
      query: gql`
    query clients {
      clients {
        id
        name
        email
        phone
        age
      }
    }
  `,
    }).valueChanges.pipe(map((result: any) => result.data.clients))

    mutationLoading = false

  clientForm = this.fb.group({
    id: new FormControl(),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    age: new FormControl(),
  });

  constructor(
    public fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private dialog:Dialog,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  handleCreate(dialog: DialogRef<ClientFormDialogComponent>) {
    console.log(this.clientForm.value);
    this.mutationLoading = true;
    if (this.clientForm.valid) {
      this.apollo.mutate({
        mutation: gql`
          mutation createClient($client: CreateClientInput!) {
            createClient(input: $client) {
              name
              email
            }
          }
        `,
        variables: {
          client: {
            name: this.clientForm.value.name,
            email: this.clientForm.value.email,
            phone: this.clientForm.value.phone,
            age: parseInt(this.clientForm.value.age),
          },
        
        },
      }).subscribe(({ data }) => {
        console.log(data);
        this.mutationLoading = false;
        dialog.close();
      }
      );

    }
   
  }

  handleUpdate(dialog: DialogRef) {
    console.log(this.clientForm.value);
    this.mutationLoading = true;
    if (this.clientForm.valid) {
      this.apollo.mutate({
        mutation: gql`
          mutation createClient($client: CreateClientInput!) {
            createClient(input: $client) {
              name
              email
            }
          }
        `,
        variables: {
          client: {
            name: this.clientForm.value.name,
            email: this.clientForm.value.email,
            phone: this.clientForm.value.phone,
            age: parseInt(this.clientForm.value.age),
          },
        
        },
      }).subscribe(({ data }) => {
        console.log(data);
        this.mutationLoading = false;
        dialog.close();
      }
      );

    }
   
  }

 

  openDialog(client: IClient|null) {

    if (client) {
      this.clientForm.patchValue(client);
    }
      
    
    const dialogRef =  this.dialog.open<ClientFormDialogComponent>(ClientFormDialogComponent, {
      minWidth: '300px',
      data: {
        clientForm: this.clientForm,
      },
    });
    dialogRef.closed.subscribe((result) => {
      console.log(result);
      if (result === 'create') {
        this.handleCreate(dialogRef);
      }
      if (result === 'update') {
        this.handleUpdate(dialogRef);
      }
      if (result === 'closeEdit') {
        this.closeEdit(dialogRef);
      }
    })
  }

  openCreate() {
    const dialogRef =  this.dialog.open(ClientFormDialogComponent, {
      minWidth: '300px',
      data: {
        clientForm: this.clientForm,
      },
    });
    dialogRef.closed.subscribe((result) => {
      console.log(result);
      if (result === 'create') {
        this.handleCreate(dialogRef);
      }
    })}

  closeEdit(dialog: HTMLDialogElement) {
    this.clientForm.reset();
    console.log(this.clientForm.value);

    dialog.close();
  }
}
