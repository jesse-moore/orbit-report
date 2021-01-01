import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Satellite } from '../../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css'],
})
export class OrbitCountsComponent implements OnChanges {
  @Input() satellites: Satellite[];
  @Input() satTypes: Set<string>;
  countsArray: { name: string; value: number }[];
  constructor() {}

  ngOnChanges(): void {
    if (!this.satTypes) return;
    const counts: { [key: string]: number } = { Total: 0 };
    this.satTypes.forEach((type) => {
      counts[type] = 0;
    });

    this.satellites.forEach((sat) => {
      counts.Total++;
      counts[sat.type]++;
    });

    this.countsArray = Object.entries(counts).map(([key, value]) => {
      return { name: key, value };
    });
  }
}
