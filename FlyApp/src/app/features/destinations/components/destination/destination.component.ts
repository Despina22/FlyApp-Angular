import { Component, OnInit, OnDestroy } from '@angular/core';
import { DestinationService } from '../../services/destination-service/destination.service';
import { Destination } from '../../models/destination.interface';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit, OnDestroy {
  searchedValue: string = '';
  private unsubscribe$: Subject<void> = new Subject<void>();
  destinations?: Destination[];

  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {
    this.getDestination();
    this.searchDestination();
  }

  getDestination() {
    this.destinationService
      .getDestinations()
      .pipe(take(1))
      .subscribe((data) => {
        this.destinations = data;
      });
  }

  searchDestination(): void {
    this.destinationService.searchValue$
      .asObservable()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((term) => {
        console.log(term);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
