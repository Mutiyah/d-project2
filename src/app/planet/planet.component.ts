import { Component, OnInit } from '@angular/core';
import { IPlanet } from './planet';
import {PlanetService} from '../shared/planet.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
planetData : IPlanet[] = [];
totalPlanets! : number;

  constructor(public planetService : PlanetService) { }

  ngOnInit(): void {
      this.planetService.getPlanet().subscribe(
        planetApiData => {
          this.planetData = planetApiData.results;
          this.totalPlanets = this.planetData.length;
          console.log(this.totalPlanets);
        }
      )
  }

}
