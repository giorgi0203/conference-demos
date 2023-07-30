import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

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
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  handleCreate(dialog: HTMLDialogElement) {
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

  handleUpdate(dialog: HTMLDialogElement) {
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

  openEdit(dialog: HTMLDialogElement, client: IClient) {
    this.clientForm.patchValue(client);
    dialog.showModal();
  }

  closeEdit(dialog: HTMLDialogElement) {
    this.clientForm.reset();
    console.log(this.clientForm.value);

    dialog.close();
  }
}
