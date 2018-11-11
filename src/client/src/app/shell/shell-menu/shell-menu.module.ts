import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellMenuComponent } from './shell-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ShellMenuComponent],
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule],
  exports: [ShellMenuComponent]
})
export class ShellMenuModule {}
