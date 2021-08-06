import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  list$: Observable<Car[]> = this.carService.getAll();

  constructor(
    private carService: CarService,
  ) { }

  ngOnInit(): void {
  }

}
