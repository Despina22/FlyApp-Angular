import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';
import { DestinationComponent } from './components/destination/destination.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DestinationsRoutingModule } from './destinations-routing.module';

const COMPONENTS = [
  DestinationsComponent,
  DestinationComponent,
  DestinationDetailsComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    RouterModule,
    DestinationsRoutingModule,
  ],
  exports: [DestinationsComponent],
})
export class DestinationsModule {}
