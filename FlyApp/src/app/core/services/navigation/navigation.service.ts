import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  toggleNavigation$: Subject<boolean> = new Subject<boolean>();

  constructor() {}
}
