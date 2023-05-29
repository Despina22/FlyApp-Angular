import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DestinationService } from 'src/app/features/destinations/services/destination-service/destination.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private destinationService: DestinationService) {}

  ngOnInit(): void {}

  onSearch(searchValue: string) {
    this.destinationService.searchValue$.next(searchValue);
  }
}
