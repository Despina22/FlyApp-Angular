import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsComponent } from './destinations/components/destinations/destinations.component';
import { SharedModule } from '../shared/shared.module';
import { DestinationComponent } from './destinations/components/destination/destination.component';
import { MatCardModule } from '@angular/material/card';
import { DestinationDetailsComponent } from './destinations/components/destination-details/destination-details.component';

@NgModule({
  declarations: [
    DestinationsComponent,
    DestinationComponent,
    DestinationDetailsComponent,
  ],
  imports: [CommonModule, SharedModule, MatCardModule, RouterModule],
  exports: [DestinationsComponent],
})
export class FeaturesModule {}
