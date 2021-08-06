import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../model/car';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CarService extends BaseService<Car> {

  constructor(
    public config: ConfigService,
    public http: HttpClient,
  ) {
    super(config, http);
    this.entity = 'cars';
  }

}
