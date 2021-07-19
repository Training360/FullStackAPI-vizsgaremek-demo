import { Component, Input, OnInit } from '@angular/core';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() tableColumns: ITableColumn[] = [];

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
