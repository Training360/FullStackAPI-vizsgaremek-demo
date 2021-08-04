import { CurrencyPipe, SlicePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { get } from 'lodash';

export interface ITableColumn {
  title: string;
  key: string;
  hidden?: boolean;
  outputTransform?: any;
  htmlOutput?: any;
  pipes?: any[];
  pipeArgs?: any[][];
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public readonly apiUrl: string = 'http://127.0.0.1:3000/';

  userColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "firstName", title: "First Name"},
    {key: "lastName", title: "Last Name"},
    {key: "email", title: "Email"},
    {key: "address", title: "Address",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['country', 'city', 'street']]
    },
    {key: "active", title: "Active", htmlOutput: ConfigService.activeOrInactiveSign},
  ];

  productColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {key: "name", title: "Name"},
    {key: "description", title: "Description"},
    {key: "price", title: "Price", pipes: [new CurrencyPipe('hu-HU')], pipeArgs: [['HUF', 'symbol', '3.0']]},
    {key: "active", title: "Active", htmlOutput: ConfigService.activeOrInactiveSign},
  ];

  orderColumns: ITableColumn[] = [
    {key: "_id", title: "#"},
    {
      key: "user",
      title: "User",
      pipes: [ConfigService.getSubProperty],
      pipeArgs: [['firstName', 'lastName']]
    },
    {key: "products", title: "Products"},
    {key: "time", title: "Time", pipes: [ConfigService.sqlDate]},
    {key: "note", title: "Note",
      pipes: [ConfigService.curveLongString],
      pipeArgs: [[0, 15]]
    },
  ];

  constructor() { }

  static activeOrInactiveSign(v: boolean): string {
    console.log(`fn is running: ${v}`);
    const icon: string = v ? 'fa-check' : 'fa-ban';
    return `<i class="fas ${icon}"></i>`;
  }

  // row.customer.name => (row, 'customer.name')
  static getSubProperty(obj: any, ...keys: string[]): string | number | boolean | undefined {
    return keys.map( key => get(obj, key) ).join(' ');
  }

  static sqlDate(jsTime: number): string | number | boolean | undefined {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    return Intl.DateTimeFormat('hu', options).format(jsTime);
  }

  static curveLongString(
    data: string,
    start: number,
    end: number,
    curve: string = '...'
  ): string {
    return data.slice(start, end) + curve;
  }

}
