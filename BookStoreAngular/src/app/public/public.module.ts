import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AllBookComponent } from './components/all-book/all-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    PublicComponent,
    AllBookComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class PublicModule { }
