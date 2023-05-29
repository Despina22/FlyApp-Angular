import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { Destination } from 'src/app/features/destinations/models/destination.interface';
import { DestinationService } from 'src/app/features/destinations/services/destination-service/destination.service';
import { ReservationService } from '../../services/reservation.service';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss'],
})
export class NewReservationComponent implements OnInit {
  title: string = 'New Reservation';
  destinations?: Destination[];

  reservationForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z][a-z]{2,50}$'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z][a-z]{2,50}$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\+[0-9]{6,15}$/),
    ]),
    numberOfPersons: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    destinationId: new FormControl('', [Validators.required]),
  });

  constructor(
    private destinationService: DestinationService,
    private newReservation: ReservationService
  ) {}

  ngOnInit(): void {
    this.getDestinationName();
  }

  getDestinationName() {
    this.destinationService
      .getDestinations()
      .pipe(take(1))
      .subscribe((data) => {
        this.destinations = data;
      });
  }

  onReservation() {
    const reservation = { ...this.reservationForm.value };
    this.newReservation.newReservation(reservation).pipe(take(1)).subscribe();
  }
}
