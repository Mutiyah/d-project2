import { Injectable } from '@angular/core';
import {IVehicle} from '../vehicle/vehicle';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
vehicleApi : string = "https://swapi.dev/api/vehicles";
  constructor(private http : HttpClient) { }

  getVehicles() : Observable<IVehicle[]> {
      return this.http.get<IVehicle[]>(this.vehicleApi)

  }
}
