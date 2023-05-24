import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toggleNav: boolean = false;

  constructor(private navigationService: NavigationService) {}

  toggleNavigation() {
    this.toggleNav = !this.toggleNav;
    this.navigationService.toggleNavigation$.next(this.toggleNav);
  }
}
