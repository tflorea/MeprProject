import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShellToolbarComponent } from "./shell-toolbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ShellMenuModule } from "../shell-menu/shell-menu.module";

@NgModule({
  declarations: [ShellToolbarComponent],
  imports: [CommonModule, MatToolbarModule, ShellMenuModule],
  exports: [ShellToolbarComponent]
})
export class ShellToolbarModule {}
