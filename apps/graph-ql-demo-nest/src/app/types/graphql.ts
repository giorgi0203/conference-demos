
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Client {
    id: number;
    name?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    age?: Nullable<number>;
}

export abstract class IQuery {
    abstract client(id: number): Nullable<Client> | Promise<Nullable<Client>>;
}

type Nullable<T> = T | null;
