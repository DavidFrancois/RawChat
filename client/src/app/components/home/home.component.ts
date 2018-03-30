import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private username: string;

  constructor(private _router: Router) { }

  goChat() {
    sessionStorage.setItem('CurrentUser', this.username);
  }

  ngOnInit() {
  }

}
