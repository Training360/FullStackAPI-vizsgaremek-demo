import { Injectable } from '@angular/core';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://localhost:3000/';

  userColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "firstName", title: "First Name"},
    {key: "lastName", title: "Last Name"},
    {key: "email", title: "Email"},
    {key: "address", title: "Address"},
    {key: "active", title: "Active"},
  ];

  productColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "name", title: "Name"},
    {key: "description", title: "Description"},
    {key: "price", title: "Price"},
    {key: "active", title: "Active"},
  ];

  orderColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "customer", title: "Customer"},
    {key: "products", title: "Products"},
    {key: "time", title: "Time"},
    {key: "note", title: "Note"},
  ];

  constructor() { }
}
