import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css'],
})
export class OrbitListComponent implements OnInit {
  @Input() satellites: Satellite[];
  sortedAscending = { name: false, type: false };
  constructor() {}

  ngOnInit(): void {}

  sort(column: string): void {
    if (this.sortedAscending[column]) {
      this.sortDescending(column);
    } else {
      this.sortAscending(column);
    }
    this.sortedAscending[column] = !this.sortedAscending[column];
  }

  sortAscending(column: string) {
    this.satellites.sort(function (a: Satellite, b: Satellite): number {
      if (a[column] < b[column]) {
        return -1;
      } else if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });
  }

  sortDescending(column: string) {
    this.satellites.sort(function (a: Satellite, b: Satellite): number {
      if (a[column] < b[column]) {
        return 1;
      } else if (a[column] > b[column]) {
        return -1;
      }
      return 0;
    });
  }
}
