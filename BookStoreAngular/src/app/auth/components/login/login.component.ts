import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
public name:string='';
public email:string='';
bookid=5;
bookdetailsQuery1='Suman'
bookdetailsQuery2='Suman@gmail.com'

  constructor(private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryparam=>{
      this.name=queryparam['Name'],
      this.email=queryparam['Email']
    })
  }
  gotoSignUp():void{
this.router.navigate(['/auth/signup']);
  }

  // Pass value into route and Querystring as well
  gotoBookDetail():void{
    this.router.navigate(['/public/book-details',this.bookid],{queryParams:{Name:this.bookdetailsQuery1,Email:this.bookdetailsQuery2}})
  }
}
