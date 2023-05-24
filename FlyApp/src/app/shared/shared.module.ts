import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [SearchComponent, TruncatePipe],
  imports: [CommonModule, FormsModule, MatInputModule, MatIconModule],
  exports: [SearchComponent, TruncatePipe],
})
export class SharedModule {}
