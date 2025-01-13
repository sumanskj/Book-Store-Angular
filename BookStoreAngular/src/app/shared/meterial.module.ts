import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
  ]
})
export class MeterialModule { }
