import { Component, OnInit } from '@angular/core';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  tableColumns: ITableColumn[] = this.config.productColumns;

  constructor(
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

}
