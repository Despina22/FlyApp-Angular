import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../services/destination-service/destination.service';
import { Destination } from '../../models/destination.interface';
import { take } from 'rxjs';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  destinations?: Destination[];

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.getDestination();
  }

  getDestination() {
    this.destinationService
      .getDestinations()
      .pipe(take(1))
      .subscribe((data) => (this.destinations = data));
  }
}
