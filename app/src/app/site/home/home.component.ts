import { Component } from '@angular/core';
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
export class HomeComponent {

  private allUsers:any[];

  constructor(private http:HttpClient) {

    this.allUsers=[];
  }


}
