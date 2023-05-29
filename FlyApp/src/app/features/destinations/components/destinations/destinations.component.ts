import { Component, OnInit, OnDestroy } from '@angular/core';
import { DestinationService } from '../../services/destination-service/destination.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
