import { Component, OnInit } from '@angular/core';
import { Destination } from '../../models/destination.interface';
import { ActivatedRoute } from '@angular/router';
import { DestinationService } from '../../services/destination-service/destination.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.scss'],
})
export class DestinationDetailsComponent implements OnInit {
  destinationId!: number;
  destination!: Destination;

  constructor(
    private activateRouter: ActivatedRoute,
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    this.destinationId =
      +this.activateRouter.snapshot.paramMap.get('destinationId')!;
    this.getDestinationDetails();
  }

  getDestinationDetails() {
    this.destinationService
      .getDestinationById(this.destinationId)
      .pipe(take(1))
      .subscribe((data) => {
        this.destination = data;
      });
  }
}
