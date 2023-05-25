import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';

const routes: Routes = [
  { path: '', component: DestinationsComponent },
  {
    path: 'destination/:destinationId',
    component: DestinationDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationsRoutingModule {}
