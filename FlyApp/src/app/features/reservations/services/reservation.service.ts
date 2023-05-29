import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reservation } from '../models/new-reservation.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly reservationUrl = `${environment.baseApiUrl}reservation`;

  constructor(private http: HttpClient) {}

  newReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.reservationUrl, reservation);
  }
}
