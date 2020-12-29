import { Component } from '@angular/core';
import { Satellite } from './satellite';

interface FetchedSatellite {
  name: string;
  type: string;
  launchDate: string;
  orbitType: string;
  operational: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'orbit-report';
  searchTerm = '';
  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl =
      'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(
      function (response: any) {
        response.json().then(
          function (data: { satellites: FetchedSatellite[] }): void {
            let fetchedSatellites = data.satellites;
            const newSatellites = fetchedSatellites.map(
              (satellite: FetchedSatellite): Satellite => {
                const {
                  name,
                  type,
                  launchDate,
                  orbitType,
                  operational,
                } = satellite;
                return new Satellite(
                  name,
                  type,
                  launchDate,
                  orbitType,
                  operational
                );
              }
            );
            this.sourceList = [...this.sourceList, ...newSatellites];
            this.displayList = [...this.sourceList];
          }.bind(this)
        );
      }.bind(this)
    );
  }
  search(searchTerm: string): void {
    this.displayList = this.sourceList.filter((sat) => {
      return sat.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }
}
