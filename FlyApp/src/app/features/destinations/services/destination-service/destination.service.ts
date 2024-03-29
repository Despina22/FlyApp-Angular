import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Destination } from '../../models/destination.interface';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  searchValue$: Subject<string> = new Subject<string>();

  private readonly baseApiUrl = `${environment.baseApiUrl}destination`;

  constructor(private http: HttpClient) {}

  getDestinations(): Observable<Destination[]> {
    return this.http.get<Destination[]>(this.baseApiUrl);
  }

  getDestinationById(id: number): Observable<Destination> {
    return this.http.get<Destination>(`${this.baseApiUrl}/${id}`);
  }
}
