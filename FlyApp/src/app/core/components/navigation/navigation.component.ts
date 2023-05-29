import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';
import { take, takeUntil } from 'rxjs';
import { Subject } from 'rxjs';
import { NavigationLinksService } from '../../services/navigation-links/navigation-links.service';
import { NavigationLink } from '../../models/navigation-links.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  isNavigationOpen: boolean = false;
  navigationLinks?: NavigationLink[];
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private navigationService: NavigationService,
    private navigationLinksService: NavigationLinksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toggleNavigation();
    this.getNavigationLink();
  }

  toggleNavigation() {
    this.navigationService.toggleNavigation$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((toggle) => (this.isNavigationOpen = toggle));
  }

  getNavigationLink() {
    this.navigationLinksService
      .getNavigationLinks()
      .pipe(take(1))
      .subscribe((data) => (this.navigationLinks = data));
  }

  navigation(navigationLink: NavigationLink) {
    if (navigationLink.name === 'home') {
      this.router.navigate(['/']);
    } else if (navigationLink.name === 'reservation') {
      this.router.navigate(['/reservation']);
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.unsubscribe();
  }
}
