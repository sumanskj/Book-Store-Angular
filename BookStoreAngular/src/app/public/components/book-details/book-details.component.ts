import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  standalone: false,
  
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent implements OnInit {
public id:number=0;
queryparamUserid='';
queryparamEmail='';

  constructor(private rout:ActivatedRoute){}
  ngOnInit(): void {
    //get userid from Route 
    this.rout.params.subscribe((param)=>{
      this.id=param['id'];

//get userid from querystring 
       this.rout.queryParams.subscribe(queryparam=>{    
        this.queryparamUserid=queryparam['Name'];
        this.queryparamEmail=queryparam['Email']
      })
    });
  }
}
