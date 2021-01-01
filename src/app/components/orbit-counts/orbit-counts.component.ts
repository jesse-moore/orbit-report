import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Satellite } from '../../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css'],
})
export class OrbitCountsComponent implements OnChanges {
  @Input() satellites: Satellite[];
  total: number = 0;
  spaceDebris: number = 0;
  communication: number = 0;
  probe: number = 0;
  position: number = 0;
  spaceStation: number = 0;
  telescope: number = 0;
  constructor() {}

  ngOnChanges(): void {
    let total = 0;
    let spaceDebris = 0;
    let communication = 0;
    let probe = 0;
    let position = 0;
    let spaceStation = 0;
    let telescope = 0;
    this.satellites.forEach((sat) => {
      total++;
      if (sat.type === 'Space Debris') spaceDebris++;
      if (sat.type === 'Communication') communication++;
      if (sat.type === 'Probe') probe++;
      if (sat.type === 'Positioning') position++;
      if (sat.type === 'Space Station') spaceStation++;
      if (sat.type === 'Telescope') telescope++;
    });
    this.total = total;
    this.spaceDebris = spaceDebris;
    this.communication = communication;
    this.probe = probe;
    this.spaceStation = spaceStation;
    this.telescope = telescope;
  }
}
