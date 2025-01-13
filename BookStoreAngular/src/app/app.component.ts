import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  events: string[] = [];
  opened: boolean=false;

  userName='sumanskj';
  email='sample@gmail.com';
  title = 'BookStoreAngular';
}
