import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NavigationLink } from '../../models/navigation-links.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationLinksService {
  private readonly navigationLinkUrl = `${environment.baseApiUrl}navigation-links`;

  constructor(private http: HttpClient) {}

  getNavigationLinks(): Observable<NavigationLink[]> {
    return this.http.get<NavigationLink[]>(this.navigationLinkUrl);
  }
}
