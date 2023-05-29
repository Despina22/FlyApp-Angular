import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SearchComponent } from './components/search/search.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [SearchComponent, TruncatePipe, SnackbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  exports: [SearchComponent, TruncatePipe],
})
export class SharedModule {}
