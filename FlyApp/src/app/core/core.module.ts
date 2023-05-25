import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { NavigationComponent } from './components/navigation/navigation.component';

const COMPONENTS = [HeaderComponent, NavigationComponent];
@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [...COMPONENTS],
})
export class CoreModule {}
