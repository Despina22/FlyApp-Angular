import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { Destination } from 'src/app/features/destinations/models/destination.interface';
import { DestinationService } from 'src/app/features/destinations/services/destination-service/destination.service';
import { ReservationService } from '../../services/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss'],
})
export class NewReservationComponent implements OnInit {
  title: string = 'New Reservation';
  destinations?: Destination[];
  durationInSeconds = 5;

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
    private newReservation: ReservationService,
    private _snackBar: MatSnackBar,
    private router: Router
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
    this.newReservation
      .newReservation(reservation)
      .pipe(take(1))
      .subscribe(() => {
        this.openSnackBar('You are successfully registered');
        this.router.navigate(['/']);
      });
  }

  openSnackBar(message: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: { message: message },
      duration: this.durationInSeconds * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
