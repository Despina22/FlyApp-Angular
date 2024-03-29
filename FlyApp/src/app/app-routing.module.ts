import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRouter: Routes = [
  { path: '', redirectTo: 'destinations', pathMatch: 'full' },

  {
    path: 'destinations',
    loadChildren: () =>
      import('../app/features/destinations/destinations.module').then(
        (module) => module.DestinationsModule
      ),
  },
  {
    path: 'reservation',
    loadChildren: () =>
      import('../app/features/reservations/reservations.module').then(
        (module) => module.ReservationsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
