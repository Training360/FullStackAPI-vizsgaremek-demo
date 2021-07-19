import { Component, OnInit } from '@angular/core';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.userColumns;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
