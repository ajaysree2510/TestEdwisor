import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  constructor(private _route:ActivatedRoute, private router:Router) { 
    console.log("constructor is called");
  }
  
  ngOnInit() {

    console.log("ngOnInit is callled");
    

  }

}
