import { Component, OnInit } from '@angular/core';
import { IVehicle } from  '../vehicle/vehicle';
import {VehicleService} from '../shared/vehicle.service';
import { Subscriber} from 'rxjs';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
vehicleData : IVehicle[] = [];
totalVehicles! : number;

  constructor(public vehicleService : VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(
      data =>{
              this.vehicleData = data.results;
              this.totalVehicles = this.vehicleData.length
              console.log(this.totalVehicles)
    }
    )


}
}
