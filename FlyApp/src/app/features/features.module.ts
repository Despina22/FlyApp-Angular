import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsComponent } from './destinations/components/destinations/destinations.component';
import { SharedModule } from '../shared/shared.module';
import { DestinationComponent } from './destinations/components/destination/destination.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [DestinationsComponent, DestinationComponent],
  imports: [CommonModule, SharedModule, MatCardModule],
  exports: [DestinationsComponent],
})
export class FeaturesModule {}
