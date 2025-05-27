import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './Services/Login/login.service';
import { NavComponent } from "./Components/nav/nav.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
// #1ed760
export class AppComponent implements OnInit {
  isLoged = signal(false);
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.isLoged.update( c => c = localStorage.getItem('access_token') ? true  : false );
    this.loginService.login()
  }

}
