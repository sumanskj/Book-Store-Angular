import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  standalone: false,
  
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  userName='sumanskj';
  email='sample@gmail.com';
  title = 'BookStoreAngular';
}
