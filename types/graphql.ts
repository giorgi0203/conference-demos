
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateClientInput {
    name: string;
    email: string;
    phone: string;
    age: number;
}

export class UpdateClientInput {
    name?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    age?: Nullable<number>;
}

export class Client {
    id: string;
    name: string;
    email: string;
    phone: string;
    age: string;
}

export abstract class IQuery {
    abstract clients(): Client[] | Promise<Client[]>;

    abstract client(id: string): Nullable<Client> | Promise<Nullable<Client>>;
}

export abstract class IMutation {
    abstract createClient(input: CreateClientInput): Nullable<Client> | Promise<Nullable<Client>>;

    abstract updateClient(id: string, input: UpdateClientInput): Nullable<Client> | Promise<Nullable<Client>>;

    abstract deleteClient(id: string): Nullable<Client> | Promise<Nullable<Client>>;
}

type Nullable<T> = T | null;
