import { LoginService } from '@/app/Services/Login/login.service';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
  standalone: true
})
export class LandingComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getToken();
  }
}
