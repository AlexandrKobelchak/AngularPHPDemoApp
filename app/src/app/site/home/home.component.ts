import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  private allUsers:any[];

  constructor(private http:HttpClient) {

    this.allUsers=[];
  }

  ngOnInit(): void {

    this.http.get("http://mvc.com/Data").subscribe()

  }

}
