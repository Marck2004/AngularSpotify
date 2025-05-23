import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './Services/Login/login.service';
import { NavComponent } from "./Components/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})

export class AppComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.login();
  }

}
