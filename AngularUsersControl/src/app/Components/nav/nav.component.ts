import { navConst } from '@/app/Consts/navConsts';
import { navInterface } from '@/app/Interface/navInterface';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [NgFor],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  navItems: navInterface[] = [];

  ngOnInit(): void {
    this.navItems = navConst;
  }

}
