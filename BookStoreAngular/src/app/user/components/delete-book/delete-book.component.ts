import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  standalone: false,
  
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.scss'
})
export class DeleteBookComponent implements OnInit {
public userId:string='';
  constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((param)=>{
      this.userId=param['userId'];
    })
  }
}
