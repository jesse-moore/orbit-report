import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl =
      'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(
      function (response) {
        response.json().then(
          function (data) {
            let fetchedSatellites = data.satellites;
            const newSatellites = fetchedSatellites.map((satellite) => {
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
            });
            this.sourceList = [...this.sourceList, ...newSatellites];
          }.bind(this)
        );
      }.bind(this)
    );
  }
}
