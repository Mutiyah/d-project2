import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IPlanet} from '../planet/planet';
import { HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
planetApi : string = "https://swapi.dev/api/planets";
  constructor(private http: HttpClient) {}

  getPlanet() : Observable<IPlanet[]>{
      return this.http.get<IPlanet[]>(this.planetApi)
  }



}
