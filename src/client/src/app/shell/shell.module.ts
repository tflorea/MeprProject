import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShellToolbarModule } from "./shell-toolbar/shell-toolbar.module";
import { ShellToolbarComponent } from "./shell-toolbar/shell-toolbar.component";

@NgModule({
  imports: [CommonModule, ShellToolbarModule],
  exports: [ShellToolbarComponent]
})
export class ShellModule {}
