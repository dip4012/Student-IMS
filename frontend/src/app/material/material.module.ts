import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
const materialComponent = [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, MatTableModule]
@NgModule({
  imports: [materialComponent],
  exports: [materialComponent],
})
export class MaterialModule { }
