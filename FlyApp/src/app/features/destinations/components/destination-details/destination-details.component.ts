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
  destinationId: number = 0;
  destination: Destination = {
    id: 0,
    title: '',
    imagePath: '',
    description: '',
    price: 0,
    fromDate: '',
    toDate: '',
  };

  constructor(
    private activateRoute: ActivatedRoute,
    private destinationService: DestinationService
  ) {}

  ngOnInit(): void {
    this.destinationId =
      +this.activateRoute.snapshot.paramMap.get('destinationId')!;
    this.getDestinationDetails();
  }

  getDestinationDetails() {
    if (this.destinationId !== null) {
      this.destinationService
        .getDestinationById(this.destinationId)
        .pipe(take(1))
        .subscribe((data) => {
          this.destination = data;
        });
    }
  }
}
