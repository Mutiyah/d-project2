import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../shared/vehicle.service';
import { IVehicle } from '../vehicle/vehicle';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
vehicle : IVehicle[] = [];
vehicleId : any;
  constructor(public vehicleService : VehicleService,
              public route: ActivatedRoute,
              public routeLink : Router    ) { }

  ngOnInit(): void {
    this.vehicleId = this.route.snapshot.paramMap.get('id');
    this.vehicleService.getVehicles().subscribe(
      (data: any) => {
        this.vehicle = data.results[this.vehicleId];
        console.log(this.vehicle);
      }
    )
  }

}
