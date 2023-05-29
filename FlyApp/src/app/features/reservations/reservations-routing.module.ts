import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewReservationComponent } from './components/new-reservation/new-reservation.component';

const routes: Routes = [{ path: '', component: NewReservationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationsRoutingModule {}
