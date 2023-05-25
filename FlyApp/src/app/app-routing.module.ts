import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './features/destinations/components/destinations/destinations.component';
import { DestinationDetailsComponent } from './features/destinations/components/destination-details/destination-details.component';

const appRouter: Routes = [
  { path: '', component: DestinationsComponent },
  {
    path: 'destination/:destinationId',
    component: DestinationDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
