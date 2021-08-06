import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.scss']
})
export class CarCreateComponent implements OnInit {

  car: Car = new Car();

  constructor(
    private carService: CarService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSave(ngForm: NgForm): void {
    this.carService.create(ngForm.value).subscribe(
      car => this.router.navigate(['/', 'cars']),
      err => console.error(err)
    );
  }

}
